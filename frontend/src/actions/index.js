//export const REQUEST_POSTS = 'REQUEST_POSTS'
//export const RECEIVE_POSTS = 'RECEIVE_POSTS'
//export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
//export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

//
//export const selectSubreddit = subreddit => ({
//  type: SELECT_SUBREDDIT,
//  subreddit
//})
//
//export const invalidateSubreddit = subreddit => ({
//  type: INVALIDATE_SUBREDDIT,
//  subreddit
//})
//
//export const requestPosts = subreddit => ({
//  type: REQUEST_POSTS,
//  subreddit
//})
//
//export const receivePosts = (subreddit, json) => ({
//  type: RECEIVE_POSTS,
//  subreddit,
//  posts: json.data.children.map(child => child.data),
//  receivedAt: Date.now()
//})
//
//const fetchPosts = subreddit => dispatch => {
//  dispatch(requestPosts(subreddit))
//  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//    .then(response => response.json())
//    .then(json => dispatch(receivePosts(subreddit, json)))
//}
//
//const shouldFetchPosts = (state, subreddit) => {
//  const posts = state.postsBySubreddit[subreddit]
//  if (!posts) {
//    return true
//  }
//  if (posts.isFetching) {
//    return false
//  }
//  return posts.didInvalidate
//}
//
//export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
//  if (shouldFetchPosts(getState(), subreddit)) {
//    return dispatch(fetchPosts(subreddit))
//  }
//}

import * as actionTypes from "./action_type";

export const addItem = () => {
  return {
    type: actionTypes.ADD_ITEM,
  };
};

export const deleteItem = (item) => {
  return {
    type: actionTypes.DELETE_ITEM,
    item: item,
  };
};

export const editItem = (item) => {
  return {
    type: actionTypes.EDIT_ITEM,
    item: item,
  };
};
export const setTitle = (title) => {
  return {
    type: actionTypes.SET_TITLE,
    title: title,
  };
};
export const setError = (error) => {
  return {
    type: actionTypes.SET_ERROR,
    error: error,
  };
};
export const setItem = (item) => {
  return {
    type: actionTypes.SET_ITEM,
    item: item,
  };
};
export const setEdit = () => {
  return {
    type: actionTypes.SET_EDIT,
  };
};
