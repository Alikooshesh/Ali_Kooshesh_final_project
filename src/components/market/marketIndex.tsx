import Header from "./stableParts/header/header";
import React, {createContext, useEffect, useState} from "react";
import Footer from "./stableParts/footer/footer";
import OffCanvas from "./stableParts/offCanvas/offCanvas";
import CustomRoute from "../routerMaker/customRoute";
import {Switch, useHistory, useLocation} from "react-router-dom";
import {RmarketRoutes} from "../../routes/marketRoutes";
import axios from "axios";
import CartOnFooter from "./stableParts/cart/cartOnFooter/cartOnFooter";
import {useDispatch, useSelector} from "react-redux";
import {IcartItem} from "../../interfaces/redux";
import {syncData} from "../../redux/reducers/cartReducer/cartReducer";

export const CategoryListContext = createContext<any>([])

function MarketIndex(props:any) {

    const history = useLocation()
    const dispatch = useDispatch()

    const cartItemsRedux: IcartItem[] = useSelector((state: any) => state.cart.cartList)

    const [mobileSideBarShow, setMobileSideBarShow] = useState<boolean>(false);
    const [categoryList, setCategoryList] = useState<any>([])

    useEffect(() => {
        cartPriceChecker()

        axios.get('https://pcmarket-server-api.herokuapp.com/category')
            .then(data => {
                setCategoryList(data.data)
                console.log('axios category all')
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props.location.pathname])

    useEffect(() => cartPriceChecker(), [cartItemsRedux])

    function cartPriceChecker() {
        cartItemsRedux && cartItemsRedux.map((cartItem: IcartItem) => {
            axios.get(`https://pcmarket-server-api.herokuapp.com/product/${cartItem.productId}`)
                .then(productData => dispatch(syncData({
                    productId: cartItem.productId,
                    productName: productData.data.productName,
                    productTitleFA: productData.data.productTitleFA,
                    mainImg: productData.data.img[0],
                    price: productData.data.price,
                    offPercent: productData.data.offPercent
                })))
                .catch(err => console.log(err))
        })
    }

    return (
        <>
            {console.log(cartItemsRedux)}
            <CategoryListContext.Provider value={categoryList}>
                <Header setOffCanvShow={setMobileSideBarShow}/>
                <main className={"relative"}>
                    <Switch>
                        {RmarketRoutes.map((item, index) => {
                            return <CustomRoute key={`${item.path} + ${index}`} path={item.path} exact={item.exact}
                                                Component={item.Component} adminLoginReq={item.adminLoginReq}
                                                userLoginReq={item.userLoginReq}/>
                        })}
                    </Switch>

                    <div className={`${cartItemsRedux.length < 1 && 'hidden'} md:hidden sticky w-full bottom-0 bg-transparent px-0 pb-0 mt-9`}>
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