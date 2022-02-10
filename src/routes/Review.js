import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import ReviewCard from "../components/ReviewCard";
import { LoadContext } from "../contexts/Load";
import { getReviewById } from "../utils/api";

function Review() {
  const { reviewId } = useParams();
  const [review, setReview] = useState({});
  const { setIsLoading } = useContext(LoadContext);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(reviewId).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [reviewId, setIsLoading]);

  return (
    <section className="review">
      <ReviewCard reviewData={review} />
      <hr />
      <Comments reviewId={reviewId} />
    </section>
  );
}

export default Review;
