import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/FirebaseProvider";
import { Link } from "react-router-dom";
import { MdModeEdit, MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);

  const [myList, setMyList] = useState([]);
  const [control, setControl] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/my-list/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyList(data));
  }, [myList, control]);
  //   console.log(myList);

  // const {
  //     _id,
  //     userName,
  //     email,
  //     touristSpotName,
  //     countryName,
  //     location,
  //     shortDescription,
  //     averageCost,
  //     season,
  //     travelTime,
  //     visitorsPerYear,
  //     imageUrl,
  // } = myList;

  const handleDeleteSpot = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tourist-spot/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setControl(!control)
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <table className=" w-full space-y-2">
        <tr className="w-full border-2">
          <th className="border-2 md:p-2 text-left bg-red-50">Name</th>
          <th className="border-2 md:p-2 text-left bg-red-50">Location</th>
          <th className="hidden md:block md:p-2 text-left bg-red-50">Country</th>
          <th className="border-2 md:p-2 text-left bg-red-50">Photo</th>
          <th className="border-2 md:p-2 text-left bg-red-50">Update</th>
          <th className="border-2 md:p-2 text-left bg-red-50">Delete</th>
        </tr>
        {myList.map((list, idx) => (
          <tr key={idx}>
            <td className={`border-2 md:p-2 ${idx%2 && 'bg-red-50'}`}>
              {" "}
              {idx + 1}. {list.touristSpotName}
            </td>
            <td className={`border-2 md:p-2 ${idx%2 && 'bg-red-50'}`}>{list.location}</td>
            <td className={`hidden md:block md:p-2 ${idx%2 && 'bg-red-50'}`}>{list.countryName}</td>
            <td className={`border-2 md:p-2 ${idx%2 && 'bg-red-50'}`}>
              <img className=" h-10 md:h-20 w-10 md:w-20" src={list.imageUrl} alt="" />
            </td>
            <td className={`border-2 text-center md:p-2 ${idx%2 && 'bg-red-50'}`}>
              <Link to={`/update-details/${list._id}`}>
                {" "}
                <button className="p-2 bg-black my-1 rounded-xl">
                  <MdModeEdit  className="text-white" />
                </button>
              </Link>
            </td>
            <td className={`border-2 md:p-2 text-center ${idx%2 && 'bg-red-50'}`}>
              <button
                onClick={() => handleDeleteSpot(list._id)}
                className="p-2  bg-red-600 my-1 rounded-xl"
              >
                <MdDeleteOutline  className="text-white" />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MyList;
