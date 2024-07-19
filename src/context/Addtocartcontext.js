import { createContext,useState } from "react";


export const addtocartcontext = createContext();
const Addtocartprovider =({children})=>{

     const [addtocart,setaddtocart]= useState({});
return(

<addtocartcontext.Provider value={{addtocart,setaddtocart}}>
{children}

</addtocartcontext.Provider>
)
}

export default Addtocartprovider;