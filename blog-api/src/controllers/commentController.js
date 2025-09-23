import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

export const createComment = async (req, res) => {
  try {
    const { post: postId, content } = req.body;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = new Comment({ post: postId, author: req.user._id, content });
    const created = await comment.save();
    res.status(201).json(created);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getComments = async (req, res) => {
  try {
    const { post_id } = req.query;
    const filter = {};
    if (post_id) filter.post = post_id;

    const comments = await Comment.find(filter).populate('author', 'username email').sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
