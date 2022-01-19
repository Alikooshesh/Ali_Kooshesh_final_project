import {FaDotCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import axios from "axios";
import {login} from "../../../../redux/reducers/userAuthReducer/userAuthReducer";

function UserAccount() {

    const userAuthRedux = useSelector((state:any) => state.userAuth)

    const dispatch = useDispatch()

    const [fullName , setFullName] = useState<string>(userAuthRedux.fullName)

    function changeFullName() {
        axios.post('https://pcmarket-server-api.herokuapp.com/user/fullName',{tokenId : userAuthRedux.tokenId , newFullName : fullName})
            .then(res => {
                dispatch(login({fullName : res.data.fullName}))
            })
    }

    return(
        <>
            <div className={"w-full h-8 flex justify-start items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>اطلاعات حساب</p>
            </div>

            <div className={"w-full max-h-screen font-anjoman overflow-y-auto"}>
                <div className={"border-b-2 pb-3"}>
                    <div className={"w-full flex flex-col items-center justify-start"}>
                        <div className={"w-full flex items-center justify-center"}>
                            <label className={"w-4/12 text-right"}>نام و نام خانوادگی</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} value={fullName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}/>
                        </div>

                        <div className={"w-full flex items-center justify-center md:mt-2"}>
                            <label className={"w-4/12 text-right"}>موبایل</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1 disable"} dir={"ltr"} disabled={true} value={userAuthRedux.phoneNumber}/>
                        </div>

                        <div className={"hidden w-full flex items-center justify-center mt-2"}>
                            <label className={"w-4/12 text-right"}>ایمیل</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"}/>
                        </div>
                    </div>
                    <button className={"mt-2 p-2 bg-green-600 rounded-lg text-white"}>ثبت اطلاعات</button>
                </div>

                <div className={"hidden border-b-2 pb-3 mt-2"}>
                    <div className={"w-full flex flex-col items-center justify-start"}>
                        <div className={"w-full flex items-center justify-center"}>
                            <label className={"w-4/12 text-right"}>رمز عبور فعلی</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} type={"password"}/>
                        </div>

                        <div className={"w-full flex items-center justify-center mt-2"}>
                            <label className={"w-4/12 text-right"}>رمز عبور جدید</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} type={"password"}/>
                        </div>

                        <div className={"w-full flex items-center justify-center md:mt-2"}>
                            <label className={"w-4/12 text-right"}>تکرار رمز عبور جدید</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} type={"password"}/>
                        </div>
                    </div>
                    <button className={"mt-2 p-2 bg-green-600 rounded-lg text-white"}>تغییر رمز عبور</button>
                </div>
            </div>
        </>
    )
}

export default UserAccount