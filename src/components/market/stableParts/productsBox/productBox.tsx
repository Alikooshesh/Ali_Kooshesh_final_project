import ProductCard from "./productCard/productCard";
import {FaDotCircle} from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

function ProductBox(props:{boxName:string}) {
    return(
        <div className={"p-5 bg-gray-100 rounded-lg shadow-md "}>
            <div className={"w-full flex justify-start items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>{props.boxName}</p>
            </div>
            <div className={"w-auto flex justify-around px-3 rounded-md"}>
                <Swiper
                    slidesPerView={5}
                    breakpoints={{
                        280:{
                            slidesPerView : 1,
                            spaceBetween : 2,
                            centeredSlides : true
                        },
                        350:{
                            slidesPerView : 1,
                            spaceBetween : 2,
                            centeredSlides : true
                        },
                        550:{
                            slidesPerView : 2,
                            spaceBetween : 5
                        },
                        800:{
                            slidesPerView : 3,
                            spaceBetween : 10
                        },
                        1022:{
                            slidesPerView : 2,
                            spaceBetween : 10
                        },
                        1350:{
                            slidesPerView : 3,
                            spaceBetween : 10
                        },
                        1560:{
                            slidesPerView : 4,
                            spaceBetween : 10
                        },
                        1918:{
                            slidesPerView : 5,
                            spaceBetween : 10
                        },
                    }}
                    loop={true}
                    centeredSlides={false}
                >
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                    <SwiperSlide><div className={"w-64"}><ProductCard/></div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ProductBox