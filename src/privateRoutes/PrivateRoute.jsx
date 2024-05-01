import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen py-64">
        <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-700"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;