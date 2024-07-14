

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedLooks } from "../actions/look";
import Collaborators from '../components/Collaborators'
import NavBar from '../components/NavBar'
import LookGrid from '../components/LookGrid'
import { createWishList,getWishListItems,joinWishList } from "../actions/look";



const CollabCart = () => {

  const [view, setView] = useState("saved");
  const [id,setId]=useState("")
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);


  const userId = user.id;
  const { feed=[], saved=[], created = [],wishListId ,wishlist} = useSelector((state) => state.look);


  const handleCreateWishList = ()=>{
    dispatch(createWishList());

  }

  const handleJoinWishList = () =>{
    dispatch(joinWishList(id));
  }

  useEffect(()=>{
    if(wishListId){
      console.log(dispatch)
      dispatch(getWishListItems(wishListId))
    }
  },[wishListId])

  useEffect(() => {
    if (userId) {
      dispatch(getSavedLooks({ userId, setAsFeed: true }));
    }
  }, [dispatch, userId]);

  console.log(wishListId)
  console.log("this is wishlist")
  return (
    <div>
        <NavBar/>
        <Collaborators wishListId={wishListId}/>
        <div>
          {
            !wishListId? <div>
                  <button onClick={handleCreateWishList}>Create WishList</button>
                  <br></br>
                  <h3>Or</h3>
                  <div>
                    <h1>JOIN WishList</h1>
                  <input
                    type="text"
                    placeholder="Enter Wishlist ID"
                    onChange={(e)=>setId(e.target.value)}
                  />
                  <button onClick={handleJoinWishList}>Join Wishlist</button>
                </div>
              </div>: 
              <div>
              {wishlist.length > 0 ? (
          <LookGrid userId={userId} posts={wishlist} photoUrls={feed} savedLooks={saved} />
        ) : (
          <h3>No Items.</h3>
        )}
        </div>
          }
       
        </div>
    </div>
  )
}

export default CollabCart






  


