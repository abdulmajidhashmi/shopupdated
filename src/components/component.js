import Header from "./Header.js";
import SimpleSlider from "./Carousel.js";
import NavigationBar from "./NavigationBar.js";
import NavHeader from "./NavHeader.js";
import ProductList from "./CardList.js";
import { useState } from "react";
import './NavigationBar.css'
import Footer from "./Footer.js";
import Iframe from "./Iframe.js";

const Component =()=>{

    const [cart,setcart]=useState([]);

    function addtocartprop(data){
        setcart(data)
    }
return(

    <>
     
    <Header props={cart}/>
    
        <SimpleSlider/>
        <NavHeader/>
        <ProductList cartlength={addtocartprop}/>
        <NavigationBar/>
        <Iframe/>
        <Footer/>
    

        
        

    </>
)

}
export default Component;