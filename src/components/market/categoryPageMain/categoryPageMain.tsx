import {Carousel, CarouselItem} from "react-bootstrap";
import {FaFilter, FaSortAmountDownAlt} from 'react-icons/fa'
import ProductCard from "../stableParts/productsBox/productCard/productCard";
import ProductBox from "../stableParts/productsBox/productBox";
import FilterBox from "../stableParts/filterBox/filterBox";
import {createContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import MobileFilterOffcanvas from "../stableParts/filterBox/mobileFilterOffcanvas/mobileFilterOffcanvas";
import axios from "axios";
import {Iproduct} from "../../../interfaces/apiInterfaces";



export const CategoryDataContext = createContext<any>([])

function CategoryPageMain() {

    const [mobileFilterOffCanShow, setMobileFilterOffCanShow] = useState(false);
    const [categoryData , setCategoryData] = useState<any>([])
    const urlParams:{categoryID : string} = useParams()

    useEffect(()=> {
        axios.get(`https://pcmarket-server-api.herokuapp.com/categoryWithProducts/${urlParams.categoryID}`)
            .then(categoryData => {
                // console.log(categoryData.data)
                setCategoryData(categoryData.data[0])
                console.log(categoryData.data[0])
                console.log(`axios categoryID ${urlParams.categoryID}`)
            })
            .catch(err => console.log(err))
    },[])

    return(
        <CategoryDataContext.Provider value={categoryData}>
            <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
                <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                    به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
                </div>

                <div className={"w-full h-full px-0 lg:px-28 mt-3"}>
                    <section className={"w-full 2xl:h-96 2xl:px-52"}>
                        <Carousel>
                            <CarouselItem>
                                <div className={"w-full h-full 2xl:h-96 rounded-lg"}>
                                    <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className={"w-full h-full 2xl:h-96 rounded-lg"}>
                                    <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </section>

                    {/*{categoryData.suggestedProducts && console.log(categoryData.suggestedProducts)}*/}
                    {/*{categoryData.suggestedProducts &&*/}
                    {/*<section className={"w-full px-0 lg:px-28 mt-3"}>*/}
                    {/*    <ProductBox boxName={"کالاهای پیشنهادی"} productList={['ca1pd1,ca1pd2']}/>*/}
                    {/*</section>}*/}


                    <section className={"w-full flex mt-3"}>
                        <div className={"hidden md:block w-3/12 bg-gray-100 ml-2 rounded shadow-md"}>
                            <div className={"w-full p-3 border-b-2 border-gray-300 font-anjoman flex items-center py-5"}>
                                <FaFilter className={"ml-2"}/>
                                <p>فیلتر های بیشتر</p>
                            </div>
                            <div className={"p-3"}><FilterBox/></div>
                        </div>
                        <div className={"w-full md:w-9/12 bg-gray-100 rounded shadow-md"}>
                            <div className={"w-full p-3 border-b-2 border-gray-300 font-anjoman"}>
                                <div className={"w-full flex justify-center md:justify-start items-center "}>
                                    <FaSortAmountDownAlt className={"text-xl ml-2"}/>
                                    <button className={"p-2 pt-1 border-1 border-green-500 bg-gray-300 rounded ml-3"}>پر فروش ترین</button>
                                    <button className={"p-2 pt-1 border-1 border-transparent hover:border-black bg-gray-200 rounded ml-3"}>ارزانترین</button>
                                    <button className={"p-2 pt-1 border-1 border-transparent hover:border-black bg-gray-200 rounded ml-3"}>گرانترین</button>
                                </div>
                                <div className={"flex items-center justify-center md:hidden mx-auto mt-2 p-2 pt-1 border-1 border-transparent focus:border-green-500 bg-gray-200 rounded"} onClick={() => setMobileFilterOffCanShow(true)}>
                                    <FaFilter className={"ml-2"}/>
                                    فیلتر های بیشتر
                                </div>
                            </div>
                            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 p-3 font-anjoman"}>
                                {categoryData.product && categoryData.product.map((item:Iproduct) => {
                                    return(
                                        <div className={"relative w-64 mt-2 mx-auto"}>
                                            <ProductCard id={item.productID} name={item.productName} img={item.img[0]} price={item.price} offPercent={item.offPercent} exist={item.exist}/>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </section>
                </div>
                <MobileFilterOffcanvas show={mobileFilterOffCanShow} setShow={setMobileFilterOffCanShow}/>
            </div>
        </CategoryDataContext.Provider>
    )
}

export default CategoryPageMain