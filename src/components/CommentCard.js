import React, { useEffect, useState } from "react";
import { getUserByUsername, patchCommentByCommentId } from "../utils/api";
import { formattedDateStr } from "../utils/date";
import Vote from "./Vote";

function CommentCard({ commentData }) {
  const { comment_id, author, created_at, body } = commentData;
  const [votes, setVotes] = useState(commentData.votes);
  const [commentingUser, setCommentingUser] = useState({});
  useEffect(() => {
    getUserByUsername(author).then((user) => setCommentingUser(user));
  }, [author]);

  const incVotes = (inc_votes) => {
    // optmistic render
    setVotes((currVotes) => {
      return currVotes + inc_votes;
    });
    // do actual render
    patchCommentByCommentId(comment_id, { inc_votes }).catch((msg) => {
      console.log(msg);
    });
  };

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
      <div>votes: {<Vote votes={votes} incVotes={incVotes} />}</div>
    </div>
  );
}

export default CommentCard;
