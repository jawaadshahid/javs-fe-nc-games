import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/api";
import { formattedDateStr } from "../utils/date";

function CommentCard({ commentData }) {
  const { author, votes, created_at, body } = commentData;
  const [commentingUser, setCommentingUser] = useState({});
  useEffect(() => {
    getUserByUsername(author).then((user) => setCommentingUser(user));
  }, [author]);
  return (
    <div>
      <img
        src={commentingUser.avatar_url}
        alt={`${commentingUser.name} avatar`}
      />
      <p>
        by {author} - {formattedDateStr(created_at)}
      </p>
      <p>{body}</p>
      <p>votes: {votes}</p>
    </div>
  );
}

export default CommentCard;
