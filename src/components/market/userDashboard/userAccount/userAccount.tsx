import {FaDotCircle} from "react-icons/fa";

function UserAccount() {
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
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"}/>
                        </div>

                        <div className={"w-full flex items-center justify-center md:mt-2"}>
                            <label className={"w-4/12 text-right"}>موبایل</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"}/>
                        </div>

                        <div className={"w-full flex items-center justify-center mt-2"}>
                            <label className={"w-4/12 text-right"}>ایمیل</label>
                            <input className={"w-7/12 outline-none p-1 border-2 mr-1"} dir={"ltr"}/>
                        </div>
                    </div>
                    <button className={"mt-2 p-2 bg-green-600 rounded-lg text-white"}>ثبت اطلاعات</button>
                </div>

                <div className={"border-b-2 pb-3 mt-2"}>
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