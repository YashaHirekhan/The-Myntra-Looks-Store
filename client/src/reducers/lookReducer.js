
import {
  FETCH_SAVED_LOOKS,
  SET_FEED,
  SAVE_LOOK,
  DELETE_SAVED_LOOK,
  CREATE_POST,
  FETCH_POSTS,
  CREATE_WISHLIST,
  FETCH_WISHLIST,
  JOIN_WISHLIST
} from "../actions/look";

const INITIAL_STATE = {
  feed: [],
  saved: [],
  posts: [],
  wishListId:null,
  wishlist:[]
};

// const lookReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FETCH_SAVED_LOOKS:
//       return {
//         ...state,
//         saved: action.photoUrls,
//       };
//     case SET_FEED:
//       return {
//         ...state,
//         feed: action.photoUrls,
//       };
//     case SAVE_LOOK:
//       return {
//         ...state,
//         saved: [...state.saved, action.photoUrl],
//       };
//     case DELETE_SAVED_LOOK:
//       return {
//         ...state,
//         saved: state.saved.filter((url) => url !== action.photoUrl),
//       };
//     case CREATE_POST:
//       return {
//         ...state,
//         feed: [action.post.image, ...state.feed],
//       };
//     case FETCH_POSTS:
//       return {
//         ...state,
//         posts: action.posts,
//       };
//       case CREATE_WISHLIST:
//         return {
//           ...state,
//           wishListId: action.wishlist.wishListId,
//         };
//         case JOIN_WISHLIST:
//         return {
//           ...state,
//           wishListId: action.wishlistId,
//         };
//         case FETCH_WISHLIST:
//           return {
//             ...state,
//             wishlist: action.wishListItems,
//           };
//     default:
//       return state;
//   }
// };

const lookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SAVED_LOOKS:
      console.log('Fetching saved looks:', action.photoUrls);
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
      console.log('Saving look:', action.photoUrl);
      return {
        ...state,
        saved: [...state.saved, action.photoUrl],
      };
    case DELETE_SAVED_LOOK:
      console.log('Deleting look:', action.photoUrl);
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
    case CREATE_WISHLIST:
      return {
        ...state,
        wishListId: action.wishlist.wishListId,
      };
    case JOIN_WISHLIST:
      return {
        ...state,
        wishListId: action.wishlistId,
      };
    case FETCH_WISHLIST:
      return {
        ...state,
        wishlist: action.wishListItems,
      };
    default:
      return state;
  }
};


export default lookReducer;
