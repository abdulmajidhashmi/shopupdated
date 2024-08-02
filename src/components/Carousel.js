import React from "react";
import Slider from "react-slick";
import './Main.css';
import './Carousel.css';
import { Link } from "react-router-dom";
// import page1 from "./../images/page1.png";
// import page2 from "./../images/page2.png";
// import page3 from "./../images/page3.png";
// import page4 from "./../images/page4.png";





  
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:500,
  };
  return (

    <div className="main-container">
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          
          <img src='https://i.ibb.co/LzXj6CT/Untitled-4.webp' loading='lazy' className="images" />
        </div>
        <div>
        <Link to='/product-detail/66a7657e27ab209cfdfa1423'>
          <img src='https://i.ibb.co/P6PyYLD/Black-Simple-Special-Ramadan-Dates-Instagram-Post.webp' loading='lazy' className="images" />
          </Link>      
        </div>
        
        <div>
          <Link to='product-detail/66a7676a27ab209cfdfa1432'>
          <img src='https://i.ibb.co/6NwRDRD/Ramadan-Dates-For-Iftar-Instagram-Story-3000-x-1055-px.webp' loading='lazy' className="images" />
          </Link></div>
          <div>
          <Link to=''>
          <img src='https://i.ibb.co/xDBhvFk/Yellow-Modern-Dates-Benefits-Facebook-Post.webp' loading='lazy' className="images" />
          </Link></div>
        
        
        
       
      </Slider>
    </div>
    </div>
  );
}

export default SimpleSlider;
