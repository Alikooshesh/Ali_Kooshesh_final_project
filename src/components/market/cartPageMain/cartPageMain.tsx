import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Iproduct} from "../../../interfaces/apiInterfaces";
import axios from "axios";

function CartPageMain() {

    const [productData , setProductData] = useState<Iproduct | null>(null)

    useEffect(()=> {
        axios.get(`https://pcmarket-server-api.herokuapp.com/product/ca2pd1`)
            .then(productData => {
                setProductData(productData.data)
            })
            .catch(err => console.log(err))
    },[])
    return(
        <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
            <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
            </div>

            <div className={"w-full flex px-0 lg:px-64 pt-3 font-anjoman"}>
                <div className={"w-full md:w-8/12 bg-gray-100 rounded-lg py-2 px-3"}>

                    <div className={"w-full flex justify-between border-b-2 py-2"}>
                        <div className={"w-3/12 max-h-32 md:max-h-56"}>
                            <img className={"w-full h-full"} src={"https://www.lioncomputer.com/uploads/image/2021/7/thumbnail/1626940785-608KkzZwO8YQdzZq.webp"}/>
                        </div>

                        <div className={"w-8/12"}>
                            <p className={"font-anjoman text-lg text-gray-700"}>لپ تاپ ایسوس TUF Dash F15 FX516 Core i7/8GB/512GB SSD/4GB</p>
                            <p className={"font-serif font-light text-sm text-gray-400"}>ASUS TUF Dash F15 FX516 i7-11370H/8GB/512GB SSD/4GB RTX 3050 Ti 15.6inch Gaming Laptop</p>
                            <div className={"flex flex-col justify-center md:flex-row md:justify-between items-center mt-5 md:mt-10"}>
                                <div className={"flex items-center"}>
                                    <p className={"text-gray-500 text-sm font-anjoman ml-5"}>تعداد</p>
                                    <FaChevronRight className={"text-green-500 text-2xl cursor-pointer ml-3"}/>
                                    <input type={"number"} className={"w-16 h-16 text-xl font-bold pb-1 border-0 outline-none bg-transparent text-center text-green-700"} value={1}/>
                                    <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"}/>
                                </div>

                                <div>
                                    <p className={`w-full text-left text-red-500 font-anjoman text-sm ${productData && (productData.offPercent == 0 && 'hidden text-opacity-0')}`}>
                                        <del>{productData && productData.offPercent !== 0 ? `${productData.price} تومان` :'0'}</del>
                                    </p>
                                    <p className={"w-full text-left font-anjoman text-3xl text-green-700"}>{`${productData && productData.price - (productData.price * (productData.offPercent / 100))} تومان`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"hidden md:block w-4/12 mr-3"}>
                    <div className={"bg-gray-100 rounded-lg py-2 px-3"}>
                        <div>
                            <div className={"w-full flex"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>جمع سفارشات :</p>
                                <p className={"w-6/12 text-gray-600 text-sm text-left"}>352000000 تومان</p>
                            </div>
                            <div className={"w-full flex"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>تخفیف ویژه :</p>
                                <p className={"w-6/12 text-gray-600 text-sm text-left"}>352000000 تومان</p>
                            </div>
                            <div className={"w-full flex"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>هزینه ارسال :</p>
                                <p className={"w-6/12 text-gray-600 text-sm text-left"}>352000000 تومان</p>
                            </div>
                            <div className={"w-full flex mt-3"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>قابل پرداخت :</p>
                                <p className={"w-6/12 text-gray-700 text-left"}>352000000 تومان</p>
                            </div>
                        </div>

                        <div className={"w-full text-center"}>
                            <button className={"w-8/12 bg-green-500 hover:bg-green-600 rounded py-2 text-gray-200 mt-2"}>ثبت آدرس و پرداخت</button>
                        </div>
                    </div>
                    <p className={"text-gray-400 text-sm mt-2 text-right"}>برای ثبت نهایی خریدتان ، حتما تا آخرین مرحله و دریافت کد رهگیری پیش بروید</p>
                </div>
            </div>
        </div>
    )
}

export default CartPageMain