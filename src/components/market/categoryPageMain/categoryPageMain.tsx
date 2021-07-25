import {Carousel, CarouselItem} from "react-bootstrap";
import {FaSortAmountDownAlt} from 'react-icons/fa'
import ProductCard from "../stableParts/productsBox/productCard/productCard";

function CategoryPageMain() {
    return(
        <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
            <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
            </div>

            <div className={"w-full h-full px-0 lg:px-28 pt-3"}>
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

                <section className={"w-full flex mt-3"}>
                    <div className={"hidden md:block w-3/12 bg-gray-100 ml-2 rounded shadow-md"}>
t
                    </div>
                    <div className={"w-full md:w-9/12 bg-gray-100 rounded shadow-md"}>
                        <div className={"w-full p-3 flex justify-center md:justify-start items-center border-b-2 border-gray-300 font-anjoman"}>
                            <FaSortAmountDownAlt className={"text-xl ml-2"}/>
                            <button className={"p-2 pt-1 border-1 border-green-500 bg-gray-300 rounded ml-3"}>پر فروش ترین</button>
                            <button className={"p-2 pt-1 border-1 border-transparent hover:border-black bg-gray-200 rounded ml-3"}>ارزانترین</button>
                            <button className={"p-2 pt-1 border-1 border-transparent hover:border-black bg-gray-200 rounded ml-3"}>گرانترین</button>
                        </div>
                        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 p-3 font-anjoman"}>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>
                            <div className={"w-64 mt-2 mx-auto"}><ProductCard/></div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CategoryPageMain