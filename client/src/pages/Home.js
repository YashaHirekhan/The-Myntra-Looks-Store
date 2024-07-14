import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedLooks, getPosts } from "../actions/look";
import NavBar from "../components/NavBar";
import LookGrid from "../components/LookGrid";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;

  useEffect(() => {
    dispatch(getSavedLooks({ userId, setAsFeed: false }));
    dispatch(getPosts());
    
  }, [dispatch, userId]);

  const { feed, saved,posts } = useSelector((state) => state.look);

  return (
    <div>
      <NavBar />
      <LookGrid posts={posts} userId={userId} photoUrls={feed} savedLooks={saved} />
    </div>
  );
};

export default Home;
