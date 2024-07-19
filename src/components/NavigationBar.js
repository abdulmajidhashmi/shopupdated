import './NavigationBar.css';
import './Main.css';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
const NavigationBar = () => {



    return (

        <div>
            <div className='nav-main-div'>

                <ul className='ul-div'>
                    <NavLink to="/hrahim/" className="nav"><li className='main-page'><i class="fa-solid fa-house"></i></li></NavLink>
                    <NavLink to="/navbar"className="nav"><li className='my-navbar'><i class="fa-solid fa-bars"></i></li></NavLink>
                    <NavLink to="/my-account" className="nav"><li className='myaccount'>
                    <i class="fa-solid fa-user"></i>

                    </li></NavLink>
                </ul>
            </div>



        </div>
    )
}
export default NavigationBar;