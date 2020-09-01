//import { combineReducers } from 'redux'
//import {
//  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
//  REQUEST_POSTS, RECEIVE_POSTS
//} from '../actions'
//
//const selectedSubreddit = (state = 'reactjs', action) => {
//  switch (action.type) {
//    case SELECT_SUBREDDIT:
//      return action.subreddit
//    default:
//      return state
//  }
//}
//
//const posts = (state = {
//  isFetching: false,
//  didInvalidate: false,
//  items: []
//}, action) => {
//  switch (action.type) {
//    case INVALIDATE_SUBREDDIT:
//      return {
//        ...state,
//        didInvalidate: true
//      }
//    case REQUEST_POSTS:
//      return {
//        ...state,
//        isFetching: true,
//        didInvalidate: false
//      }
//    case RECEIVE_POSTS:
//      return {
//        ...state,
//        isFetching: false,
//        didInvalidate: false,
//        items: action.posts,
//        lastUpdated: action.receivedAt
//      }
//    default:
//      return state
//  }
//}
//
//const postsBySubreddit = (state = { }, action) => {
//  switch (action.type) {
//    case INVALIDATE_SUBREDDIT:
//    case RECEIVE_POSTS:
//    case REQUEST_POSTS:
//      return {
//        ...state,
//        [action.subreddit]: posts(state[action.subreddit], action)
//      }
//    default:
//      return state
//  }
//}
//
//const rootReducer = combineReducers({
//  postsBySubreddit,
//  selectedSubreddit
//})
//
//export default rootReducer

import * as actionTypes from "../actions/action_type";

const initialState = {
  items: [],
  title: "",
  item: "",
  edit: false,
  error: "",
};
const items = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newitem = {
        id: Date.now(),
        value: state.title,
      };
      return {
        ...state,
        items: state.items.concat(newitem),
        title: "",
        error: "",
      };

    case actionTypes.EDIT_ITEM:
      var newList = [...state.items];
      var index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].value = state.title;
        return {
          ...state,
          title: "",
          edit: false,
          items: newList,
          error: "",
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.DELETE_ITEM:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList.splice(index, 1);
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
        error: "",
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.SET_EDIT:
      return {
        ...state,
        edit: true,
        error: "",
      };
    default:
      return state;
  }
};

export default items;
