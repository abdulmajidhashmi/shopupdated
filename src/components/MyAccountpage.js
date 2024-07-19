import './MyAccountpage.css';
import './Main.css';
import { useState,useEffect } from 'react';
const MyAccountpage = ()=>{

    const [account,setaccount]=useState({});

    useEffect(()=>{
        setaccount(JSON.parse(localStorage.getItem('loginuser')).data);
        console.log(JSON.parse(localStorage.getItem('loginuser')))

    },[])

  

return (

    <div className="my-account-main-div">
<h1>{account.name}</h1>
<h1>{account.surname}</h1>
<h1>{account.number}</h1>
<h1>{account.email}</h1>

    </div>
)
}
export default MyAccountpage;