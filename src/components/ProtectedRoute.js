import { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import {  Navigate } from "react-router-dom";
import { axiosInstance } from "./backend/axiosInstance";
import {  userdata } from "./reducers/user.reducer";
import PageNotFound from "./PageNotFound";
const ProtectedRoute =({children})=>{

    const dispatch = useDispatch();
    const [role,setrole] =useState(null);
    const [loading,setloading]  =useState(true);



    const getcurrentuser = async () => {
        try {
          const user = await axiosInstance.get("/user/currentuserlogin");
          console.log(user.data.message);
          const val = user.data.message;
          setrole(val.role);
          setloading(false);
          dispatch(userdata(val));
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        if (localStorage.getItem("token")) {
          getcurrentuser();
        }else{
            setloading(false);
        }

        console.log(role);
        
        
               
      }, []);
   
      if(loading){

        return <PageNotFound/>
      }

     

    
      
      
      
        if(!role || role!=='admin'){
    
            return <PageNotFound/>
        }

     
         return children;
     

    
    
    
}

export default ProtectedRoute;