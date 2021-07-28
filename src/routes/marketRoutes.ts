import {Iroute} from "../interfaces/routesInterface";
import HomePageMain from "../components/market/homePageMain/homePageMain";
import CategoryPageMain from "../components/market/categoryPageMain/categoryPageMain";
import ProductMainPage from "../components/market/productMainPage/productMainPage";

export const RmarketRoutes:Iroute[] =[
    {path:'/', exact:true, Component:HomePageMain, userLoginReq:false, adminLoginReq:false},
    {path:'/category/', exact:false, Component:CategoryPageMain, userLoginReq:false, adminLoginReq:false},
    {path:'/product/', exact:false, Component:ProductMainPage, userLoginReq:false, adminLoginReq:false},
]