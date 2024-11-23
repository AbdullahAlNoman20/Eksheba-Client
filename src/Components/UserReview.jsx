import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Reviews.json")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review}></ReviewCard>
        ))}
      </section>
    </div>
  );
};

export default UserReview;
