import CustomRoute from "../../routerMaker/customRoute";
import {Switch} from "react-router-dom";
import React from "react";
import {RuserDashboardRoutes} from "../../../routes/userDashboardRoutes";
import { Link } from 'react-router-dom';

function UserDashboard() {

    return(
        <div className={"w-full px-5 lg:px-36 pt-2 mt-3 flex flex-col md:flex-row"}>
            <div className={"w-full md:w-3/12 p-3 rounded-lg bg-gray-100"}>
                <div className={"w-full flex items-center font-anjoman border-b-2 pb-2"}>
                    <div className={"block md:hidden xl:block w-16 h-16 p-1 bg-gray-300 rounded-full"}>
                        <img className={"w-full h-full rounded-full"} src={"https://icon-library.com/images/white-profile-icon/white-profile-icon-24.jpg"}/>
                    </div>
                    <div className={"w-1/2 mr-2"}>
                        <p className={"text-gray-600"}>رضا سرمست</p>
                        <p className={"text-xs text-gray-400"}>09305634582</p>
                    </div>
                    <Link to={"/dashboard/account"}>
                        <button className={"w-auto text-left text-green-600"}>ویرایش اطلاعات</button>
                    </Link>
                </div>

                <div className={"font-anjoman py-1 border-b-2"}>
                    <p className={"text-center"}>کیف پول : <span>0 ریال</span></p>
                    <button className={"w-full p-2 text-right text-lg text-gray-500 hover:text-green-500"}>شارژ کیف پول</button>
                    <button className={"w-full p-2 text-right text-lg text-gray-500 hover:text-green-500"}>اطلاعات پرداخت های من</button>
                </div>

                <div className={"font-anjoman"}>
                    <Link to={"/dashboard/orders"}>
                        <button className={"w-full p-2 text-right text-lg text-gray-500 hover:text-green-500"}>سفارشات من</button>
                    </Link>

                    <Link to={"/dashboard/address"}>
                        <button className={"w-full p-2 text-right text-lg text-gray-500 hover:text-green-500"}>نشانی های من</button>
                    </Link>

                    <Link to={"/dashboard/account/"}>
                        <button className={"w-full p-2 text-right text-lg text-gray-500 hover:text-green-500"}>اطلاعات حساب</button>
                    </Link>
                </div>
            </div>
            <div className={"w-full md:w-9/12 flex flex-col mt-2 md:mt-0 md:mr-2 p-3 rounded-lg bg-gray-100"}>
                <Switch>
                    {RuserDashboardRoutes.map((item , index) => {
                        return <CustomRoute key={`${item.path} + ${index}`} path={item.path} exact={item.exact} Component={item.Component} adminLoginReq={item.adminLoginReq} userLoginReq={item.userLoginReq}/>
                    })}
                </Switch>
            </div>
        </div>
    )
}

export default UserDashboard