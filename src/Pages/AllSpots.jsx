import { useLoaderData } from "react-router-dom";
import Spot from "../components/Spot";
import { useState } from "react";
// import { useState } from "react";

const AllSpots = () => {
  const loadedSpots = useLoaderData();

  const [spots, setSpots] = useState(loadedSpots)

  // const [isSorted, setIsSorted] = useState(false);


  const handleSortByAvgCost = () => {
    console.log("data sorting");
    fetch('http://localhost:3000/all-tourist-spots/sort-by-average-cost')
    .then(res => res.json())
    .then(data => setSpots(data))
  };
 

  return (
    <div className="pt-16">
      <div className="space-y-2 ">
        <div className="text-center">
          <h1 className="text-4xl  font-semibold">Tourist Spots</h1>
          <details className="dropdown">
            <summary className="m-1 btn bg-red-700 text-white font-semibold px-6">
              Sort
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-red-700 text-white rounded-box w-52">
              <li>
                <a onClick={handleSortByAvgCost}>Average cost</a>
              </li>
            </ul>
          </details>
        </div>
        <hr />
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
        {spots.map((spot) => (
          <Spot spot={spot} key={spot._id} />
        ))}
        
      </div>
    </div>
  );
};

export default AllSpots;
