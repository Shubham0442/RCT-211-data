//Create the HOC for protected Routes
import { useSelector } from "react-redux/es/exports";
import { Navigate, useLocation} from "react-router-dom"


const ReqAuth = ({children}) => {
    const Auth = useSelector((state)=>state.authReducer.isAuth)
    const location = useLocation()

    if(!Auth){
        return <Navigate to="/login" from={{state: location}} replace/>
    }
    else{
        return children
    }

};

export default ReqAuth;
