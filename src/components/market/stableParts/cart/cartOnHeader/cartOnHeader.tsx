import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {IcartItem} from "../../../../../interfaces/redux";
import {useEffect, useState} from "react";
import {removeAll} from "../../../../../redux/reducers/cartReducer/cartReducer";

function CartOnHeader() {

    const cartItemsRedux: IcartItem[] = useSelector((state: any) => state.cart.cartList)

    const dispatch = useDispatch()

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
        <div className={"w-full h-full rounded border-gray-300 border-2 bg-gray-200 font-anjoman py-2 px-1"}>
            <div className={"w-full flex flex-col bg-transparent"}>
                {cartItemsRedux.map(item =>{
                    return(
                        <Link key={`${item.productId} ${Math.random()}`} to={`/product/${item.productId}`}>
                            <div className={"w-full flex border-gray-100 border-b-2 py-2 px-2 hover:bg-gray-100"}>
                                <div className={"w-9/12"}>
                                    <p className={"w-full text-sm text-gray-700"}>{item.productTitleFA}</p>
                                    <p className={"w-full text-xs text-gray-400"}>
                                        <span>{item.number}</span>
                                        <span>عدد</span>
                                    </p>
                                </div>
                                <div className={"w-3/12 max-h-14 mr-1"}>
                                    <img className={"w-full h-full"} src={item.mainImg} alt={item.productName}/>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className={"w-full px-2 mt-2"}>
                <p className={"text-center"}>
                    <p className={"text-sm text-gray-500"}>قابل پرداخت :</p>
                    <p className={"text-gray-700"}>
                        <span>{finalPrice} </span>
                        <span>تومان</span>
                    </p>
                </p>
                <button className={"w-full ring-red-300 ring-2 hover:bg-red-300 rounded py-2 text-sm text-gray-700 mt-2"} onClick={()=> dispatch(removeAll())}>خالی کردن سبد خرید</button>
                <Link to={"/cart"}>
                    <button className={"w-full ring-green-600 ring-2 bg-green-500 hover:bg-green-600 rounded py-2 text-gray-200 mt-2"}>ثبت سفارش نهایی</button>
                </Link>
            </div>
        </div>
    )
}

export default CartOnHeader