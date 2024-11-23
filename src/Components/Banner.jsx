import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/6XMtvGd/E-commerce.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                <span>
                  <Typewriter
                    words={["EkSheba", "Your Trusted Online Marketplace in Bangladesh"]}
                    loop={""}
                    cursor
                    cursorStyle="✒️"
                    typeSpeed={20}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="mb-5">
                EkSheba brings the convenience of online shopping to your
                fingertips, offering a wide range of products at affordable
                prices. Rooted in Bangladeshi culture, EkSheba is committed to
                providing quality, trust, and excellent service. From everyday
                essentials to unique items, discover a seamless shopping
                experience designed for you.
              </p>
              <button className="btn btn-outline btn-warning">
                Get Started <i className="fa-solid fa-arrow-trend-up"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
