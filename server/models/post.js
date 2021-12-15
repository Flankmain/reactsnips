const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            default: null
        },

        text: {
            type: String,
            default: 'console.log(Hello world.)'
        },

        //comments are under some post, posts are under null
        under: {
            type: Schema.Types.ObjectId,
            ref: 'post',
            default: null
        },

        poster: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: 'user'
        },

        isPost: {
            type: Boolean,
            default: function() {
                return !this.under;
            }
        },

        isComment: {
            type: Boolean,
            default: function() {
                return !this.isPost;
            }
        }

    }, { timestamps: true }
);



postSchema.methods.simplify = async function () {

    const user = await User.findById(this.poster);

    return {
        title:  this.title,
        text:   this.text,
        time:   (this.updatedAt  ? this.updatedAt : this.createdAt).toLocaleString("fi-FI"), 
        poster: user.name       ? user.name : "[DELETED USER]"
    }
}


module.exports = mongoose.model('post', postSchema);