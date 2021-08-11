import {Iroute} from "../interfaces/routesInterface";
import HomePageMain from "../components/market/homePageMain/homePageMain";
import CategoryPageMain from "../components/market/categoryPageMain/categoryPageMain";
import ProductMainPage from "../components/market/productMainPage/productMainPage";
import UserDashboard from "../components/market/userDashboard/userDashboard";
import CartPageMain from "../components/market/cartPageMain/cartPageMain";

export const RmarketRoutes:Iroute[] =[
    {path:'/', exact:true, Component:HomePageMain, userLoginReq:false, adminLoginReq:false},
    {path:'/dashboard/', exact:false, Component:UserDashboard, userLoginReq:true, adminLoginReq:false},
    {path:'/category/:categoryID', exact:false, Component:CategoryPageMain, userLoginReq:false, adminLoginReq:false},
    {path:'/product/:productID', exact:false, Component:ProductMainPage, userLoginReq:false, adminLoginReq:false},
    {path:'/cart/', exact:false, Component:CartPageMain, userLoginReq:false, adminLoginReq:false}
]