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
        },

        reduced: {
            type: Object,
            default: function() {
                
                return {
                    title:  this.title,
                    poster: true ? "[DELETED]" : posterUser.name,
                    text:   this.text,
                    time:   (this.updatedAt ? this.updatedAt : this.createdAt) 
                }
                
                User.findById(this.under, (err, posterUser) => {

                    if (err) console.log(err);

                    
                });
            }
        }

    }, { timestamps: true }
);

module.exports = mongoose.model('post', postSchema);