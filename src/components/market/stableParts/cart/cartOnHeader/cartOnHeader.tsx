import {Link} from 'react-router-dom'

function CartOnHeader() {
    return(
        <div className={"w-full h-full rounded border-gray-300 border-2 bg-gray-200 font-anjoman py-2 px-1"}>
            <div className={"w-full flex flex-col bg-transparent"}>
                <Link to={'/product/ca2pd1'}>
                    <div className={"w-full flex border-gray-100 border-b-2 py-2 px-2 hover:bg-gray-100"}>
                        <div className={"w-9/12"}>
                            <p className={"w-full text-sm text-gray-700"}>
                                لپ تاپ ایسوس TUF Dash F15 FX516 Core i7/8GB/512GB SSD/4GB
                            </p>
                            <p className={"w-full text-xs text-gray-400"}>3 عدد</p>
                        </div>
                        <div className={"w-3/12 max-h-14 mr-1"}>
                            <img className={"w-full h-full"} src={'https://www.lioncomputer.com/uploads/image/2021/7/thumbnail/1626940785-608KkzZwO8YQdzZq.webp'}/>
                        </div>
                    </div>
                </Link>

                <Link to={'/product/ca2pd1'}>
                    <div className={"w-full flex border-gray-100 border-b-2 py-2 px-2 hover:bg-gray-100"}>
                        <div className={"w-9/12"}>
                            <p className={"w-full text-sm text-gray-700"}>
                                لپ تاپ ایسوس TUF Dash F15 FX516 Core i7/8GB/512GB SSD/4GB
                            </p>
                            <p className={"w-full text-xs text-gray-400"}>3 عدد</p>
                        </div>
                        <div className={"w-3/12 max-h-14 mr-1"}>
                            <img className={"w-full h-full"} src={'https://www.lioncomputer.com/uploads/image/2021/7/thumbnail/1626940785-608KkzZwO8YQdzZq.webp'}/>
                        </div>
                    </div>
                </Link>

                <Link to={'/product/ca2pd1'}>
                    <div className={"w-full flex border-gray-100 border-b-2 py-2 px-2 hover:bg-gray-100"}>
                        <div className={"w-9/12"}>
                            <p className={"w-full text-sm text-gray-700"}>
                                لپ تاپ ایسوس TUF Dash F15 FX516 Core i7/8GB/512GB SSD/4GB
                            </p>
                            <p className={"w-full text-xs text-gray-400"}>3 عدد</p>
                        </div>
                        <div className={"w-3/12 max-h-14 mr-1"}>
                            <img className={"w-full h-full"} src={'https://www.lioncomputer.com/uploads/image/2021/7/thumbnail/1626940785-608KkzZwO8YQdzZq.webp'}/>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={"w-full px-2 mt-2"}>
                <p className={"text-center"}>
                    <p className={"text-sm text-gray-500"}>قابل پرداخت :</p>
                    <p className={"text-gray-700"}>352000000 تومان</p>
                </p>
                <button className={"w-full ring-red-300 ring-2 hover:bg-red-300 rounded py-2 text-sm text-gray-700 mt-2"}>خالی کردن سبد خرید</button>
                <Link to={"/cart"}>
                    <button className={"w-full ring-green-600 ring-2 bg-green-500 hover:bg-green-600 rounded py-2 text-gray-200 mt-2"}>ثبت سفارش نهایی</button>
                </Link>
            </div>
        </div>
    )
}

export default CartOnHeader