import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://javs-nc-games.herokuapp.com/api",
});

export const getReviews = () => {
  return gamesApi.get(`/reviews`).then(({ data }) => data.reviews);
};

export const getReviewById = (reviewId) => {
  return gamesApi.get(`/reviews/${reviewId}`).then(({ data }) => data.review);
};

export const getCategories = () => {
  return gamesApi.get(`/categories`).then(({ data }) => data.categories);
};

export const getUsers = () => {
  return gamesApi.get(`/users`).then(({ data }) => data.users);
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
    .then(({ data }) => data.comments);
};
