import React from "react";
import {FaShippingFast} from "react-icons/all";

function Footer() {
    return(
        <footer className={"hidden md:block w-full mt-7 h-auto px-5 lg:px-36 pt-2 pb-7 font-anjoman bg-gray-100 "}>
            <div dir={"ltr"} className={"w-full flex items-end justify-center md:justify-end cursor-pointer"}>
                <p className={"text-5xl md:text-5xl font-bold text-green-500"}>PC</p>
                <p className={"text-2xl md:text-3xl font-normal text-gray-800 ml-1"}>Market</p>
            </div>
            <div className={"mt-2 flex flex-col md:flex-row justify-center md:justify-start"}>
                <span className={"md:border-l-2 border-gray-400 md:pl-2 md:ml-2"}>تلفن پشتیبانی : 07100000000</span>
                <span className={"hidden md:block"}>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
            </div>

            <div className={"mt-3 font-anjoman"}>
                <p className={"text-sm"}>آدرس ما :</p>
                <p>شیراز - زندیه - خیابان سوم - کوچه هفتم - پلاک 6</p>
            </div>

            <div className={"mt-5 hidden md:flex"}>
                <div className={"w-3/12 flex flex-col"}>
                    <FaShippingFast className={"text-8xl text-green-600 mx-auto"}/>
                    <span className={"mx-auto text-gray-400"}>ارسال به سراسر کشور</span>
                </div>

                <div className={"w-3/12 flex flex-col"}>
                    <FaShippingFast className={"text-8xl text-green-600 mx-auto"}/>
                    <span className={"mx-auto text-gray-400"}>ارسال به سراسر کشور</span>
                </div>

                <div className={"w-3/12 flex flex-col"}>
                    <FaShippingFast className={"text-8xl text-green-600 mx-auto"}/>
                    <span className={"mx-auto text-gray-400"}>ارسال به سراسر کشور</span>
                </div>

                <div className={"w-3/12 flex flex-col"}>
                    <FaShippingFast className={"text-8xl text-green-600 mx-auto"}/>
                    <span className={"mx-auto text-gray-400"}>ارسال به سراسر کشور</span>
                </div>
            </div>


        </footer>
    )
}

export default Footer