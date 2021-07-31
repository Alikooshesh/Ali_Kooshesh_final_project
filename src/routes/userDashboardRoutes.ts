import {Iroute} from "../interfaces/routesInterface";
import UserOrders from "../components/market/userDashboard/userOrders/userOrders";
import UserAddress from "../components/market/userDashboard/userAddress/userAddress";
import UserAccount from "../components/market/userDashboard/userAccount/userAccount";

export const RuserDashboardRoutes:Iroute[] =[
    {path:'/dashboard/', exact:true, Component:UserOrders, userLoginReq:true, adminLoginReq:false},
    {path:'/dashboard/orders', exact:true, Component:UserOrders, userLoginReq:true, adminLoginReq:false},
    {path:'/dashboard/address', exact:false, Component:UserAddress, userLoginReq:true, adminLoginReq:false},
    {path:'/dashboard/account', exact:false, Component:UserAccount, userLoginReq:true, adminLoginReq:false},
]