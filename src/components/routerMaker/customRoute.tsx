import {Route} from "react-router-dom";
import {Redirect} from "react-router";
import React from "react";
import {Iroute} from "../../interfaces/routesInterface";
import {useSelector} from "react-redux";

function CustomRoute(props:Iroute) {

    const userAuthRedux = useSelector((state:any) => state.userAuth)

        const isUserLogedIn:boolean = userAuthRedux.isLogin
        const isAdminLogedIn:boolean = true

        if(props.adminLoginReq){
            if(isAdminLogedIn){
                return <Route path={props.path} exact={props.exact} render={routingProps => <props.Component {...routingProps}/>}/>
            }else{
                return <Redirect to={"/login"}/>
            }
        }else if(props.userLoginReq){
            if(isUserLogedIn){
                return <Route path={props.path} exact={props.exact} render={routingProps => <props.Component {...routingProps}/>}/>
            }else{
                return <Redirect to={"/login"}/>
            }
        }else {
            return <Route path={props.path} exact={props.exact} render={routingProps => <props.Component {...routingProps}/>}/>
        }
}

export default CustomRoute