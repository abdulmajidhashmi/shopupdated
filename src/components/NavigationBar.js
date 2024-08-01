import "./NavigationBar.css";
import "./Main.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavigationBar = () => {

const location = useLocation();
  const Navs=(paths)=>{
return paths.includes(location.pathname);

  }
  return (
    <div>
      <div className="nav-main-div">
        <ul className="ul-div">
          <NavLink to="/" className={({isActive})=>(Navs(['/','/sukkary'])?'nav active':'')}>
            <li className="main-page">
              <i class="fa-solid fa-house"></i>
            </li>
          </NavLink>
          <NavLink to="/navbar" className="nav">
            <li className="my-navbar">
              <i class="fa-solid fa-bars"></i>
            </li>
          </NavLink>
          <NavLink to="/my-account" className="nav">
            <li className="myaccount">
              <i class="fa-solid fa-user"></i>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
export default NavigationBar;
