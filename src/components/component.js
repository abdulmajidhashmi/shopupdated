import Header from "./Header.js";
import SimpleSlider from "./Carousel.js";
import NavigationBar from "./NavigationBar.js";
import NavHeader from "./NavHeader.js";
import ProductList from "./CardList.js";
import { useState } from "react";
import './NavigationBar.css'

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
    

        
        

    </>
)

}
export default Component;