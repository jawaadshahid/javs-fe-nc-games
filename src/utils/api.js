import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://javs-nc-games.herokuapp.com/api",
});

export const getReviews = (category, order, sort_by) => {
  return gamesApi
    .get(`/reviews`, { params: { category, order, sort_by } })
    .then(({ data }) => data.reviews)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

export const getReviewById = (reviewId) => {
  return gamesApi
    .get(`/reviews/${reviewId}`)
    .then(({ data }) => data.review)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

export const getCategories = () => {
  return gamesApi
    .get(`/categories`)
    .then(({ data }) => data.categories)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

export const getUsers = () => {
  return gamesApi
    .get(`/users`)
    .then(({ data }) => data.users)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

export const getUserByUsername = (username) => {
  return gamesApi
    .get(`/users/${username}`)
    .then(({ data }) => data.user)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

export const getCommentsByReviewId = (reviewId) => {
  return gamesApi
    .get(`/reviews/${reviewId}/comments`)
    .then(({ data }) => data.comments)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

// countObj = { inc_votes : int }
export const patchCommentByCommentId = (commentId, countObj) => {
  return gamesApi
    .patch(`/comments/${commentId}`, countObj)
    .then(({ data }) => data.comment)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

export const deleteCommentByCommentId = (commentId) => {
  return gamesApi
    .delete(`/comments/${commentId}`)
    .then(({ data }) => data.comment)
    .catch(({ response }) => Promise.reject(response.data.msg));
};

// commentObj = { username: String, body: String }
export const postCommentByReviewId = (reviewId, commentObj) => {
  return gamesApi
    .post(`/reviews/${reviewId}/comments`, commentObj)
    .then(({ data }) => data.comment)
    .catch(({ response }) => Promise.reject(response.data.msg));
};