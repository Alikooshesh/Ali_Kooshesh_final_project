function CartOnFooter() {
    return(
        <div className={"w-full bg-white rounded-t-xl border-b-0 border-green-200 border-2 px-5 font-anjoman"}>
            <div className={"flex py-2"}>
                <p className={"w-6/12"}>
                    <p className={"text-sm text-gray-500"}>قابل پرداخت :</p>
                    <p className={"text-gray-700"}>352000000 تومان</p>
                </p>

                <button className={"w-6/12 ring-green-600 ring-2 bg-green-500 hover:bg-green-600 rounded text-gray-200 "}>ثبت سفارش نهایی</button>
            </div>
        </div>
    )
}

export default CartOnFooter