import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedLooks } from "../actions/look";
// import { getCreatedLooks } from "../actions/look";
import NavBar from "../components/NavBar";
import LookGrid from "../components/LookGrid";
import ProfileHeader from "../components/ProfileHeader";
import "../components/ProfileHeader.css"

const Profile = () => {
  const [view, setView] = useState("saved");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;

  useEffect(() => {
    if (userId) {
      dispatch(getSavedLooks({ userId, setAsFeed: true }));
      // dispatch(getCreatedLooks({ userId, setAsFeed: true })); 
    }
  }, [dispatch, userId]);

  const { feed=[], saved=[], created = [] } = useSelector((state) => state.look);
  

  return (
    <div>
      <NavBar />
      <ProfileHeader user={user} />

      <div>
        <button className={view === "created" ? "active_view__btn" : "view__btn"} onClick={() => setView("created")}>Look Book</button>
        <button className={view === "saved" ? "active_view__btn" : "view__btn"} onClick={() => setView("saved")}>Favorites</button>
      </div>

      {view === "saved" ? (
        feed.length > 0 ? (
          <LookGrid userId={userId} photoUrls={feed} savedLooks={saved} />
        ) : (
          <h3>No Looks Saved Yet.</h3>
        )
      ) : (
        created.length > 0 ? (
          <LookGrid userId={userId} photoUrls={created} /> 
        ) : (
          <h3>No Looks Created Yet.</h3>
        )
      )}
    </div>
  );
};


export default Profile;
