import ProductCard from "./Card";
import { useState, useEffect } from "react";
import './Main.css'
import './MadinaCardlist.css';
import sukkary from './../images/sukkary.jpg'

const productData = [{
    id: 111,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 112,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 113,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 114,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 115,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 116,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 117,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 118,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},
{
    id: 119,
    image: `${sukkary}`,
    productTitle: "kimia",
    rate: "150",
    mrp: "500",
    weight: "500g",
},]


const MadinaCardlist = () => {



    const [product, setProduct] = useState(productData);


    return (

        <div className='card-container'>
            {
                product.map(prod => (

                    <ProductCard pro={prod} />
                ))
            }



        </div>
    );
}

export default MadinaCardlist;