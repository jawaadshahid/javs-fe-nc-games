import React from "react";
import { formattedDateStr } from "../utils/date";
import "./ReviewCard.css";

function ReviewCard({ reviewData }) {
  const {
    title,
    review_body,
    review_img_url,
    votes,
    owner,
    created_at,
    comment_count,
  } = reviewData;

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
      <p>votes: {votes}</p>
      <p>comment_count: {comment_count}</p>
    </article>
  );
}

export default ReviewCard;
