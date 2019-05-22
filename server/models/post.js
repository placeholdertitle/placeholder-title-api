const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  body: String,
  date: { type: Date, default: Date.now },
  reposts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Repost'
    }
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
