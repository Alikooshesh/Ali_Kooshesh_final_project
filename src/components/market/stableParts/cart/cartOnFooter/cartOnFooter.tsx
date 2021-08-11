import {Link} from 'react-router-dom'
import {IcartItem} from "../../../../../interfaces/redux";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function CartOnFooter() {

    const cartItemsRedux: IcartItem[] = useSelector((state: any) => state.cart.cartList)

    const [finalPrice , setFinalPrice] = useState<number>(0)

    useEffect(()=>{
        let fullPrice = 0
        for (let i = 0; i < cartItemsRedux.length; i++) {
            const newPrice = (cartItemsRedux[i].price - (cartItemsRedux[i].price * cartItemsRedux[i].offPercent / 100)) * cartItemsRedux[i].number
            fullPrice = fullPrice + newPrice
        }
        setFinalPrice(fullPrice)
    },[cartItemsRedux])

    return(
        <div className={"w-full bg-white rounded-t-xl border-b-0 border-green-200 border-2 px-5 font-anjoman"}>
            <div className={"flex py-2"}>
                <p className={"w-6/12"}>
                    <p className={"text-sm text-gray-500"}>قابل پرداخت :</p>
                    <p className={"text-gray-700"}>
                        <span>{finalPrice} </span>
                        <span>تومان</span>
                    </p>
                </p>

                <div className={"w-6/12"}>
                    <Link to={"/cart"}>
                        <button className={"w-full h-full ring-green-600 ring-2 bg-green-500 hover:bg-green-600 rounded text-gray-200"}>ثبت سفارش نهایی</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartOnFooter