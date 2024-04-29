import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/FirebaseProvider";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {loginUser, googleLogIn, githubLogIn, twitterLogIn } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then(() => {
        toast("Successfully Logged In", {
          duration: 1500,
          style: {
            background: "#3fb89a",
            color: "white",
          },
        });
        navigate("/");
      })
      .catch((e) =>
        toast(`${e.message}`, {
          duration: 1500,
          style: {
            background: "red",
            color: "white",
          },
        })
      );
  };

  const handleSocialLogin = (socialLogin) => {
    socialLogin().then(() => {
      toast("Successfully Logged In ", {
        duration: 1500,
        style: {
          background: "#3fb89a",
          color: "white",
        },
      })
      navigate(location?.state || '/')
    })
  };

  return (
    <div className="min-h-screen py-32 mx-2">
      <div className=" w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl bg-white text-black shadow-xl">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md  text-black focus:border-violet-400"
            />
            {errors.password && <span>This field is required</span>}
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
            <div className="flex justify-end text-xs ">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-bold bg-red-700">
            Log in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-[#0A4781]"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4 gap-4">
          <button onClick={() => handleSocialLogin(googleLogIn)} className="">
            <FaGoogle size={30} />
          </button>
          <button onClick={() => handleSocialLogin(githubLogIn)}>
            <FaGithub size={30} />
          </button>
          <button onClick={() => handleSocialLogin(twitterLogIn)}>
            <FaTwitter size={30} />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6">
          Do not have an account?
          <Link to="/register" className="underline text-[#0A4781]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;