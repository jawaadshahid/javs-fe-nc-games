import React, { useContext, useEffect, useState } from "react";
import { LoadContext } from "../contexts/Load";
import { UserContext } from "../contexts/User";
import { getCommentsByReviewId, postCommentsByReviewId } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentsForm from "./CommentsForm";

function Comments({ reviewId }) {
  const [comments, setComments] = useState([]);
  const { user } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadContext);
  useEffect(() => {
    getCommentsByReviewId(reviewId)
      .then((comments) => setComments(comments))
      .catch((msg) => console.log(msg));
  }, [reviewId]);

  const addNewComment = (commentBody) => {
    const newComment = { username: user.username, body: commentBody };
    setIsLoading(true);
    postCommentsByReviewId(reviewId, newComment)
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

  return (
    <div className="comments">
      <h3>comments</h3>
      <div className="commentslist">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} commentData={comment} />;
        })}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}

export default Comments;
