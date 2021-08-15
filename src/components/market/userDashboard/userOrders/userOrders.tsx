import {FaDotCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {logout} from "../../../../redux/reducers/userAuthReducer/userAuthReducer";
import {IuserOrder} from "../../../../interfaces/userInterfaces";

const a = true

function UserOrders() {

    const userAuthRedux = useSelector((state:any) => state.userAuth)
    const dispatch = useDispatch()

    const [orderList , setOrderList] = useState<IuserOrder[]>([])

    useEffect(()=>{
        axios.get(`https://pcmarket-server-api.herokuapp.com/user/orders/${userAuthRedux.tokenId}`)
            .then(res => {
                setOrderList(res.data)
            })
            .catch(err => {
                dispatch(logout())
                console.log(err.data)
            })
    },[])

    return(
        <>
            <div className={"w-full h-8 flex justify-start items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>سفارشات من</p>
            </div>

            <div className={"w-full max-h-screen font-anjoman overflow-y-auto"}>
                <table className={"w-full mx-auto table-fixed text-center"}>
                    <thead className={"mb-5"}>
                    <tr className={"border-b-2"}>
                        <th className={"w-1/2 md:w-1/4 pb-2"}>شماره سفارش</th>
                        <th className={"w-1/2 md:w-1/4 pb-2"}>وضعیت سفارش</th>
                        <th className={"hidden md:table-cell w-1/4 pb-2"}>توضیحات</th>
                        <th className={"hidden md:table-cell w-1/4 pb-2"}>درخواست پشتیبانی</th>
                    </tr>
                    </thead>

                    <tbody>

                    {orderList.map(item => {
                        return(
                            <tr className={`${!a ? 'bg-gray-200' : 'bg-transparent'}`}>
                                <td className={"py-2"}>{item.orderId}</td>
                                <td className={"py-2"}>{item.status}</td>
                                <td className={"hidden md:table-cell  py-2"}>{item.description}</td>
                                <td className={"hidden md:table-cell py-2"}>
                                    <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                                </td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
                {orderList.length == 0 && <p className={"w-full text-2xl text-red-500 text-center mt-2"}>شما سفارش ثبت شده ای ندارید</p>}
            </div>
        </>
    )
}

export default UserOrders