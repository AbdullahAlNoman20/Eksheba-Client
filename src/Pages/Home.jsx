import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import UserReview from "../Components/UserReview";
import Faq from "../Components/Faq";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EkSheba: Home</title>
      </Helmet>

      {/* Banner */}
      <div className="">
        <Banner></Banner>
      </div>
      {/* Product section */}
      <div className="mx-auto">
        <div className="m-10">
          <h1 className="font-extrabold text-3xl text-center">
            Explore Our Featured Products
          </h1>
          <p className="text">
            Discover the best of EkSheba with our handpicked featured products!
            From top-selling items to exciting new arrivals, this section
            showcases the perfect blend of quality, value, and variety. Find
            something special for every need and enjoy a premium shopping
            experience.
          </p>
        </div>
        <Products></Products>
      </div>
      {/* Review section */}
      <div className="mx-auto">
        <div className="m-10">
          <h1 className="font-extrabold text-3xl text-center">
            What Our Happy Customers Say
          </h1>
          <p className="text">
            At EkSheba, customer satisfaction is our top priority. Don’t just
            take our word for it—hear from our happy customers! Their
            experiences reflect our commitment to quality, trust, and
            exceptional service. Join the growing community of satisfied
            shoppers and let us make your shopping journey memorable.
          </p>
        </div>
        <UserReview></UserReview>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto">
        <div className="m-10">
          <h1 className="font-extrabold text-3xl text-center">
            Frequently Asked Questions (FAQ) - EkSheba
          </h1>
          <p className="text">
            Welcome to the FAQ section of EkSheba! Here, you’ll find answers to
            the most common questions about our services, products, and
            policies. Whether you’re curious about shipping, payments, or
            returns, we’re here to make your shopping experience seamless and
            enjoyable. If you don’t find what you’re looking for, feel free to
            contact us directly!
          </p>
        </div>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
