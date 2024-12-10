import ProductCard from "./Card";
import { useState, useEffect } from "react";
import { axiosInstance } from "./backend/axiosInstance";
import "./Main.css";
import "./MadinaCardlist.css";
import sukkary from "./../images/sukkary.jpg";
import CardshimmeringEffect from "./CardshimmeringEffect";
import Card2 from "./Card2";
import Card3 from "./Card3";

const MadinaCardlist = () => {
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
          prod.category.toLowerCase().includes("dry fruit")
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
    // const sessiondata  =sessionStorage.getItem('products');
    // if(sessiondata){

    //    const data= JSON.parse(sessiondata)

    //     if (data) {
    //         const res = data.filter((prod) =>
    //           prod.category.toLowerCase().includes("madina")
    //         );

    //     setproductdata(res);}
    // }else{}
        setloading(true);
        getproducts();
    
    
  },[]);

  return (
    // <div className="card-container">
    //   {loading
    //     ? arr.map(() => <CardshimmeringEffect />)
    //     : productdata.map((prod) => <ProductCard pro={prod} />)}
    // </div>


<div className="card-container">
      {loading
        ? arr.map(() => <CardshimmeringEffect />)
        : productdata.map((prod) => <Card3 pro={prod} />)}
    </div>
  );
};

export default MadinaCardlist;
