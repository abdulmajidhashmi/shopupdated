import "./Navbar.css";
import Animations from "./Animations";
const Navbar = () => {
  return (
    <div className="navbar-main">
      <h1 className="navbar-heading">this is navbar</h1>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>products</li>
        <li>login</li>
        <li>my profile</li>
        <li>my orderssssssss</li>
      </ul>
    </div>
  );
};

export default Animations(Navbar);
