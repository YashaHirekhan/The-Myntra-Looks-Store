import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getSavedLooks } from "../actions/look";
import NavBar from "../components/NavBar";
import LookGrid from "../components/LookGrid";
import ProfileHeader from "../components/ProfileHeader";
import "../components/ProfileHeader.css";
import SavedLookGrid from "../components/SaveLookGrid";

const Profile = () => {

  const [view, setView] = useState("saved");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;


  const feed = useSelector((state) => state.look.feed) || [];
  const saved = useSelector((state) => state.look.saved) || [];
  const posts = useSelector((state) => state.look.posts) || [];

  useEffect(() => {
    if (userId) {
      dispatch(getSavedLooks({ userId, setAsFeed: true }));
    }
  }, [dispatch, userId, view]);

  return (
    <div>
      <NavBar />
      <ProfileHeader user={user} />

      <div>
        <button
          className={view==="lookbook"? "active_view__btn" : "view__btn"}
          onClick={() => {
            setView("lookbook");
            dispatch(getPosts());
            
          }}
        >
          Look Book
        </button>
        <button
          className={view==="saved"? "active_view__btn": "view__btn"  }
          onClick={() => {
            setView("saved");
            // dispatch(getSavedLooks({ userId, setAsFeed: true }));
          }}
        >
          Favorites
        </button>
      </div>

      {view==="saved"? (
        feed.length > 0 ? (
          <SavedLookGrid userId={userId} photoUrls={feed} savedLooks={saved} />
        ) : (
          <h3>No Looks Saved Yet.</h3>
        )
      ) : (
        feed.length > 0 ? (
          <LookGrid posts={posts} userId={userId} photoUrls={feed} savedLooks={saved} />
        ) : (
          <h3>No Looks Created Yet.</h3>
        )
      )}
    </div>
  );
};

export default Profile;
