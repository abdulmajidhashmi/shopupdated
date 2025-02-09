import { useEffect, useRef, useState } from "react";
import "./userData.css";
import { useSelector, useDispatch } from "react-redux";
import { setToken, userdata } from "./reducers/user.reducer";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const UserData = () => {
  const { user } = useSelector((state) => state.user);
  // const reduceToken = useSelector((state)=> state.user.setToken);
  const logindivhover = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function loginDivClick(event) {
    if (!user) {
      navigate("/log");
    } else {
      // if (logindivhover.current.style.display === "none") {
      //     logindivhover.current.style.display = "block";
      // } else {
      //     logindivhover.current.style.display = "none"
      // }
    }
  }
  const logout = () => {
    localStorage.removeItem("token");

    dispatch(setToken(""));
    dispatch(userdata(null));

    // navigate('/hrahim/login');

    console.log("hi");
  };
  function loginHover(event) {
    // logindivhover.current.style.display = "block";
  }

  function loginHideHover(event) {
    // logindivhover.current.style.display = "none";
  }

  return (
    <>
      <div
        onClick={loginDivClick}
        onMouseOut={loginHideHover}
        onMouseOver={loginHover}
        className={`main_login1 ${user?'bg-green-700':''}  h-[27px] w-[27px] flex items-center justify-center border-2 border-gray-100  rounded-full text-[14px]`}
      >
        {user ? (
          <h1 className="text-white">{user?.name.charAt(0).toUpperCase()}</h1>
        ) : (
          <i class="fa-regular fa-user"></i>
        )}
      </div>

      {/* <div className={`profile-main-div ${user ? "" : "yes"}`}>
             
                 

                  
                    <div ref={logindivhover} class="loginhide max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg profilehov">
                        <div class="border-b px-4 pb-6">
                            <div class="text-center my-4">
                                
                                <div class="py-2">
                                    <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">{`${user ? user.name : ""}`}</h3>
                                    <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                                        <svg class="h-8 w-8 text-grey-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                                        {`${user ? user.email : ""}`}
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-2 px-2">
                                <button
                                    class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                                   <Link to="/my-account">View</Link>
                                </button>
                                <button onClick={logout}
                                    class="logout flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                  
                </div>  */}
    </>
  );
};

export default UserData;
