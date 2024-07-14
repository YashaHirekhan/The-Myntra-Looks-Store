

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/look';
import uploadIcon from './assets/image.png';
import './CreatePost.css';

const CreatePost = () => {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState('');
  const [productLink, setProductLink] = useState('');
  const [trendTags, setTrendTags] = useState(['']);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTrendTagChange = (index, value) => {
    const newTrendTags = [...trendTags];
    newTrendTags[index] = value;
    setTrendTags(newTrendTags);
  };

  const handleAddTrendTag = () => {
    setTrendTags([...trendTags, '']);
  };

  const handleRemoveTrendTag = (index) => {
    const newTrendTags = trendTags.filter((_, i) => i !== index);
    setTrendTags(newTrendTags);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);
    formData.append('productLink', productLink);
    formData.append('trendTags', JSON.stringify(trendTags));

    dispatch(createPost(formData));
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <div className="form-group upload-picture" onClick={() => document.getElementById('image').click()}>
          <input
            type="file"
            id="image"
            name="image"  // Added name attribute
            onChange={handleImageChange}
            required
            className="upload-input"
            style={{ display: 'none' }} // Ensure the input is hidden
          />
          <div className="upload-content">
            <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
            <p>Upload Picture</p>
          </div>
        </div>
        <div className="form-group">
          <input
            className="input-1"
            type="text"
            id="caption"
            value={caption}
            placeholder="Add caption Here"
            onChange={(e) => setCaption(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="productLink"
            placeholder="Add Product Link Here"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
          />
        </div>
        <div className="last-two">
          {trendTags.map((tag, index) => (
            <div key={index} className="form-group tag-item">
              <input
                type="text"
                placeholder="Add Trend Tag"
                value={tag}
                onChange={(e) => handleTrendTagChange(index, e.target.value)}
              />
              <button
                type="button"
                className="remove-tag-button"
                onClick={() => handleRemoveTrendTag(index)}
              >
                x
              </button>
            </div>
          ))}
          <div className="form-group tags">
            <button type="button" onClick={handleAddTrendTag}>+</button>
          </div>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
