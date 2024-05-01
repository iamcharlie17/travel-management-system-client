import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const LatestSpot = ({ latestSpot }) => {
  //   console.log(latestSpot);
  const { _id, touristSpotName, location, imageUrl } = latestSpot;
  return (
    <Fade duration={1000} triggerOnce direction="up">
      <div className="border-2 rounded-lg p-4 space-y-2 shadow-lg">
        <div
          className="h-60 bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{touristSpotName}</h1>
            <h2>{location}</h2>
          </div>
          <div className="">
            <Link to={`/spot-details/${_id}`}>
              <button className="px-4 bg-red-700 text-white font-semibold rounded-lg py-1 hover:scale-105">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default LatestSpot;
