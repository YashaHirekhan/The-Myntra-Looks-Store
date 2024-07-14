

const Post = require("../models/post");

const postRouter = require("express").Router();
const { storage } = require('../storage/storage');
const multer = require('multer');
const upload = multer({ storage });

postRouter.post("/create-post",upload.single('image'), async (req, res) => {
  try {
    console.log("here");
    const { caption, productLink} = req.body;
    const imageUrl = req.file.path;

   console.log(imageUrl)

    // Create new post
    const newPost = new Post({
      caption,
      productLink,
      image:imageUrl, // Store Cloudinary image URL
    });

    // Save post to MongoDB
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

postRouter.get('/get-posts', async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports =postRouter;