import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/NavBar.js';
import LookGrid from '../components/LookGrid.js';
import { getSavedLooks, getRandomLooks } from "../actions/look";
import LookPost from '../components/LookPost.js';
import "../components/LookPage.css"

const LookPage = () => {
  
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleComments = () => {
        setIsExpanded(!isExpanded);
    };  

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const userId = user.id;
  
    useEffect(() => {
      dispatch(getSavedLooks({ userId, setAsFeed: false }));
      dispatch(getRandomLooks());
    }, [dispatch, userId]);
  
    const { feed, saved } = useSelector((state) => state.look);
  
    return (
      <div>
        <NavBar />
        <div className='wrapper'>
            <div className='post__wrapper'>
                <LookPost/>
            </div>
            <div className='grid__warpper'>
                <LookGrid userId={userId} photoUrls={feed} savedLooks={saved} />
            </div>
        </div>
        
      </div>
    );
  
}

export default LookPage