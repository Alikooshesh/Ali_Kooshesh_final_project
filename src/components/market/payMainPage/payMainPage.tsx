import {FaChevronLeft, FaChevronRight, FaTrashAlt} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {Iproduct} from "../../../interfaces/apiInterfaces";
import axios from "axios";
import {IcartItem} from "../../../interfaces/redux";
import {useDispatch, useSelector} from "react-redux";
import {editNumber, remove, removeAll} from "../../../redux/reducers/cartReducer/cartReducer";
import {logout} from "../../../redux/reducers/userAuthReducer/userAuthReducer";
import {useHistory , Link} from "react-router-dom";

function PayMainPage() {

    const history = useHistory()

    const userAuthRedux = useSelector((state:any) => state.userAuth)
    const cartItemsRedux: IcartItem[] = useSelector((state: any) => state.cart.cartList)
    const dispatch = useDispatch()

    const [fullPrice , setFullPrice] = useState<number>(0)
    const [offPrice , setOffPrice] = useState<number>(0)
    const [postPrice , setPostPrice] = useState<number>(15000)
    const [finalPrice , setFinalPrice] = useState<number>(0)

    const [addressList , setAddressList] = useState<string[]>([])
    const [selectedAddress , setSelectedAddress] = useState<string|boolean>(false)

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

        cartItemsRedux.length == 0 && setPostPrice(0)
        setFinalPrice(finalPriceTemp >= 1000000 ? finalPriceTemp : finalPriceTemp - postPrice)
        setFullPrice(fullPriceTemp)
        setOffPrice(offPriceTemp)
        finalPriceTemp >= 1000000 && setPostPrice(0)
    },[cartItemsRedux])


    useEffect(()=>{
        axios.get(`https://pcmarket-server-api.herokuapp.com/user/address/${userAuthRedux.tokenId}`)
            .then(res => {
                setAddressList(res.data)
            })
            .catch(err => {
                dispatch(logout())
                console.log(err.data)
            })
    },[])

    function sendOrder() {
        if (selectedAddress && finalPrice > 0){
            axios.post('https://pcmarket-server-api.herokuapp.com/addOrder',{
                tokenId : userAuthRedux.tokenId,
                products : cartItemsRedux,
                address : selectedAddress,
                description : ""
            })
                .then(res => {
                    alert("order added")
                    dispatch(removeAll())
                    history.push('/dashboard')
                    console.log(res.data)
                })
                .catch(err => {
                    alert("ثبت سفارش شما موفقیت آمیز نبود")
                    console.log(err.data)
                })
        }
    }

    return(
        <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
            <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
            </div>

            <div className={"w-full flex px-0 lg:px-64 pt-3 font-anjoman"}>
                <div className={"w-full md:w-8/12 bg-gray-100 rounded-lg py-2 px-3"}>
                    {addressList.length == 0 &&
                    <p className={"text-2xl text-red-500 text-center mt-2"}>شما آدرس ثبت شده ای ندارید</p>}
                    <Link to={"/dashboard/address"}>
                        <button className={"bg-green-500 hover:bg-green-600 rounded py-2 px-4 text-gray-200 mt-2"}>ثبت نشانی جدید</button>
                    </Link>
                    {addressList.length > 0 && <p className={"text-2xl text-gray-700 text-center mt-2"}>نشانی مد نظرتان را انتخاب کنید</p>}
                    {addressList.map((item , index) => {
                        return(
                            <div key={`item-add-${index}`} className={"mb-1"} onChange={(e:{target : any})=> setSelectedAddress(e.target.value)}>
                                <input id={'address'} type={"radio"} name={`${index}`} value={item}/>
                                <label htmlFor={'address'} className={"mr-2 text-gray-500"}>{item}</label>
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
                                <p className={"w-6/12 text-red-400 text-sm text-left"}>{offPrice} تومان</p>
                            </div>
                            <div className={"w-full flex"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>بسته بندی و ارسال :</p>
                                <p className={"w-6/12 text-gray-600 text-sm text-left"}>{postPrice <= 0 ? '0' : postPrice} تومان</p>
                            </div>
                            <div className={"w-full flex mt-3"}>
                                <p className={"w-full text-sm text-gray-500 text-right"}>قابل پرداخت :</p>
                                <p className={"w-6/12 text-gray-700 text-left"}>{finalPrice <= 0 ? '0' : finalPrice} تومان</p>
                            </div>
                        </div>

                        <div className={"w-full text-center"}>
                            <button className={"w-8/12 bg-green-500 hover:bg-green-600 rounded py-2 text-gray-200 mt-2"} onClick={sendOrder}>پرداخت و ثبت نهایی</button>
                        </div>
                    </div>
                    <p className={"text-red-400 text-sm mt-2 text-right"}>بسته بندی و ارسال سفارشات بیش از 10 میلیون تومان ، رایگان است</p>
                    <p className={"text-gray-400 text-sm mt-2 text-right"}>برای ثبت نهایی خریدتان ، حتما تا آخرین مرحله و دریافت کد رهگیری پیش بروید</p>
                </div>
            </div>
        </div>
    )
}

export default PayMainPage