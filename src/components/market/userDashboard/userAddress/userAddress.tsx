import {FaDotCircle} from "react-icons/fa";
import Select from "react-select";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";

function UserAddress() {

    const userAuthRedux = useSelector((state:any) => state.userAuth)

    const [userAddress , setUserAddress] = useState<string[]>([])

    useEffect(()=>{
        axios.get(`https://pcmarket-server-api.herokuapp.com/user/address/${userAuthRedux.tokenId}`)
            .then(res => {
                setUserAddress(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    },[])

    return(
        <>
            <div className={"w-full h-8 flex justify-start items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>نشانی های من</p>
            </div>

            <div className={"w-full max-h-screen font-anjoman overflow-y-auto"}>
                <p className={"text-xl text-gray-400"}>افزودن نشانی جدید</p>

                <div className={"flex flex-col md:block w-full md:w-2/3 py-2"}>
                    <div className={"flex flex-col md:flex-row"}>
                        <Select className={"w-full md:w-1/2"} defaultValue={{value: "null", label: 'استان'}} isSearchable={true} options={[{ value: 'chocolate', label: 'Chocolate' },
                            { value: 'strawberry', label: 'Strawberry' }]}/>

                        <Select className={"w-full md:w-1/2 mt-2 md:mr-2 md:mt-0"} defaultValue={{value: "null", label: 'شهرستان'}} isSearchable={true} options={[{ value: 'chocolate', label: 'Chocolate' },
                            { value: 'strawberry', label: 'Strawberry' }]}/>
                    </div>
                    <div className={"flex flex-col md:flex-row items-center justify-between mt-3"}>
                        <div className={"w-full md:w-1/2 flex items-center justify-between"}>
                            <label>موبایل</label>
                            <input className={"w-10/12 mr-1 outline-none p-1 rounded-md border-2"} dir={"ltr"}/>
                        </div>

                        <div className={"w-full md:w-1/2 mt-2 md:mt-0 flex items-center justify-between"}>
                            <label className={"md:mr-5"}>کد پستی</label>
                            <input className={"w-9/12 mr-1 outline-none p-1 rounded-md border-2"} dir={"ltr"}/>
                        </div>
                    </div>
                    <div className={"flex md:justify-between items-start mt-3"}>
                        <label>آدرس کامل</label>
                        <textarea className={"w-10/12 h-64 mr-1 md:mr-0 outline-none p-1 rounded-md border-2"}/>
                    </div>
                    <button className={"w-full md:w-1/3 p-3 mt-2 bg-green-600 text-white rounded-lg"}>ثبت نشانی جدید</button>
                </div>

                <div className={"border-t-2 font-anjoman"}>
                    {userAddress.length == 0 && "شما هیچ آدرس ثبت شده ای ندارید"}

                    {userAddress.map((item , index) => {
                        return(
                            <div className={"w-full p-2 border-b-2 text-gray-700"}>
                                <p className={"text-gray-400"}>{`آدرس ${index+1}`}</p>
                                <p>{item}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default UserAddress