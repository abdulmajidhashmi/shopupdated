import { useEffect, useState } from "react";
import { axiosInstance } from "./backend/axiosInstance";
import './Notifications.css';

const Notifications =()=>{

    const [notifydata,setnotifydata]  =useState(false);

   const notifycall=async()=>{

    try{
        const data = await axiosInstance.get('/notify/');
        setnotifydata(data.data.data);
        console.log(data.data.data);

}
    catch(err){
console.log(err);
        
    }
   }

    useEffect(()=>{

        notifycall();
    },[])


    function closethenotification(event){

            setnotifydata(null);

    }

    return(

        

        <>
        {notifydata?<div className="notify"><p className="notify_p">{notifydata.notification}</p><i onClick={closethenotification} class="fa-solid fa-xmark notify_cut"></i></div>:null}
        </>
    )
}


export default Notifications;