import {FaDotCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import axios from "axios";
import {login, logout} from "../../../../redux/reducers/userAuthReducer/userAuthReducer";

function UserAccount() {

    const userAuthRedux = useSelector((state:any) => state.userAuth)
    const dispatch = useDispatch()

    const [fullNameInput , setFullNameInput] = useState(userAuthRedux.fullName)
    const [sendAxiosInfo , setSendAxiosInfo] = useState<string|boolean>(false)

    function sendNewData() {
        if(fullNameInput.length>3){
            axios.post('https://pcmarket-server-api.herokuapp.com/user/fullName',{tokenId : userAuthRedux.tokenId , newFullName : fullNameInput})
                .then(res =>{
                    dispatch(login({userId : res.data.userId , fullName : res.data.fullName , phoneNumber : res.data.phone , tokenId : res.data.tokenId}))
                    setSendAxiosInfo("اطلاعات با موفقیت به روز شد")
                })
                .catch(err => {
                    dispatch(logout())
                    console.log(err.data)
                })
        }else {setSendAxiosInfo("نام و نام خانوادگی نمی تواند کمتر از 3 حرف باشد .")}
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
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"}
                                   value={fullNameInput} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFullNameInput(e.target.value)}/>
                        </div>

                        <div className={"w-full flex items-center justify-center md:mt-2"}>
                            <label className={"w-4/12 text-right"}>موبایل</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} value={userAuthRedux.phoneNumber} disabled={true}/>
                        </div>

                        {/*<div className={"w-full flex items-center justify-center mt-2"}>*/}
                        {/*    <label className={"w-4/12 text-right"}>ایمیل</label>*/}
                        {/*    <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} disabled={true}/>*/}
                        {/*</div>*/}
                    </div>
                    <button className={"mt-2 p-2 bg-green-600 rounded-lg text-white"} onClick={sendNewData}>ثبت اطلاعات</button>
                    <p className={`${!sendAxiosInfo && 'hidden'} text-2xl text-green-500`}>{sendAxiosInfo}</p>
                </div>

                <div className={"border-b-2 pb-3 mt-2"}>
                    <p className={"text-2xl text-red-500 text-center mb-3"}>سیستم رمز عبور پیامکی فعال می باشد</p>
                    <div className={"w-full flex flex-col items-center justify-start"}>
                        <div className={"w-full flex items-center justify-center"}>
                            <label className={"w-4/12 text-right"}>رمز عبور فعلی</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} type={"password"} disabled={true}/>
                        </div>

                        <div className={"w-full flex items-center justify-center mt-2"}>
                            <label className={"w-4/12 text-right"}>رمز عبور جدید</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} type={"password"} disabled={true}/>
                        </div>

                        <div className={"w-full flex items-center justify-center md:mt-2"}>
                            <label className={"w-4/12 text-right"}>تکرار رمز عبور جدید</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"} type={"password"} disabled={true}/>
                        </div>
                    </div>
                    <button className={"mt-2 p-2 bg-green-600 rounded-lg text-white"} disabled={true}>تغییر رمز عبور</button>
                </div>
            </div>
        </>
    )
}

export default UserAccount