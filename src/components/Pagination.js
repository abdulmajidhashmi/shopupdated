import { useCallback, useEffect, useState } from 'react';
import './Main.css';
import './Pagination.css';


const Pagination = ({part1,part2}) =>{


    const totalpage  = part2.totalpages;
    const maximumvisiblepage =8;
    

    const [pages,setpages] = useState([]);
    const [activepage,setactivepage] = useState(1);

    const getpages =useCallback((totalpage,maximumvisiblepage,activepage)=>{

        const maxresultsize  = totalpage>maximumvisiblepage ?maximumvisiblepage:totalpage;
        const startingpage =activepage + maxresultsize>totalpage?totalpage-maxresultsize+1:activepage;
        return [...Array(maxresultsize)].map((_, idx) => {
            return startingpage + idx;
        });
    },[])
   
   
    
useEffect(()=>{
    const newpage  = getpages(totalpage,maximumvisiblepage,activepage);
    setpages(newpage);
},[activepage])
   
        const onchanges=useCallback((e)=>{
            let pagenumber = 0;
            if(e.target.dataset.id==="next"){
                pagenumber=activepage+1;

            }else if(e.target.dataset.id==="previous"){
                pagenumber=activepage-1;
            }else{

               
pagenumber=e.target.dataset.id;
            }
            part1(Number(pagenumber));
            setactivepage(Number(pagenumber));
        

        

    },[activepage])


   
   
return (
    <div className='main-pages'>

        <div className={`page page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${activepage === 1 ? 'disable' : ''}`} data-id={"previous"}onClick={onchanges}>prev</div>
            {
                pages.map(page => (

                    <div className={`page page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${activepage === page ? 'active' : ''}`} data-id={page} onClick={onchanges}>{page}</div>
                ))
            }

            <div className={`page page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${activepage === totalpage ? 'disable' : ''}`} data-id={"next"} onClick={onchanges}>next</div>

    



        </div>
)

}
export default Pagination;