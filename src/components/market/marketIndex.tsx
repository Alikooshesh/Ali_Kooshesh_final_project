import Header from "./stableParts/header/header";
import React, {useState} from "react";
import Footer from "./stableParts/footer/footer";
import OffCanvas from "./stableParts/offCanvas/offCanvas";
import CustomRoute from "../routerMaker/customRoute";
import {Switch} from "react-router-dom";
import {RmarketRoutes} from "../../routes/marketRoutes";

function MarketIndex() {

    const [mobileSideBarShow, setMobileSideBarShow] = useState(false);

    return(
        <>
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
        </>
    )
}

export default MarketIndex