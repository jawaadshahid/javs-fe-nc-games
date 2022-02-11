import React, { useContext, useEffect, useState } from "react";
import { LoadContext } from "../contexts/Load";
import { CurrentUserContext } from "../contexts/CurrentUser";
import {
  deleteCommentByCommentId,
  getCommentsByReviewId,
  postCommentByReviewId,
} from "../utils/api";
import CommentCard from "./CommentCard";
import CommentsForm from "./CommentsForm";

function Comments({ reviewId }) {
  const [comments, setComments] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  const { setIsLoading } = useContext(LoadContext);
  useEffect(() => {
    getCommentsByReviewId(reviewId)
      .then((comments) => setComments(comments))
      .catch((msg) => console.log(msg));
  }, [reviewId]);

  const addNewComment = (commentBody) => {
    const newComment = { username: currentUser.username, body: commentBody };
    setIsLoading(true);
    postCommentByReviewId(reviewId, newComment)
      .then((comment) => {
        setComments((currComments) => {
          return [...currComments, comment];
        });
        setIsLoading(false);
      })
      .catch((msg) => {
        console.log(msg);
        setIsLoading(false);
      });
  };

  const deleteComment = (deleteCommentId) => {
    // optimistic render
    setComments((currComments) => {
      return currComments.filter(
        ({ comment_id }) => comment_id !== deleteCommentId
      );
    });
    // actual
    deleteCommentByCommentId(deleteCommentId).catch((msg) => console.log(msg));
    // console.log(`delete comment with id: ${comment_id}`);
  };

  return (
    <div className="comments">
      <h3>comments</h3>
      <div className="commentslist">
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              commentData={comment}
              deleteComment={
                currentUser.username === comment.author ? deleteComment : null
              }
            />
          );
        })}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}

export default Comments;
