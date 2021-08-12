import {Iroute} from "../interfaces/routesInterface";
import MarketIndex from "../components/market/marketIndex";
import LoginPage from "../pages/loginPage/loginPage";

export const RtopLevelRoutes:Iroute[] =[
    {path:'/login', exact:true, Component:LoginPage, userLoginReq:false, adminLoginReq:false},
    {path:'/', exact:false, Component:MarketIndex, userLoginReq:false, adminLoginReq:false}
]