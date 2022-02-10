import React, { useState } from "react";

function CommentsForm({ addNewComment }) {
  const [inputComment, setInputComment] = useState("");
  const onCommentChange = (event) => {
    setInputComment(event.target.value);
  };
  const onCommentFormSubmit = (event) => {
    event.preventDefault();
    addNewComment(inputComment);
    setInputComment("");
  };
  return (
    <div className="commentsform">
      <h3>Leave a comment</h3>
      <form onSubmit={onCommentFormSubmit}>
        <textarea
          rows="5"
          placeholder="Enter your comment here..."
          value={inputComment}
          onChange={onCommentChange}
          style={{ width: "100%", resize: "none" }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CommentsForm;
