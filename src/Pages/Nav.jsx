import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseProvider";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const [theme, setTheme] = useState("light");

  // --theme control--

  document.querySelector("html").setAttribute("data-theme", theme);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    logOut()
      .then(() =>
        toast("Logged Out", {
          duration: 1500,
          style: {
            background: "#3fb89a",
            color: "white",
          },
        })
      )
      .catch((e) => console.log(e.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-tourist-spots">All Spots</NavLink>
      </li>
      <li>
        <NavLink to="/add-tourist-spots">Add Spots</NavLink>
      </li>
      <li>
        <NavLink to="/my-list">My List</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white z-10 fixed container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu gap-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="font-bold md:text-3xl">
          <span className="text-red-700">Tour</span>Fusion
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>
      <div className="">
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onClick={() => handleToggle(event)}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      {/* dynamic login register button and profile button */}
      {user ? (
        <div className="navbar-end ">
          <details className="dropdown dropdown-end ">
            <summary
              className="btn bg-red-700 border-none rounded-full px-2 tooltip tooltip-bottom flex"
              data-tip="Profile"
            >
              <CgProfile size={30} color="white" />
            </summary>
            <div className="p-4  menu dropdown-content z-[1] bg-white shadow-xl rounded-box w-80 space-y-8 ">
              <div className="text-center space-y-2">
                <div className="">
                  {user.photoURL ? (
                    <img className="w-1/3 mx-auto" src={user.photoURL} alt="" />
                  ) : (
                    <button className="rounded-full px-3 border-2 text-6xl font-bold bg-white text-red-700">
                      {user.email.substring(0, 1).toUpperCase()}
                    </button>
                  )}
                </div>
                <div className="font-bold ">
                  {user.displayName && <h1>{user.displayName}</h1>}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleLogOut}
                  className="block w-1/2 mx-auto p-1 text-center rounded-sm text-white font-bold bg-red-700"
                >
                  Log Out
                </button>
              </div>
            </div>
          </details>
        </div>
      ) : (
        <div className=" navbar-end space-x-1 md:space-x-4">
          <Link to="/login">
            <button className="bg-red-700 font-semibold py-1 hover:scale-105 transition-transform px-1 md:px-3 rounded-lg text-white">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-red-700 font-semibold py-1 hover:scale-105 transition-transform px-1 md:px-3 rounded-lg text-white">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
