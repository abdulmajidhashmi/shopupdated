import Header from "./Header.js";
import SimpleSlider from "./Carousel.js";
import NavigationBar from "./NavigationBar.js";
import NavHeader from "./NavHeader.js";
import ProductList from "./CardList.js";
import { useState } from "react";
import './NavigationBar.css'
import Footer from "./Footer.js";
import Iframe from "./Iframe.js";
import Animations from "./Animations.js";
import Chatbot from "./Chatbot.js";
import Types from "./Types.js";
import Landingpage from "./Landingpage.js";
import News from "./news/index.js";

const Component =()=>{

    const [cart,setcart]=useState([]);

    function addtocartprop(data){
        setcart(data)
    }
return(

    <>
     
    <Header props={cart}/>
    
        {/* <SimpleSlider/> */}
        <Landingpage/>
        <Types/>
        {/* <NavHeader/> */}
        <ProductList cartlength={addtocartprop}/>
        {/* <NavigationBar/> */}
        {/* <News/> */}
        <Iframe/>
        <Footer/>
        {/* <Chatbot/> */}
    

        
        

    </>
)

}
export default Component;