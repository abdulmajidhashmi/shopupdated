import Card3 from './Card3';
import './CardList.css';
import { useState, useEffect } from "react";
import { axiosInstance } from "./backend/axiosInstance";
const Anjeer =()=>{

    const [productdata, setproductdata] = useState([]);
  const initialvalues = [1, 2, 3, 4, 5, 6];
  const [arr, setarr] = useState(initialvalues);
  const [loading, setloading] = useState(false);

    const getproducts = async () => {
        try {
          const response = await axiosInstance.get("/productcreate/prod");
          const data = response.data.data;
          // sessionStorage.setItem('products',JSON.stringify(data));
    
          if (data) {
            const res = data.filter((prod) =>
              prod.category.toLowerCase().includes("anjeer")
            );
            setproductdata(res);
           
            setloading(false);
          }
        } catch (err) {
          console.log(err);
          setloading(false);
        }
      };
    
      useEffect(() => {
        
            setloading(true);
            getproducts();
        
        
      },[]);
    return (

        <>

<div className="card-container">
              {productdata.map((prod) => (
                <Card3 key={prod._id} pro={prod} />
              ))}
            </div>
        
        </>
    )
}

export default Anjeer;