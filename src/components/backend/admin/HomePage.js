import './HomePage.css';
import { Link } from 'react-router-dom';
const HomePage=()=>{



    return(

        <>
        <div className="admin_div">
          <Link  to="/hrahim/admin/product">  <div className="view view_products"><h2>View Products</h2></div></Link>
            <Link to="/hrahim/admin/orders"><div className="view view_orders"><h2>View Orders</h2></div></Link>
        </div>
        </>
    )
}

export default HomePage;