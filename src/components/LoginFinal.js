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

const LoginFinal=()=>{


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
return(

    <>
    <div class="bg-purple-200 font-[sans-serif]">
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div class="max-w-md w-full">
          {/* <h1  class='w-40 mb-8 mx-auto block'>H RAHIM</h1> */}
          

          <div class="p-8 rounded-2xl bg-white shadow">
            <h2 class="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form class="mt-8 space-y-4">
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Email</label>
                <div class="relative flex items-center">
                  <input name="email" type="text" required class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600" placeholder="Enter Email" onChange={handlechange} value={formvalues.email} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600" placeholder="Enter password" onChange={handlechange} value={formvalues.password} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-rose-600 focus:ring-rose-500 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a href="jajvascript:void(0);" class="text-purple-500 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div class="!mt-8">
                <button type="button" class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none"  onClick={log}>
                  Sign in
                </button>
              </div>
                <p class="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <Link to="/hrahim/register" class="text-lime-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
)

}

export default LoginFinal;