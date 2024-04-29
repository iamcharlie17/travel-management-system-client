import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";



const Spot = ({ spot }) => {
  const { _id, touristSpotName, location, imageUrl } = spot;

  const handleDeleteSpot = ()=>{
    console.log('delete button clicked', _id)
  }

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
          <div className="">
            <Link to={`/spot-details/${_id}`}>
              <button className="px-4 bg-red-700 text-white font-semibold rounded-lg py-1 hover:scale-105">
                Details
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link >
            {" "}
            <button className="p-2 bg-black my-1 rounded-xl">
              <MdModeEdit size={20} className="text-white" />
            </button>
          </Link>
          <button
            onClick={handleDeleteSpot}
            className="p-2 bg-red-600 my-1 rounded-xl"
          >
            <MdDeleteOutline size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spot;
