import insta1 from '../../images/insta1.jpg';
import instananded from '../../images/instananded.jpg';
import instacity from '../../images/instacity.jpg';
import './index.css'
import { Link } from 'react-router-dom';
const News = () => {


    return (

        <>

            <section id="mediaCoverage" className="py-20 bg-[#E8D5C4]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-neutral-800 font-['Montserrat'] animate__animated animate__fadeIn">We are famous</h2>
                    <h2 className="text-2xl font-bold  mb-4 text-neutral-800 font-['Montserrat'] animate__animated animate__fadeIn">Instagram</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">







                    <Link to="https://www.instagram.com/reel/C4DuaUDPI2h/?utm_source=ig_web_copy_link"><div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" >
                            <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                                <img src={insta1} className='w-full h-full object-[50%-80px] object-cover' />
                            </div>
                            <div className="p-6">
                                <div className="insta-views-div flex items-center mb-4">
                                   <div className='flex items-center'> <svg className="w-6 h-6 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span className="text-sm text-neutral-600">Instagram Reel</span></div>
                                    <h3 className='insta-views'>29000+ Views</h3>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Influencer ShahFoodDairies Spotlight</h3>
                                <p className="text-neutral-600 mb-4 line-clamp-2">See how leading influencers are featuring our products in their daily content...</p>
                                <Link to="https://www.instagram.com/reel/C4DuaUDPI2h/?utm_source=ig_web_copy_link" className="inline-flex items-center text-[#7C9D96] hover:text-[#F4B183] transition-colors">
                                    View Reel
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div></Link> 
                        <Link to="https://www.instagram.com/reel/C4LOcQBIlpN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" ><div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" >
                            <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                                <img src={instananded} className='w-full h-full object-[50%-240px] object-cover' />
                            </div>
                            <div className="p-6">
                                <div className="insta-views-div flex items-center mb-4">
                                <div className='flex items-center'>  <svg className="w-6 h-6 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span className="text-sm text-neutral-600">Instagram Reel</span></div><h3 className='insta-views'>50000+ Views</h3>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Influencer NandedFoodDairies Spotlight</h3>
                                <p className="text-neutral-600 mb-4 line-clamp-2">See how leading influencers are featuring our products in their daily content...</p>
                                <Link to="https://www.instagram.com/reel/C4LOcQBIlpN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="inline-flex items-center text-[#7C9D96] hover:text-[#F4B183] transition-colors">
                                    View Reel
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        </Link> 
                       <Link to="https://www.instagram.com/reel/C4H7Rb-os57/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" >
                            <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                                <img src={instacity} className='w-full h-full object-[50%-140px] object-cover' />
                            </div>
                            <div className="p-6">
                                <div className="insta-views-div  flex items-center mb-4">
                                <div className=' flex items-center'>  <svg className="w-6 h-6 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span className="text-sm text-neutral-600">Instagram Reel</span></div><h3 className='insta-views'>40000+ Views</h3>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Influencer NandedCityNews Spotlight</h3>
                                <p className="text-neutral-600 mb-4 line-clamp-2">See how leading influencers are featuring our products in their daily content...</p>
                                <Link to="https://www.instagram.com/reel/C4H7Rb-os57/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="inline-flex items-center text-[#7C9D96] hover:text-[#F4B183] transition-colors">
                                    View Reel
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        </Link> 
                    </div>
                    {/* break */}
                    <h2 className="text-2xl font-bold  mb-4 text-neutral-800 font-['Montserrat'] animate__animated animate__fadeIn">Instagram</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">




                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
                            <div className="famous_image_div aspect-video bg-neutral-200 flex items-center justify-center">
                                <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img src="https://forbes.com/favicon.ico" alt="Forbes" className="w-6 h-6 mr-2" />
                                    <span className="text-sm text-neutral-600">Forbes</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Revolutionary E-commerce Platform Disrupts Market</h3>
                                <p className="text-neutral-600 mb-4 line-clamp-2">Our innovative approach to online shopping has caught the attention of major business publications...</p>
                                <Link to="#" className="inline-flex items-center text-[#7C9D96] hover:text-[#F4B183] transition-colors">
                                    Read Article
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>





                    </div>




                    <h2 className="text-2xl font-bold  mb-4 text-neutral-800 font-['Montserrat'] animate__animated animate__fadeIn">Youtube</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
                            <div className="famous_image_div aspect-video bg-neutral-200 flex items-center justify-center">
                                <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img src="https://forbes.com/favicon.ico" alt="Forbes" className="w-6 h-6 mr-2" />
                                    <span className="text-sm text-neutral-600">Forbes</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Revolutionary E-commerce Platform Disrupts Market</h3>
                                <p className="text-neutral-600 mb-4 line-clamp-2">Our innovative approach to online shopping has caught the attention of major business publications...</p>
                                <Link to="#" className="inline-flex items-center text-[#7C9D96] hover:text-[#F4B183] transition-colors">
                                    Read Article
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>


                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" >
                            <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                                <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                    </svg>
                                    <span className="text-sm text-neutral-600">YouTube Feature</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Behind the Scenes: Our Success Story</h3>
                                <p className="text-neutral-600 mb-4 line-clamp-2">An exclusive look into our journey and what makes our platform unique...</p>
                                <Link to="#" className="inline-flex items-center text-[#7C9D96] hover:text-[#F4B183] transition-colors">
                                    Watch Video
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>


                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" >
                            <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                                <img src={insta1} className='w-full h-full object-[50%-80px] object-cover' />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <svg className="w-6 h-6 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span className="text-sm text-neutral-600">Instagram Reel</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-800">Influencer ShahFoodDairies Spotlight</h3>
                                <p className="text-neutral-600 mb-4 line-clamp-2">See how leading influencers are featuring our products in their daily content...</p>
                                <Link to="https://www.instagram.com/reel/C4DuaUDPI2h/?utm_source=ig_web_copy_link" className="inline-flex items-center text-[#7C9D96] hover:text-[#F4B183] transition-colors">
                                    View Story
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                
            </section>










        </>
    )
}

export default News;