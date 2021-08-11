import Header from "./stableParts/header/header";
import React, {createContext, useEffect, useState} from "react";
import Footer from "./stableParts/footer/footer";
import OffCanvas from "./stableParts/offCanvas/offCanvas";
import CustomRoute from "../routerMaker/customRoute";
import {Switch, useHistory, useLocation} from "react-router-dom";
import {RmarketRoutes} from "../../routes/marketRoutes";
import axios from "axios";
import CartOnFooter from "./stableParts/cart/cartOnFooter/cartOnFooter";

export const CategoryListContext = createContext<any>([])
function MarketIndex() {

    const history = useLocation()

    const [mobileSideBarShow, setMobileSideBarShow] = useState(false);

    const [categoryList , setCategoryList] = useState<any>([])

    useEffect(()=>{
        axios.get('https://pcmarket-server-api.herokuapp.com/category')
            .then(data => {
                setCategoryList(data.data)
                console.log('axios category all')
            })
            .catch(err => console.log(err))
    },[])

    useEffect(()=> {
        window.scrollTo(0,0)
    },[history])

    return(
        <>
            <CategoryListContext.Provider value={categoryList}>
                <Header setOffCanvShow={setMobileSideBarShow}/>
                <main className={"relative"}>
                    <Switch>
                        {RmarketRoutes.map((item , index) => {
                            return <CustomRoute key={`${item.path} + ${index}`} path={item.path} exact={item.exact} Component={item.Component} adminLoginReq={item.adminLoginReq} userLoginReq={item.userLoginReq}/>
                        })}
                    </Switch>

                    <div className={"md:hidden sticky w-full bottom-0 bg-transparent px-0 pb-0 mt-9"}>
                        <CartOnFooter/>
                    </div>
                </main>
                <Footer/>

                <OffCanvas show={mobileSideBarShow} setShow={setMobileSideBarShow}/>
            </CategoryListContext.Provider>
        </>
    )
}

export default MarketIndex