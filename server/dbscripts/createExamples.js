const User = require('../models/user');
const Post = require('../models/post');


module.exports = () => {
    userData = [
        {name: "Flankmain", email: "aleksanteri.reijo@gmail.com", passwordHash: "12345"},
        {name: "xdman3000", email: "pogCo@co.com", passwordHash: "minecraftiscool"}
    ]

    userData.forEach(data => {
        const doc = new User(data);
        doc.save();
    });

    const id1 = await User.findOne({name: "Flankmain"})
    const id2 = await User.findOne({name: "xdman3000"})

    commentData = [
        {
            poster: id1,
            title:"hi",
            text:"hello, jabronis",
            under:null
        },
        {
            poster: id2,
            title:"xd", 
            text:"i am malganis, I am A TURTTTLEEE",
            under:null
        }
    ]

    commentData.forEach((data) => {
        Post.create(commentData)
    });
}