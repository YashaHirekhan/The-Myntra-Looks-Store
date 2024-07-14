// import * as unsplashService from "../services/unsplash";
// import * as userService from "../services/users";
// import * as postService from "../services/post";

// export const FETCH_SAVED_LOOKS = "FETCH_SAVED_LOOKS";
// export const SET_FEED = "SET_FEED";
// export const SAVE_LOOK = "SAVE_LOOK";
// export const DELETE_SAVED_LOOK = "DELETE_SAVED_LOOK";
// export const CREATE_POST = "CREATE_POST";
// export const FETCH_POSTS = "FETCH_POSTS";

// export const getSavedLooks =
//   ({ userId, setAsFeed }) =>
//   async (dispatch) => {
//     const response = await userService.getProfile(userId);
//     dispatch({
//       type: FETCH_SAVED_LOOKS,
//       photoUrls: response.data.savedLooks,
//     });
//     if (setAsFeed) {
//       dispatch({
//         type: SET_FEED,
//         photoUrls: response.data.savedLooks,
//       });
//     }
//   };

//   export const getPosts = () => async (dispatch) => {
//     try {
//       const response = await postService.getPosts();


//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

// export const searchLooks = (query) => async (dispatch) => {
//   const response = await unsplashService.search({ query, per_page: 30 });
//   const photoUrls = response.data.results.map((photo) => photo.urls.raw);
//   dispatch({
//     type: SET_FEED,
//     photoUrls: photoUrls,
//   });
// };

// export const getRandomLooks = () => async (dispatch) => {
//   const response = await unsplashService.random({ count: 30 });
//   const photoUrls = response.data.map((photo) => photo.urls.raw);
//   dispatch({
//     type: SET_FEED,
//     photoUrls: photoUrls,
//   });
// };

// export const saveLook = ({ userId, photoUrl }) =>
//   async (dispatch) => {
//     await userService.saveLook({ userId, photoUrl });
//     dispatch({
//       type: SAVE_LOOK,
//       photoUrl: photoUrl,
//     });
//   };

// export const deleteSavedLook =
//   ({ userId, photoUrl }) =>
//   async (dispatch) => {
//     await userService.deleteSavedLook({ userId, photoUrl });
//     dispatch({
//       type: DELETE_SAVED_LOOK,
//       photoUrl: photoUrl,
//     });
//   };

// // To Create Post
//   export const createPost = (postData) => async (dispatch) => {
//     try {
//       const response = await postService.createPost(postData);
//       console.log(response)
//       dispatch({
//         type: CREATE_POST,
//         post: response.data,
//       });
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

import * as unsplashService from "../services/unsplash";
import * as userService from "../services/users";
import * as postService from "../services/post";

export const FETCH_SAVED_LOOKS = "FETCH_SAVED_LOOKS";
export const SET_FEED = "SET_FEED";
export const SAVE_LOOK = "SAVE_LOOK";
export const DELETE_SAVED_LOOK = "DELETE_SAVED_LOOK";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POSTS = "FETCH_POSTS";

export const getSavedLooks =
  ({ userId, setAsFeed }) =>
  async (dispatch) => {
    const response = await userService.getProfile(userId);
    dispatch({
      type: FETCH_SAVED_LOOKS,
      photoUrls: response.data.savedLooks,
    });
    if (setAsFeed) {
      dispatch({
        type: SET_FEED,
        photoUrls: response.data.savedLooks,
      });
    }
  };

export const getPosts = () => async (dispatch) => {
  try {
    const response = await postService.getPosts();
    dispatch({
      type: FETCH_POSTS,
      posts: response.data,
    });
    dispatch({
      type: SET_FEED,
      photoUrls: response.data.map(post => post.image),
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const searchLooks = (query) => async (dispatch) => {
  const response = await unsplashService.search({ query, per_page: 30 });
  const photoUrls = response.data.results.map((photo) => photo.urls.raw);
  dispatch({
    type: SET_FEED,
    photoUrls: photoUrls,
  });
};

export const getRandomLooks = () => async (dispatch) => {
  const response = await unsplashService.random({ count: 30 });
  const photoUrls = response.data.map((photo) => photo.urls.raw);
  dispatch({
    type: SET_FEED,
    photoUrls: photoUrls,
  });
};

export const saveLook = ({ userId, photoUrl }) =>
  async (dispatch) => {
    await userService.saveLook({ userId, photoUrl });
    dispatch({
      type: SAVE_LOOK,
      photoUrl: photoUrl,
    });
  };

export const deleteSavedLook =
  ({ userId, photoUrl }) =>
  async (dispatch) => {
    await userService.deleteSavedLook({ userId, photoUrl });
    dispatch({
      type: DELETE_SAVED_LOOK,
      photoUrl: photoUrl,
    });
  };

export const createPost = (postData) => async (dispatch) => {
  try {
    const response = await postService.createPost(postData);
    dispatch({
      type: CREATE_POST,
      post: response.data,
    });
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
