// import React from 'react'
// import Collaborators from '../components/Collaborators'
// import NavBar from '../components/NavBar'
// import CartComponent from '../components/CartComponent'

// const CollabCart = () => {
//   return (
//     <div>
//         <NavBar/>
//         <Collaborators/>
//         <CartComponent/>
//     </div>
//   )
// }

// export default CollabCart

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedLooks } from "../actions/look";
import Collaborators from '../components/Collaborators'
import NavBar from '../components/NavBar'
import LookGrid from '../components/LookGrid'


const CollabCart = () => {

  const [view, setView] = useState("saved");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;

  useEffect(() => {
    if (userId) {
      dispatch(getSavedLooks({ userId, setAsFeed: true }));
    }
  }, [dispatch, userId]);

  const { feed=[], saved=[], created = [] } = useSelector((state) => state.look);
  
  return (
    <div>
        <NavBar/>
        <Collaborators/>
        {feed.length > 0 ? (
          <LookGrid userId={userId} photoUrls={feed} savedLooks={saved} />
        ) : (
          <h3>No Looks Saved Yet.</h3>
        )}
    </div>
  )
}

export default CollabCart






  


