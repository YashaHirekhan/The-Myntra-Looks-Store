import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import LookGrid from '../components/LookGrid.js';
import { getSavedLooks, getPosts, getPostById } from "../actions/look";
import "../components/LookPage.css";


const LookPage = () => {
    const [commentsExpanded, setCommentsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleComments = () => {
        setCommentsExpanded(!commentsExpanded);
    };

    const { postId } = useParams();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user);
    const userId = user ? user.id : null; 
    const post = useSelector((state) => state.look.selectedPost);
    const { feed, saved, posts } = useSelector((state) => state.look);

    useEffect(() => {
      const fetchData = async () => {
        await dispatch(getSavedLooks({ userId, setAsFeed: false }));
        await dispatch(getPosts());
        await dispatch(getPostById(postId));
        setLoading(false);
      };
      fetchData();
    }, [dispatch, userId, postId]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <NavBar />
            <div className='wrapper'>
                <div className='post__wrapper'>
                    <div className="Look_post_wrapper">
                        <div className="Look_wrapper">
                            <div className="Look_container">
                                <a href={post.productUrl}>
                                    <div className="img__wrapper">
                                        <img src={post.image} alt={post.caption} className='img'/>
                                    </div>
                                </a>
                                <button className="save-btn">+</button>
                            </div>
                        </div>

                        <div className="user_info">
                            <div className="vatar">{user.name.charAt(0).toUpperCase()}</div>
                            <div className="username"><h1>{user.name}</h1></div>

                        </div>

                        <h2 className="caption">{post.caption}</h2>
                        <div className="tags_wrapper">
                            <div className="tag">Summer</div>
                            <div className="tag">Boho</div>
                            <div className="tag">cute</div>
                            <div className="tag">Schiffli</div>
                        </div>
                        <div className='comment'>
                            <h3 className="com">Comments</h3>
                            <button className="toggle-comments-btn" onClick={toggleComments}>
                                {commentsExpanded ? 
                                <span class="material-symbols-outlined">arrow_drop_down</span> : <span class="material-symbols-outlined">arrow_drop_up</span>}
                            </button>
                        </div>
                        

                        <input className="comment_input" type="text" placeholder="Add a comment..." />
                        <div className="comment_section">

                            {commentsExpanded && (
                                <div className="comments">
                                    <div className="comment">
                                        <div className="comment_user_info">
                                            <div className="comment_user_pic"></div>
                                            <div className="comment_user">User</div>
                                        </div>
                                        <div className="comment_content">Lorem ipsum dolor sit amet, consectetur adipiscing...</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='grid__warpper'>
                    <LookGrid posts={posts} userId={userId} photoUrls={feed} savedLooks={saved} />
                </div>
            </div>
        </div>
    );
}

export default LookPage;
