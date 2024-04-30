import { Link } from "react-router-dom";




import { useState } from "react";

const Spot = ({ spot }) => {
  const [remainingSpot, setRemainingSpot] = useState(spot);
  const { _id, touristSpotName, location, imageUrl } = remainingSpot;

  

  return (
    <div className="border-2 rounded-lg p-4 space-y-2 shadow-lg">
      <div
        className="h-60 bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">{touristSpotName}</h1>
          <h2>{location}</h2>
          <div className=""></div>
        </div>
        <div>
          <Link to={`/spot-details/${_id}`}>
            <button className="px-4 bg-red-700 text-white font-semibold rounded-lg py-1 hover:scale-105">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Spot;
