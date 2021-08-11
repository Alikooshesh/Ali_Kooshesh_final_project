import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {useEffect, useState} from "react";
import {Iproduct} from "../../../interfaces/apiInterfaces";
import axios from "axios";
import {IcartItem} from "../../../interfaces/redux";
import {useDispatch, useSelector} from "react-redux";
import {editNumber} from "../../../redux/reducers/cartReducer/cartReducer";

function CartPageMain() {

    const dispatch = useDispatch()
    const cartItemsRedux: IcartItem[] = useSelector((state: any) => state.cart.cartList)

    const [fullPrice , setFullPrice] = useState<number>(0)
    const [offPrice , setOffPrice] = useState<number>(0)
    const [postPrice , setPostPrice] = useState<number>(15000)
    const [finalPrice , setFinalPrice] = useState<number>(0)

    useEffect(()=>{
        let finalPriceTemp = 0
        let fullPriceTemp = 0
        let offPriceTemp = 0

        for (let i = 0; i < cartItemsRedux.length; i++) {
            const newPrice = (cartItemsRedux[i].price - (cartItemsRedux[i].price * cartItemsRedux[i].offPercent / 100)) * cartItemsRedux[i].number
            finalPriceTemp = finalPriceTemp + newPrice
            fullPriceTemp = fullPriceTemp + (cartItemsRedux[i].price * cartItemsRedux[i].number)
            offPriceTemp = offPriceTemp + ((cartItemsRedux[i].price * cartItemsRedux[i].offPercent / 100)* cartItemsRedux[i].number)
        }

        setFinalPrice(finalPriceTemp >= 1000000 ? finalPriceTemp : finalPriceTemp - postPrice)
        setFullPrice(fullPriceTemp)
        setOffPrice(offPriceTemp)
        finalPriceTemp >= 1000000 && setPostPrice(0)
    },[cartItemsRedux])

    return(
        <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
            <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
            </div>

            <div className={"w-full flex px-0 lg:px-64 pt-3 font-anjoman"}>
                <div className={"w-full md:w-8/12 bg-gray-100 rounded-lg py-2 px-3"}>
                    {cartItemsRedux.map(item => {
                        return(
                            <div className={"w-full flex justify-between border-b-2 py-2"}>
                                <div className={"w-3/12 max-h-32 md:max-h-56"}>
                                    <img className={"w-full h-full"} src={item.mainImg} alt={item.productName}/>
                                </div>

                                <div className={"w-8/12"}>
                                    <p className={"font-anjoman text-lg text-gray-700"}>{item.productTitleFA}</p>
                                    <p className={"font-serif font-light text-sm text-gray-400"}>{item.productName}</p>
                                    <div className={`${item.description.length == 0 && 'hidden'} font-serif font-light text-sm text-gray-400 mt-3`}>
                                        <p>توضیحات :</p>
                                        <span>{item.description}</span>
                                    </div>
                                    <div className={"flex flex-col justify-center md:flex-row md:justify-between items-center mt-5 "}>
                                        <div className={"flex items-center"}>
                                            <p className={"text-gray-500 text-sm font-anjoman ml-5"}>تعداد</p>
                                            <FaChevronRight className={"text-green-500 text-2xl cursor-pointer ml-3"} onClick={() => dispatch(editNumber({productId : item.productId , order:"-"}))}/>
                                            <input type={"number"} className={"w-16 h-16 text-xl font-bold pb-1 border-0 outline-none bg-transparent text-center text-green-700"} value={item.number}/>
                                            <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"} onClick={() => dispatch(editNumber({productId : item.productId , order:"+"}))}/>
                                        </div>

                                        <div>
                                            <p className={`w-full text-left text-red-500 font-anjoman text-sm ${item.offPercent == 0 && 'hidden text-opacity-0'}`}>
                                                <del>{item.offPercent !== 0 ? `${item.price * item.number} تومان` :''}</del>
                                            </p>
                                            <p className={"w-full text-left font-anjoman text-3xl text-green-700"}>{`${(item.price - (item.price * (item.offPercent / 100))) * item.number} تومان`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={"hidden md:block w-4/12 mr-3"}>
                    <div className={"bg-gray-100 rounded-lg py-2 px-3"}>
                        <div>
                            <div className={"w-full flex"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>جمع سفارشات :</p>
                                <p className={"w-6/12 text-gray-600 text-sm text-left"}>{fullPrice} تومان</p>
                            </div>
                            <div className={"w-full flex"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>تخفیف ویژه :</p>
                                <p className={"w-6/12 text-gray-600 text-sm text-left"}>{offPrice} تومان</p>
                            </div>
                            <div className={"w-full flex"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>بسته بندی و ارسال :</p>
                                <p className={"w-6/12 text-gray-600 text-sm text-left"}>{postPrice} تومان</p>
                            </div>
                            <div className={"w-full flex mt-3"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>قابل پرداخت :</p>
                                <p className={"w-6/12 text-gray-700 text-left"}>{finalPrice} تومان</p>
                            </div>
                        </div>

                        <div className={"w-full text-center"}>
                            <button className={"w-8/12 bg-green-500 hover:bg-green-600 rounded py-2 text-gray-200 mt-2"}>ثبت آدرس و پرداخت</button>
                        </div>
                    </div>
                    <p className={"text-red-400 text-sm mt-2 text-right"}>بسته بندی و ارسال سفارشات بیش از 10 میلیون تومان ، رایگان است</p>
                    <p className={"text-gray-400 text-sm mt-2 text-right"}>برای ثبت نهایی خریدتان ، حتما تا آخرین مرحله و دریافت کد رهگیری پیش بروید</p>
                </div>
            </div>
        </div>
    )
}

export default CartPageMain