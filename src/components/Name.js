import { useRef, useState ,useEffect} from "react"; 
import { useLocation,useNavigate } from "react-router-dom";
import { axiosInstance } from "./backend/axiosInstance";
import './LoginRegister.css';
import { message } from "antd";
const Name =()=>{

        const location = useLocation();
        const {email} = location.state || {};
        const inpRef = useRef();

        const [valid, setvalid] = useState(false);
  const [numberdata, setnumberdata] = useState({email:'',name:''});
  const [disable,setdisable]  =useState(true);

  const navigate = useNavigate();

  const callapi = async (num) => {
    setdisable(false);
    console.log(numberdata);
    try {
     const otpdata =  await axiosInstance.patch("/user/name", numberdata);
      console.log(otpdata.data);
      message.destroy();
      if(otpdata.data.success===true){
        message.success("access granted");
        

        navigate('/');
      }
      if(otpdata.data.success===false){

        message.error("Internal server error");
      }
      
    } catch (err) {
        setdisable(true);
        console.log(err);
    }
  };
  function log(event) {
    if (valid && email) {
        
        if(disable){
            message.loading("loading");
      callapi();
        }
    }
  }

  function numberinput(event) {
    const numberRegex = /^[^0-9]*$/;
   
    

    if (numberRegex.test(event.target.value)) {
    
      setnumberdata({email:email,name:event.target.value});
      setvalid(true);
    } else {
      setvalid(false);
    }
  }


  useEffect(()=>{
    inpRef.current.focus();
    
      })
    
    return <>
    <div class="bg-purple-200 font-[sans-serif]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-md w-full">
            {/* <h1  class='w-40 mb-8 mx-auto block'>H RAHIM</h1> */}

            <div class="p-8 rounded-2xl bg-white shadow">
              <h2 class="text-gray-800 text-center text-2xl font-bold">
                What should we call you  
              </h2>
              <form class="mt-8 space-y-4">
                <div>
                  {/* <label class="text-gray-800 text-sm mb-2 block">
                    OTP
                  </label> */}
                  <div class="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      required
                      class={`indiacodeinp w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600`}
                      placeholder="Enter Name"
                      onChange={numberinput}
                      ref={inpRef}
                      //   value={formvalues.email}
                    />
                    {/* <p className="indiacode text-sm">+91</p>
                    <p className="indiacodeline">|</p> */}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg> */}
                  </div>
                </div>

                {/* <div>
                  <label class="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div class="relative flex items-center">
                    <input
                      name="password"
                      type={`${pass ? "text" : "password"}`}
                      required
                      class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-purple-600"
                      placeholder="Enter password"
                      onChange={handlechange}
                      value={formvalues.password}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                      onClick={showpassword}
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div> */}

                {/* <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 shrink-0 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-3 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div> */}
                {/* <div class="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      class="text-purple-500 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div> */}
                {/* </div> */}

                <div class="!mt-8">
                  <button
                    type="button"
                    class={`w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white ${
                      valid
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-purple-400"
                    }  focus:outline-none`}
                     onClick={log}
                  >
                    DONE
                  </button>
                </div>
                {/* <p class="text-gray-800 text-sm !mt-8 text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    class="text-lime-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Name;