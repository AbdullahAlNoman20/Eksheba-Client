import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Pages/Loading";
import UseUserData from "../Hooks/UseUserData";

const SellerPrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const userData = UseUserData()
    const location = useLocation();
  // console.log(location.pathname)
  
  if (user && userData.role === "seller") {
    return children;
  }
  if (loading || !userData.role) {
      return <Loading></Loading>
    }
    return <Navigate to="/login" state={{from:location}} replace={true} ></Navigate>;
  };

  SellerPrivateRoute.propTypes = {
    children: PropTypes.object,
  };

export default SellerPrivateRoute;