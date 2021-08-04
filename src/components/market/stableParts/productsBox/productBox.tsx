import ProductCard from "./productCard/productCard";
import {FaDotCircle} from 'react-icons/fa'

import SwiperCore, { Navigation, Scrollbar, Autoplay, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Iproduct} from "../../../../interfaces/apiInterfaces";

function ProductBox(props:{boxName:string , productList:string[]}) {

    SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination])
    const [products , setProducts] = useState<Iproduct[]|null>(null)

    useEffect(()=>{
        axios.post('https://pcmarket-server-api.herokuapp.com/productList/', {productList : props.productList})
            .then(productDataList => setProducts(productDataList.data))
            .catch(err => console.log(err))
    },[])

    return(
        <>
            {products && <div className={"p-5 bg-gray-100 rounded-lg shadow-md "}>
                <div className={"w-full flex justify-start items-center mb-3"}>
                    <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                    <p className={"text-gray-900 font-anjoman font-light"}>{props.boxName}</p>
                </div>
                <div className={"w-auto flex justify-around px-3 rounded-md"}>
                    <Swiper
                        slidesPerView={5}
                        autoplay={{
                            delay:3500,
                            pauseOnMouseEnter:true
                        }}
                        scrollbar
                        breakpoints={{
                            280:{
                                slidesPerView : 1,
                                spaceBetween : 2,
                                centeredSlides : true,
                                navigation : true
                            },
                            350:{
                                slidesPerView : 1,
                                spaceBetween : 2,
                                centeredSlides : true,
                                navigation : true
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
                        {products.map(item =>{
                            return(
                                <SwiperSlide key={`${item.productID} ${props.boxName} ${Math.random()}`}>
                                    <div className={"w-64 h-96 mx-auto mb-5"}>
                                        <ProductCard id={item.productID} name={item.productTitleFA} img={item.img[0]} price={item.price} offPercent={item.offPercent} exist={item.exist}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>

                </div>
            </div>}
        </>
    )
}

export default ProductBox