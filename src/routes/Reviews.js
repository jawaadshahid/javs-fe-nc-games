import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ReviewsNav from "../components/ReviewsNav";
import { LoadContext } from "../contexts/Load";
import { getCategories, getReviews } from "../utils/api";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [sortby, setSortby] = useState("created_at");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const { setIsLoading } = useContext(LoadContext);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category === "all" ? null : category, null, sortby).then(
      (reviews) => {
        setReviews(reviews);
        setIsLoading(false);
      }
    );
  }, [sortby, category, setIsLoading]);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categories) => {
      setCategories([{ slug: "all" }, ...categories]);
      setIsLoading(false);
    });
  }, [setIsLoading]);
  return (
    <section>
      <ReviewsNav
        categories={categories}
        category={category}
        setCategory={setCategory}
        sortby={sortby}
        setSortby={setSortby}
      />
      {reviews.map((review) => {
        return (
          <Link
            key={review.review_id}
            to={`/reviews/${review.review_id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ReviewCard reviewData={review} />
          </Link>
        );
      })}
    </section>
  );
}

export default Reviews;
