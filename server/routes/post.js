const router = require('express').Router();
const User = require('../models/user');
const Post = require('../models/post');

//scripts
const validateToken = require('../scripts/validateToken');

//testpoint
router.get('/test', (req, res) => {
    res.status(200).json({message: "The server works."})
})

//get all posts based on filters in url
router.get('/byquery', (req, res) => {

    Post.find(req.query)
        .sort('-date')
        .exec((err, posts) => {
            
            if (err)
                res.status(404).json('Malformed search criteria.');
            
            const reducedResults = posts.map((post) => {
                return post.reduced;
            });

            res.status(200).json(reducedResults);
    });
});

//get all main level post ids
router.get('/ids', (req, res) => {

    Post.find({isPost: true})
        .sort('-date')
        .exec((err, posts) => {
            
            if (err)
                res.status(404).json('ERROR FETCHING POSTS.');
            
            const ids = posts.map((post) => {
                return post.id
            });

            res.status(200).json(ids);
    });
});

//make new top-level post
router.post('/', validateToken, async (req, res) => {

    const createParams = {
        poster: req.user.id,
        title: req.body.title,
        text:  req.body.text
    };

    console.log(createParams);

    try {
        const createdPost = await Post.create(createParams);
        res.redirect(`posts/${createdPost.id}`)
    } catch (err) {
        console.log(err);
    }
});



//get a post or comment by id
router.get('/:postID', async (req, res) => {
    const target = await Post.findById(req.params.postID);
    const simple = await target.simplify();
    return res.status(200).json(simple);
});

//post a comment to post by ID
router.post('/:postID', validateToken, (req, res) => {

    const createParams = {
        poster: req.user.id,
        under: req.params.postID,
        text:  req.body.text
    };

    Post.findOne({_id: req.params.postID})
        .exec((err, post) => {

            if (err || !post)
                return res.status(404).json({success: false, message: 'Post not found.'});
            
            Post.create(createParams);

            return res.redirect('back');
    });
});

router.get('/comment-ids/:postID', (req, res) => {

    Post.find({under: req.params.postID})
        .exec((err, comments) => {

            if (err || !comments)
                return res.status(404).json({success: false, message: 'Comments not found.'});

            const returnArr = comments.map((item) => {
                return item._id;
            });

            return res.status(200).json(returnArr);
    });
});

module.exports = router;