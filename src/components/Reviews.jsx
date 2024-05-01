import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Review from "./Review";
import { Typewriter } from "react-simple-typewriter";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className=" p-8 md:p-16">
      <div className="text-center space-y-4 mb-4 md:mb-16">
        <h1 className="text-2xl font-semibold text-red-700">
          <span>
            <Typewriter
              words={[" CUSTOMER REVIEWS"]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={5}
            />
          </span>
        </h1>
        <h2 className="text-4xl font-black">
          <span>
            <Typewriter
              words={["What is Our Customer Say"]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              loop={5}
            />
          </span>
        </h2>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
