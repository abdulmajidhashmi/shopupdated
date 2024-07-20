import { useEffect } from 'react';
import './Allimagesshow.css';

const Allimagesshow=({data})=>{


    return (

        <>

        
    
        {data?
        
        
            <div className="allimages_div">
                {/* <div className='allimages_div2'> */}
        <img  src={data.image1} />
        <img  src={data.image2} />
        <img  src={data.image3} />
        <img  src={data.image4} />

        </div>

        // </div>
        
        
        :null}
        </>
    )
}

export default Allimagesshow;