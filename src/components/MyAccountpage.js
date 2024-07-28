import "./MyAccountpage.css";
import "./Main.css";
import { useState, useEffect } from "react";
import LoginFinal from "./LoginFinal";
import { Link } from "react-router-dom";
import { axiosInstance } from "./backend/axiosInstance";
import MyOrders from "./MyOrders";
const MyAccountpage = () => {
 
  
const [userdata,setuserdata] =useState(null);
  


  const getcurrentuser = async () => {
    try {
        const user = await axiosInstance.get('/user/currentuserlogin');
        setuserdata(user.data.message);
        console.log(user.data.message);




    }
    catch (err) {

        console.log(err);
    }
}

useEffect(() => {
    if (localStorage.getItem('token')) {
        getcurrentuser();



    }



}, [])

  return (
    <>
      <div className="my-account-main-div">
        {userdata ? (
          <>
            <h1>{userdata.name}</h1>
            <h1>{userdata.surname}</h1>
            <h1>{userdata.number}</h1>
            <h1>{userdata.email}</h1>{" "}

            <MyOrders/>
          </>
        ) : <Link to="/login"><h1>Login</h1></Link>}
      </div>
    </>
  );
};
export default MyAccountpage;
