import ProductCard from "./Card";
import { useState, useEffect } from "react";
import { axiosInstance } from "./backend/axiosInstance";
import './Main.css'
import './MadinaCardlist.css';
import sukkary from './../images/sukkary.jpg'
import CardshimmeringEffect from "./CardshimmeringEffect";



const MadinaCardlist = () => {


    const [productdata,setproductdata]=useState([]);
    const initialvalues=[1,2,3,4,5,6];
    const [arr,setarr]=useState(initialvalues);
    const [loading,setloading]=useState(false);

    const getproducts=async()=>{
try{
       const response= await axiosInstance.get('/productcreate/prod');
       const data=response.data.data;
       
       
        if(data){
        const res =data.filter(prod=> prod.category.toLowerCase().includes("madina"));
        setproductdata(res);
        setloading(false);
       
        }
    }
    catch(err){

        console.log(err);
        setloading(false);
    }

}

    useEffect(()=>{
        setloading(true);
        getproducts();
    },[])


    


    return (

        <div className='card-container'>
            {loading?(arr.map(()=>(<CardshimmeringEffect/>))):(productdata.map(prod => (

<ProductCard pro={prod} />
)))
                
            }



        </div>
    );
}

export default MadinaCardlist;