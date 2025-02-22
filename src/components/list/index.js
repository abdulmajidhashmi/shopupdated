import "./index.css"
const data = [{

    name: "JUMARA Dates 5KG",
    img1: "images/jumaradates.jpeg",
    img2: "images/jumara4.jpeg",
    img3: "images/jumara2.jpeg",
    img4: "images/jumara3.jpeg"
},
{

    name: "PENTKHAJUR KATTA HARA  30KG",
    img1: "images/kattahara1.jpeg",
    img2: "images/kattahara2.jpeg",
    img3: "images/kattahara3.jpeg",
    img4: ""
},
{

    name: "BRANCHES Loose Dates 5KG",
    img1: "images/branches1.jpeg",
    img2: "images/branches2.jpeg",
    img3: "images/branches3.jpeg",
    img4: "images/branches4.jpeg"
},

]
const Listing = () => {

    return (
        <div id="root">
            <section id="gallery" class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <h2 class="list_main text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-800 animate__animated animate__fadeIn">
                        H Rahim Gallery
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {data.map((dat) => (
                            <div class="bg-white rounded-lg shadow-md p-1 transform transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeIn">
                                <h1 class="text-neutral-800 list_texting">{dat.name}</h1>
                                <div class="grid grid-cols-2 gap-2 mb-4">
                                    <div class="aspect-square overflow-hidden rounded-lg ">
                                        <div class="w-full h-full bg-neutral-200 hover:opacity-80 transition-opacity duration-300">

                                            <img alt="image1" className="img_setting" src={dat.img1} height={500} width={500}/>
                                        </div>
                                    </div>
                                    <div class="aspect-square overflow-hidden rounded-lg ">
                                        <div class="w-full h-full bg-neutral-300 hover:opacity-80 transition-opacity duration-300">
                                        <img alt="image2" className="img_setting" src={dat.img2} height={500} width={500}/>
                                        </div>
                                    </div>
                                    <div class="aspect-square overflow-hidden rounded-lg ">
                                        <div class="w-full h-full bg-neutral-400 hover:opacity-80 transition-opacity duration-300">
                                        <img alt="image3" className="img_setting" src={dat.img3} height={500} width={500}/>
                                        </div>
                                    </div>
                                    <div class="aspect-square overflow-hidden rounded-lg ">
                                        <div class="w-full h-full bg-neutral-500 hover:opacity-80 transition-opacity duration-300">
                                        <img alt="image4" className="img_setting" src={dat.img4} height={500} width={500}/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Listing;





