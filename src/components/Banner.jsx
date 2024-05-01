// https://i.ibb.co/5c1xtmX/banner-1.jpg
// https://i.ibb.co/GVpZ06m/banner-2.jpg
// https://i.ibb.co/q5Pd4fr/banner-3.jpg

// Import Swiper styles
import "swiper/css";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div className="min-h-screen carousel w-full ">
        <div
          id="slide1"
          className="hero min-h-screen bg-cover carousel-item bg-no-repeat w-full relative"
          style={{
            backgroundImage: "url(https://i.ibb.co/5c1xtmX/banner-1.jpg)",
          }}
        >
          <div className="text-center p-8 space-y-8 border-2 border-white rounded-lg mt-8 mx-2 shadow-2xl md:mx-20 lg:mx-40 bg-yellow-950 bg-opacity-15">
            {/* <h1 className=" text-3xl md:text-5xl font-bold text-white">
              Discover Your Next Adventure
            </h1> */}
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Discover Your Next{" "}
              <span className="text-red-700 font-bold">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Adventure!",
                    "Exploration!",
                    "Expedition!",
                    "Venture!",
                  ]}
                  // loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop={5}
                />
              </span>
            </h1>
            <p className="text-white">
              Embark on unforgettable journeys with our comprehensive tourism
              management website. Explore diverse destinations, find exclusive
              deals, and plan your dream getaway with ease. Let us be your guide
              to a world of excitement and discovery.be your guide to a world of
              excitement and discovery.
            </p>
            <div className="md:w-1/2 mx-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow w-full"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="hero min-h-screen bg-cover carousel-item bg-no-repeat w-full relative"
          style={{
            backgroundImage: "url(https://i.ibb.co/GVpZ06m/banner-2.jpg)",
          }}
        >
          <div className="text-center p-8 space-y-8 border-2 border-white rounded-lg mt-8 mx-2 shadow-2xl md:mx-20 lg:mx-40 bg-pink-950 bg-opacity-15">
            <h1 className=" text-3xl md:text-5xl font-bold text-white">
              Your Gateway to Travel{" "}
              <span className="text-red-700 font-bold">
                <Typewriter
                  words={[
                    "Excellence!",
                    "Distinction!",
                    "Superiority!",
                    "Mastery!",
                  ]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop={5}
                />
              </span>
            </h1>
            <p className="text-white">
              Elevate your travel experiences with our cutting-edge tourism
              management platform. From booking accommodations to arranging
              activities, we offer seamless solutions for every aspect of your
              journey. Start your next adventure with confidence and
              convenience.
            </p>
            <div className="md:w-1/2 mx-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow w-full"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="hero min-h-screen bg-cover carousel-item bg-no-repeat w-full relative"
          style={{
            backgroundImage: "url(https://i.ibb.co/q5Pd4fr/banner-3.jpg)",
          }}
        >
          <div className="text-center p-8 space-y-8 border-2 border-white rounded-lg mt-8 mx-2 shadow-2xl md:mx-20 lg:mx-40 bg-amber-700 bg-opacity-15">
            <h1 className=" text-3xl md:text-5xl font-bold text-white">
              Experience the World, Your {' '}
              <span className="text-red-700 font-bold">
                <Typewriter 
                words={['Way!', 'Path!', 'Approach!', 'Avenue!']}
                cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop={5}
                />
              </span>
            </h1>
            <p className="text-white">
              Tailor-made travel awaits on our innovative tourism management
              website. Personalize your itinerary, uncover hidden gems, and
              create memories that last a lifetime. With our intuitive tools and
              expert guidance, unlock the freedom to explore the globe on your
              terms.
            </p>
            <div className="md:w-1/2 mx-auto">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow w-full"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
