import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

    const { registerUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    return regex.test(password);
  }

  const onSubmit = (data) => {
    if (!validatePassword(data.password)) {
      toast(
        "Password must have UPPERCASE, lowercase and longer than 6 characters",
        {
          duration: 1500,
          style: {
            background: "red",
            color: "white",
          },
        }
      );
      return;
    }
    console.log(data);
    registerUser(data.email, data.password)
      .then(() => {
        updateUser(data.name, data.image).then(() => {
          toast("Successfully Registered Your Account", {
            duration: 1500,
            style: {
              background: "#3fb89a",
              color: "white",
            },
          });
          navigate("/");
        });
      })
      .catch((e) => {
        toast(`${e.message}`, {
          duration: 1500,
          style: {
            background: "red",
            color: "white",
          },
        });
      });
  };

  return (
    <div className="min-h-screen py-32 mx-2">
      <div className="w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl bg-white text-black shadow-xl">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md  text-black focus:border-violet-400"
            />
            {errors.name && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block ">
              Photo URL
            </label>
            <input
              {...register("image")}
              type="text"
              name="image"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 rounded-md text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block ">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-md  text-black focus:border-violet-400"
            />
            {errors.email && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md  text-black focus:border-violet-400"
            />
            {errors.password && (
              <span className="text-red-400">This field is required</span>
            )}

            {showPassword ? (
              <FaEyeSlash
                onClick={handleTogglePassword}
                color="black"
                size={20}
                className="absolute top-8 right-2"
              />
            ) : (
              <FaEye
                onClick={handleTogglePassword}
                color="black"
                size={20}
                className="absolute top-8 right-2"
              />
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-bold bg-red-700">
            Register
          </button>
        </form>
        <p className="text-xs text-center sm:px-6">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="underline text-[#0A4781]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
