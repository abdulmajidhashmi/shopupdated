// import './NavHeader.css'
// import { NavLink } from 'react-router-dom';

// const NavHeader =()=>{

    

// return(

//     <div className='nav-main'>
//         <div className='nav-sub'>

// <NavLink to="/hrahim" end className="set"> <div className='all'>All Dates</div></NavLink>
// <div className='vertical'></div>
//     <NavLink to="/hrahim/sukkary"  className="set"><div className='madina'>Madina Dates</div></NavLink>
//     </div>
//     </div>
// )
// }
// export default NavHeader;





// // import './NavHeader.css';
// // import { NavLink } from 'react-router-dom';

// // const NavHeader = () => {
// //   return (
// //     <div className='nav-main'>
// //       <div className='nav-sub'>
// //         <NavLink
// //           to="/hrahim" end
// //           className={({ isActive }) => (isActive ? 'set sets' : 'set')}
// //         >
// //           <div className='all'>All Dates</div>
// //         </NavLink>
// //         <div className='vertical'></div>
// //         <NavLink
// //           to="/hrahim/sukkary"
// //           className={({ isActive }) => (isActive ? 'set sets' : 'set')}
// //         >
// //           <div className='madina'>Madina Dates</div>
// //         </NavLink>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NavHeader;




import './NavHeader.css';
import { NavLink } from 'react-router-dom';

const NavHeader = () => {
    return (
        <div className='nav-main'>
            <div className='nav-sub'>
                <NavLink
                    to="/hrahim/"
                    end
                    className={({ isActive }) => (isActive ? 'set active left-active' : 'set')}
                >
                    <div className='all'>All Dates</div>
                </NavLink>
                <div className='vertical'></div>
                <NavLink
                    to="/hrahim/sukkary"
                    className={({ isActive }) => (isActive ? 'set active right-active' : 'set')}
                >
                    <div className='madina'>Madina Dates</div>
                </NavLink>
            </div>
        </div>
    );
};

export default NavHeader;

