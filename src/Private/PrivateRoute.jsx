
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
// console.log(location.pathname)

  
  if (user) {
    return children;
  }
  if (loading) {
    return <Loading></Loading>
  }
  return <Navigate to="/login" state={{from: location}} replace={true} ></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;