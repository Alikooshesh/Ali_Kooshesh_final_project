import {Iroute} from "../interfaces/routesInterface";
import MarketIndex from "../components/market/marketIndex";

export const RtopLevelRoutes:Iroute[] =[
    {path:'/', exact:true, Component:MarketIndex, userLoginReq:false, adminLoginReq:false}
]