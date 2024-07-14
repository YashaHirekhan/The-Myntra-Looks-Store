// 
import {
  FETCH_SAVED_LOOKS,
  SET_FEED,
  SAVE_LOOK,
  DELETE_SAVED_LOOK,
  CREATE_POST,
  FETCH_POSTS,
} from "../actions/look";

const INITIAL_STATE = {
  feed: [],
  saved: [],
  posts: [],
};

const lookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SAVED_LOOKS:
      return {
        ...state,
        saved: action.photoUrls,
      };
    case SET_FEED:
      return {
        ...state,
        feed: action.photoUrls,
      };
    case SAVE_LOOK:
      return {
        ...state,
        saved: [...state.saved, action.photoUrl],
      };
    case DELETE_SAVED_LOOK:
      return {
        ...state,
        saved: state.saved.filter((url) => url !== action.photoUrl),
      };
    case CREATE_POST:
      return {
        ...state,
        feed: [action.post.image, ...state.feed],
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default lookReducer;
