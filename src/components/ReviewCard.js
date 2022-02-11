import React, { useState } from "react";
import { patchReviewByReviewId } from "../utils/api";
import { formattedDateStr } from "../utils/date";
import "./ReviewCard.css";
import Vote from "./Vote";

function ReviewCard({ reviewData }) {
  const {
    review_id,
    title,
    review_body,
    review_img_url,
    owner,
    created_at,
    comment_count,
  } = reviewData;

  const [votes, setVotes] = useState(parseInt(reviewData.votes));

  const incVotes = (inc_votes) => {
    // optmistic render
    setVotes((currVotes) => {
      return currVotes + inc_votes;
    });
    // do actual render
    patchReviewByReviewId(review_id, { inc_votes })
      .then((review) => console.log(review))
      .catch((msg) => {
        console.log(msg);
      });
  };

  return (
    <article className="reviewcard">
      <img
        className="reviewcard__image"
        src={review_img_url}
        alt={`${title}`}
      />
      <h4>{title}</h4>
      <p>
        by {owner} - {formattedDateStr(created_at)}
      </p>
      <p>{review_body}</p>
      <div>votes: {<Vote votes={votes} incVotes={incVotes} />}</div>
      <p>comment_count: {comment_count}</p>
    </article>
  );
}

export default ReviewCard;
