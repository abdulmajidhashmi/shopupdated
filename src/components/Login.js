import "./Login.css";
import './Main.css';
import SignUp from "./SignUp";
import { useEffect, useRef, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loginobject } from "./reducers/addToCart.reducer";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "./backend/axiosInstance";
import {setToken} from './reducers/user.reducer';
const Login = ({ data1, data2 }) => {

    const navigate = useNavigate();

    const toke = localStorage.getItem('token')

    const initialvalues = {
        email:"",
        password:""
    }
    const [formvalues,setformvalues]=useState(initialvalues);
    const [isloading,setisloading]=useState(false);



    const dispatch = useDispatch();


    
    const decod = useSelector((state) => state.addToCart.loginobj);
    



const handlechange=(event)=>{
       const {name,value}=event.target;
       setformvalues({...formvalues,[name]:value});

}
const log=()=>{

    if(formvalues.email!=="" && formvalues.password!==""){

        setisloading(true);
    axiosInstance.post('/user/login',formvalues)
    .then((dat)=>{
        console.log(dat);
        const token = dat.data.data;
        localStorage.setItem('token',token);
        // dispatch(setToken(token));
       
            
       
        // setTimeout(()=>{
        //     window.location.reload();
        // })
      
        navigate('/hrahim');
        
      
       
            
            
        
       
        
    })
    .catch((err)=>{

        console.log(err);
    })
    .finally(()=>{

        setisloading(false);
    })

}

    
}


    return (


        <div className="login-main-div" >

            <div className="login-div">
                

                <div className="login-div-main-wrapper" >

                    {isloading?<h1>Logging you in</h1>:''}

                    <div className="login-div-wrapper">
                        <div className="login-wrap2">
                            <input name="email" className="login-input" type="text" placeholder="Enter Email/Username" onChange={handlechange} value={formvalues.email}/>
                            <input name="password" className="login-input" type="password" placeholder="Enter Password" onChange={handlechange} value={formvalues.password} />

                        </div>


                        <div className="submit-button-div">
                            <div className="submit-button" onClick={log}>Log In</div>
                        </div>
                        <div className="line-div">
                            <div className="line"></div>
                        </div>
                        <div className="create-account-div">
                           <Link to="/hrahim/register"> <div className="create-account" >Create New Account</div></Link>
                        </div>
                        <div className="google-login">
                            <GoogleOAuthProvider clientId="588246067705-neqf2p32vqmh6tkriieaomuir9v4o1gt.apps.googleusercontent.com">



                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        const decoded = jwtDecode(credentialResponse.credential);
                                        console.log(credentialResponse);


                                        dispatch(loginobject(decoded));

                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    useOneTap

                                />
                            </GoogleOAuthProvider>
                        </div>
                    </div>





                </div>
                

            </div>

        </div>

    )
}

export default Login;