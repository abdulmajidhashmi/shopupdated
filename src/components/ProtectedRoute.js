import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
const ProtectedRoute =({children})=>{


    const user = useSelector((state)=>state.user);
    const navigate=useNavigate();
    if(user){
       return navigate('/login');
    }else{
        return navigate('/');
    }

    
}

export default ProtectedRoute;