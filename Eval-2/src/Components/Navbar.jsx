import React from "react";
import{ useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {

  const Auth = useSelector((state)=>state.authReducer.isAuth)

  const navigate = useNavigate()

  const handleLogin = ()=>{
    navigate("/login")
  }
  return (
    <div data-testid="navbar" style={{display:"flex", justifyContent:"space-between", padding: "30px"}}>
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {
          Auth ? <div></div> : <button data-testid="navbar-login-button" onClick={handleLogin}>LOGIN</button>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
