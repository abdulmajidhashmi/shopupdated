import React from "react";
import Slider from "react-slick";
import './Main.css';
import './Carousel.css';
import page1 from "./../images/page1.png";
import page2 from "./../images/page2.png";
import page3 from "./../images/page3.png";
import page4 from "./../images/page4.png";





  
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
          <img src={page1} className="images" />
        </div>
        <div>
          <img src={page2} className="images" />
        </div>
        <div>
          <img src={page3} className="images" />
        </div>
        <div>
          <img src={page4} className="images" />
        </div>
        
        
        
       
      </Slider>
    </div>
    </div>
  );
}

export default SimpleSlider;
