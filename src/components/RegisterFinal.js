import { Link } from 'react-router-dom';
import './Main.css';
import './SignUp.css';
import { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from './backend/axiosInstance';
const RegisterFinal =()=>{

  const initialvalues = { name: '', surname: '', number: '', email: '', password: '', confirmpassword: '' }
  const [formvalues, setformvalues] = useState(initialvalues);
  const intialflag = { name: false, surname: false, number: false, email: false, password: false, confirmpassword: false }
  const [flag, setflag] = useState(intialflag);
  const [clickflag, setclickflag] = useState(false);
  const [errors, seterrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
  const [navtext,setnavtext]=useState("");
  const [naverr,setnaverr]= useState(false);

  const navigate = useNavigate();


  const handlechange = (event) => {

      const { name, value } = event.target;
      setformvalues({ ...formvalues, [name]: value })

      if (event.target.value === "" && clickflag) { setflag({ ...flag, [name]: true }) }
      else { setflag({ ...flag, [name]: false }) }

  }

  const blur = (event) => {
      const { name, value } = event.target;

      if (event.target.value === "") {
          setflag({ ...flag, [name]: true })
      }
  }

  const submitform = (event) => {

      setclickflag(true);
      seterrors(validate(formvalues));
      setissubmit(true);

     


  }

  const userdata = async(formvalue)=>{

      await axiosInstance.post('/user/signup',formvalue)
      .then((data)=>{

          console.log(data);
          
          setnaverr(true);
          setnavtext("Taking to Login page");
          if(data.data.success===true){
               navigate('/hrahim/login');
            }
          
          
          
          
      }).catch((err)=>{

          console.log(err);
         
      })
  }

  useEffect(() => {

      if (Object.keys(errors).length === 0 && issubmit) {

           userdata(formvalues);

          
         

          if(naverr){
          setTimeout(()=>{
              // navigate('/hrahim/login');
          },1000)
      }
      }
  }, [errors])

  const validate = (values) => {

      const error = {};

      if (values.name === "") {
          error.name = "Enter a name"
      }
      if (values.surname === "") {
          error.surname = "Enter a surname"
      }
      if (values.number === "") {
          error.number = "Enter a number"
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const numberRegex = /^\d{10}$/;



      if (!emailRegex.test(values.email)) {
          error.email = "enter a valid email";
      }
      if (!numberRegex.test(values.number)) {
          error.number = "enter a valid Mobile number"
      }
      if (values.password === "") {
          error.password = "Enter password"
      }
      else if (values.password.length < 8) {
          error.password = "password must be min of 8 char"
      }
      if (values.confirmpassword === "") {
          error.confirmpassword = "Enter a confirmpassword"
      }
      if (values.password !== values.confirmpassword) {
          error.confirmpassword = "password do not match";
      }

      return error;

  }
    return(
        <div class='register_main_div'>
<div class="bg-purple-200  w-full h-full flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-white shadow">
        <div class="text-center mb-8">
        <h2 class="text-gray-800 text-center text-2xl font-bold">Sign Up</h2>
        </div>
      
        <form>
          <div class="space-y-4">
          {/* <div>
              <label class="text-gray-800 text-sm mb-2 block">Name</label>
              <input name="email" type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500" placeholder="Enter email" />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Surname</label>
              <input name="email" type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div> */}
            <div class="flex space-x-4">
  <div class="flex-1">
    {errors.name?<p className='validation_error'>{errors.name}</p>:<label class="text-gray-800 text-sm mb-1 block">Name</label>}
    <input name="name" type="text" class={`${flag.name ? "redcol" : ""} text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500`} placeholder="Enter name" onChange={handlechange} onBlur={blur} value={formvalues.name} />
  </div>
  <div class="flex-1">
  {errors.surname?<p className='validation_error'>{errors.surname}</p>:<label class="text-gray-800 text-sm mb-1 block">Surname</label>}
    <input name="surname" type="text" class={`${flag.surname ? "redcol" : ""} text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500`} placeholder="Enter surname" onChange={handlechange} onBlur={blur} value={formvalues.surname} />
  </div>
</div>

          <div>
              {errors.number?<p className='validation_error'>{errors.number}</p>:<label class="text-gray-800 text-sm mb-1 block">Mobile Number</label>}
              <input name="number" type="text" class={`${flag.number ? "redcol" : ""} text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500`} placeholder="Enter Mobile Number" onChange={handlechange} onBlur={blur} value={formvalues.number} />
            </div>
            <div>
              {errors.email?<p className='validation_error'>{errors.email}</p>:<label class="text-gray-800 text-sm mb-1 block">Email Id</label>}
              <input name="email" type="text" class={` ${flag.email ? "redcol" : ""} text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500`} placeholder="Enter email" onChange={handlechange} onBlur={blur} value={formvalues.email}/>
            </div>
            <div>
              {errors.password?<p className='validation_error'>{errors.password}</p>:<label class="text-gray-800 text-sm mb-1 block">Password</label>}
              <input name="password" type="password" class={`${flag.password ? "redcol" : ""} text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500`} placeholder="Enter password" onChange={handlechange} onBlur={blur} value={formvalues.password}/>
            </div>
            <div>
              {errors.confirmpassword?<p className='validation_error'>{errors.confirmpassword}</p>:<label class="text-gray-800 text-sm mb-1 block">Confirm Password</label>}
              <input name="confirmpassword" type="password" class={`${flag.confirmpassword ? "redcol" : ""} text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-purple-500`} placeholder="Enter confirm password" onChange={handlechange} onBlur={blur} value={formvalues.confirmpassword}/>
            </div>

            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label for="remember-me" class="text-gray-800 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" class="text-purple-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>
          

          <div class="!mt-12">
            <button  onClick={submitform} type="button" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none">
              Create an account
            </button>
          </div>
          <Link to='/hrahim/login'>  <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" class="text-lime-600 font-semibold hover:underline ml-1">Login here</a></p></Link>
        </form>
     
      </div>
    </div>
        </div>
    )
}

export default RegisterFinal;