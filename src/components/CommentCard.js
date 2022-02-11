import React, { useEffect, useState } from "react";
import { getUserByUsername, patchCommentByCommentId } from "../utils/api";
import { formattedDateStr } from "../utils/date";
import Vote from "./Vote";

function CommentCard({ commentData, deleteComment }) {
  const { comment_id, author, created_at, body } = commentData;
  const [commentingUser, setCommentingUser] = useState({});
  const [votes, setVotes] = useState(0);
  // had to do this because of occasional NaN
  useEffect(() => {
    setVotes(parseInt(commentData.votes));
  }, [commentData]);
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
      {deleteComment ? (
        <button
          onClick={() => {
            deleteComment(comment_id);
          }}
        >
          X
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CommentCard;
