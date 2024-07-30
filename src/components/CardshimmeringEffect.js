import './CardshimmeringEffect.css'
const CardshimmeringEffect = () => {
  return (
    <div className=" shimmer-wrapper relative m-4 flex w-full max-w-64 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div class=" grad relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl card-placeholder border border-gray-100 bg-gray shadow-md">


      </div>

      <div className="mt-4 px-5 pb-5 shimmer overflow-hidden ">
        <h5 class="text-xl tracking-tight font-medium product-name-weight text-slate-900"></h5>

        <div className="mt-2 mb-1 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold price-green text-slate-900"></span>
            <span class="text-sm text-slate-900 mrp-red line-through"></span>
          </p>
        </div>
        <div className={` flex items-center justify-start addeds `}>
          {" "}
          <i class="fa-regular fa-circle-check mr-1"></i>
        </div>

        <div
          
          className={`counter flex items-center justify-center rounded-md bg-gray-300 px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300  `}
        >
          <div className="remove "></div>
        </div>

       
          
         
         
        
      </div>
    </div>
  );
};

export default CardshimmeringEffect;
