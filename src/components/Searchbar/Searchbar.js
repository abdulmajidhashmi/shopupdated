import { useEffect, useRef, useState } from "react";
import "./Searchbar.css";
import { Link } from "react-router-dom";
import { axiosInstance } from "../backend/axiosInstance";
function Searchbar() {
  const inpRef = useRef(null);
  const modalRef = useRef(null);
  const [seachData, setSearchData] = useState([]);
  const [ismodal, setismodal] = useState(false);
  useEffect(() => {
    if (inpRef?.current) {
      inpRef.current.focus();
      setTimeout(() => setismodal(true), 0);
    }

    const handleClickOutside = (event) => {
      if (
        modalRef.current && 
        !modalRef.current.contains(event.target) && 
        inpRef.current !== event.target
      ) {
        setismodal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

   

  }, []);
  let dbfn;

 

  const fetching = (event) => {
    if (!event.target.value) {
      clearTimeout(dbfn);
      setSearchData([]);
      return;
    }
    clearTimeout(dbfn);
    dbfn = setTimeout(() => {
      fetchdata(event.target.value);
    }, 500);
  };

  const fetchdata = async (val) => {
    const datafetched = await axiosInstance.post(
      "/productcreate/fetchproduct",
      { value: val }
    );

    setSearchData(datafetched.data.data);
  };

  return (
    <section id="search" class="bg-neutral-100 py-3 searchy">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-6 animate__animated animate__fadeIn">
          <div class="relative">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-grow">
                <div class="relative">
                  <input
                    onKeyUp={fetching}
                    onFocus={() => setismodal(true)}
                    ref={inpRef}
                    type="search"
                    class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition duration-300"
                    placeholder="Search for products..."
                    id="searchInput"
                  />
                  <svg
                    class="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>

                <div
                  class={`absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto ${
                    ismodal ? "block" : "hidden"
                  }`}
                  id="searchResults" ref={modalRef}
                >
                  <div class="p-4 border-b">
                    <h3 class="text-sm font-medium text-gray-900">
                      Recent Searches
                    </h3>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-center text-gray-700 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
                        <svg
                          class="h-5 w-5 mr-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Wet Dates</span>
                      </div>
                    </div>
                  </div>

                  <div class="p-4">
                    <h3 class="text-sm font-medium text-gray-900">
                      Search Results
                    </h3>
                    <div class="mt-2 space-y-2">
                      {seachData &&
                        seachData?.map((datas) => (
                          <Link to={`/product-detail/${datas._id}`}>
                            <div
                              key={datas._id}
                              class="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md cursor-pointer"
                            >
                              <div class="flex items-center">
                                <img
                                  src={datas.image1}
                                  alt="Product"
                                  class="h-10 w-10 rounded-md object-cover"
                                />
                                <div class="ml-3">
                                  <p class="text-sm font-medium text-gray-900">
                                    {datas.name}
                                  </p>
                                  <p class="text-sm text-gray-500">
                                    {datas.category}
                                  </p>
                                </div>
                              </div>
                              <span class="text-sm font-medium text-[#f59e0b]">
                                {datas.price}
                              </span>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-none">
                <button class="w-full md:w-auto px-6 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-lg transition duration-300 flex items-center justify-center">
                  <span>Search</span>
                  <svg
                    class="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="text-sm text-gray-600">Popular:</span>
              <Link to="/dates">
                {" "}
                <button class="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300">
                  Dates
                </button>
              </Link>
              <Link to="product-detail/66a7657e27ab209cfdfa1423">
                <button class="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300">
                  Ajwa Dates
                </button>
              </Link>
              <Link to="/badam">
                <button class="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300">
                  Badam
                </button>
              </Link>
              <Link to="/anjeer">
                <button class="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300">
                  Anjeer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Searchbar;
