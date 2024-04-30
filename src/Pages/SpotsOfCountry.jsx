import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SpotsOfCountry = () => {
  const [loadedSpots, setLoadedSpots] = useState([]);
  const countryName = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/all-tourist-spots")
      .then((res) => res.json())
      .then((data) => setLoadedSpots(data));
  }, []);

  // console.log(loadedSpots)

  const spots = loadedSpots.filter(
    (spot) => spot.countryName === countryName.countryName
  );
//   console.log(spots);

  return (
    <div className="pt-16">
        <div>
            <h1 className="text-4xl font-bold">{countryName.countryName}</h1>
        </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
        {spots.map((spot) => (
          <div
            key={spot._id}
            className="border-2 rounded-lg p-4 space-y-2 shadow-lg"
          >
            <div
              className="h-60 bg-cover"
              style={{ backgroundImage: `url(${spot.imageUrl})` }}
            ></div>
            <div className="flex flex-col gap-8 justify-between h-72">
              <div>
                <h1 className="text-xl font-bold">{spot.touristSpotName}</h1>
                <h1 className="font-semibold">{spot.location}</h1>
                <p>
                  <small>{spot.shortDescription}</small>
                </p>
              </div>
              <div>
                <h1>
                  <span className="font-semibold">Average Cost:</span>{" "}
                  {spot.averageCost}
                </h1>
                <Link to={`/spot-details/${spot._id}`}>
                  <button className="px-4 bg-red-700 text-white font-semibold rounded-lg py-1 hover:scale-105">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotsOfCountry;
