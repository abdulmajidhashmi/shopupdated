import { Link, useNavigate } from "react-router-dom";
import "./Types.css";
const Types = () => {

    const navigate = useNavigate();

    function navig(event){

        navigate(`/${event}`);
    }
  return (
    <div className="main-type-div">
      <div className="type-div" onClick={()=>navig('dates')}>
        <div className="img-circle">
          <img
            className="type-img"
            src="https://healthymaster.in/cdn/shop/products/w1_b13a2eba-ff76-4488-b2df-634763a0c118.jpg?v=1716288498"
          />
        </div>
        <h1>Dates</h1>
      </div>
     
        <div className="type-div" onClick={()=>navig('anjeer')}>
        
          <div className="img-circle">
            <img
              className="type-img"
              src="https://static.vecteezy.com/system/resources/previews/039/032/388/non_2x/ai-generated-dried-figs-clipart-photo.jpeg"
            />
          </div>
          <h1>Anjeer</h1>
          
        </div>
        
      
      <div className="type-div" onClick={()=>navig('badam')}>
        <div className="img-circle">
          <img
            className="type-img"
            src="https://5.imimg.com/data5/SELLER/Default/2024/8/442257147/RK/BO/AY/67404644/dry-fruits.jpg"
          />
        </div>
        <h1>Badam</h1>
      </div>
      <div className="type-div" onClick={()=>navig('pista')}>
        <div className="img-circle">
          <img
            className="type-img"
            src="https://www.farmerica.in/wp-content/uploads/2023/03/Pista-Badam.jpg"
          />
        </div>
        <h1>Pista</h1>
      </div>
    </div>
  );
};

export default Types;
