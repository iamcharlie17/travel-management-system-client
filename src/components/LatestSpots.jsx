import { useEffect, useState } from "react";
import LatestSpot from "./LatestSpot";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import Lottie from "lottie-react";
// import groovyWalkAnimation from "../../public/Animation - 1714523682708.json";

const LatestSpots = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-tourist-spots")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);
  // console.log(spots)
  const latestSpots = spots.slice(spots.length - 6, spots.length);

  return (
    <div className="my-8">
      <div>
        {/* <Lottie className="text-xl" size={5} animationData={groovyWalkAnimation} loop={true} /> */}
        <h1 className="text-center text-4xl font-semibold">
          <span>
            <Typewriter
              words={["Latest Tourist Spots"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={5}
            />
          </span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
        {latestSpots.map((l) => (
          <LatestSpot latestSpot={l} key={l._id} />
        ))}
      </div>
      <Link to="/all-tourist-spots" className="flex justify-center">
        <button className="bg-red-700 text-white px-4 py-1 font-semibold hover:scale-105">
          View All
        </button>
      </Link>
    </div>
  );
};

export default LatestSpots;
