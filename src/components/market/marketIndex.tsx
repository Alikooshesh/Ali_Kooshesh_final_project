import Header from "./stableParts/header/header";
import React, {createContext, useEffect, useState} from "react";
import Footer from "./stableParts/footer/footer";
import OffCanvas from "./stableParts/offCanvas/offCanvas";
import CustomRoute from "../routerMaker/customRoute";
import {Switch} from "react-router-dom";
import {RmarketRoutes} from "../../routes/marketRoutes";
import axios from "axios";

export const CategoryListContext = createContext<any>([])
function MarketIndex() {

    const [mobileSideBarShow, setMobileSideBarShow] = useState(false);

    const [categoryList , setCategoryList] = useState<any>([])

    useEffect(()=>{
        axios.get('https://602bf8bf30ba7200172227a8.mockapi.io/category')
            .then(data => {
                setCategoryList(data.data)
                console.log('axios category all')
            })
            .catch(err => console.log(err))
    },[])

    return(
        <>
            <CategoryListContext.Provider value={categoryList}>
                <Header setOffCanvShow={setMobileSideBarShow}/>
                <main>
                    <Switch>
                        {RmarketRoutes.map((item , index) => {
                            return <CustomRoute key={`${item.path} + ${index}`} path={item.path} exact={item.exact} Component={item.Component} adminLoginReq={item.adminLoginReq} userLoginReq={item.userLoginReq}/>
                        })}
                    </Switch>
                </main>
                <Footer/>

                <OffCanvas show={mobileSideBarShow} setShow={setMobileSideBarShow}/>
            </CategoryListContext.Provider>
        </>
    )
}

export default MarketIndex