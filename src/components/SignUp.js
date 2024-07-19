import { Link } from 'react-router-dom';
import './Main.css';
import './SignUp.css';
import { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from './backend/axiosInstance';
const SignUp = () => {
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
            setTimeout(()=>{
                navigate('/hrahim/login');
            },1000)
            
            
            
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
            error.number = "enter a valid number"
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



    return (



        <div className="signup-main-div" >

           
            <div className='signup-div'>
        {navtext?<h1>{navtext}</h1>:""}
            {Object.keys(errors).length === 0 && issubmit &&naverr?(<div className='formsubmitted'><h1>form submitted</h1></div>):""}
                <div className="nameandsurname">

                    <input name="name" className={`firstname ${flag.name ? "redcol" : ""} `} placeholder="First Name" type="text" onChange={handlechange} onBlur={blur} value={formvalues.name}></input>
                    <p className='validation_error'>{errors.name}</p>
                    <input name="surname" className={`surname  ${flag.surname ? "redcol" : ""}`} placeholder="Surname" type="text" onChange={handlechange} onBlur={blur} value={formvalues.surname}></input>
                </div>

                <input name="number" className={`email inputs  ${flag.number ? "redcol" : ""}`} placeholder="Mobile Number" type="text" onChange={handlechange} onBlur={blur} value={formvalues.number}></input>
                <p className='validation_error'>{errors.number}</p>
                <input name="email" className={`email inputs ${flag.email ? "redcol" : ""}`} placeholder="Email Address" type="text" onChange={handlechange} onBlur={blur} value={formvalues.email}></input>
                <p className='validation_error'>{errors.email}</p>
                <input name="password" className={`password inputs ${flag.password ? "redcol" : ""}`} placeholder="Password" type="password" onChange={handlechange} onBlur={blur} value={formvalues.password}></input>
                <p className='validation_error'>{errors.password}</p>
                <input name="confirmpassword" className={`confirmpassword inputs ${flag.confirmpassword ? "redcol" : ""}`} placeholder='Confirm Password' type='password' onChange={handlechange} onBlur={blur} value={formvalues.confirmpassword}></input>
                <p className='validation_error'>{errors.confirmpassword}</p>
                <div className='signup' onClick={submitform}>Sign Up</div>
                

                <div className="line-div">
                    <div className="line"></div>
                </div>
                <Link to='/hrahim/login'>  <div className='existinguser' >Existing User? Log In</div></Link>
            </div>

        </div>
    )

}

export default SignUp;