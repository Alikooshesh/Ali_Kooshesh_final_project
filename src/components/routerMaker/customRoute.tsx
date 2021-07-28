import {Route} from "react-router-dom";
import {Redirect} from "react-router";
import React from "react";
import {Iroute} from "../../interfaces/routesInterface";

function CustomRoute(props:Iroute) {
        const isUserLogedIn:boolean = true
        const isAdminLogedIn:boolean = true

        if(props.adminLoginReq){
            if(isAdminLogedIn){
                return <Route path={props.path} exact={props.exact} render={routingProps => <props.Component {...routingProps}/>}/>
            }else{
                return <Redirect to={"/"}/>
            }
        }else if(props.userLoginReq){
            if(isUserLogedIn){
                return <Route path={props.path} exact={props.exact} render={routingProps => <props.Component {...routingProps}/>}/>
            }else{
                return <Redirect to={"/"}/>
            }
        }else {
            return <Route path={props.path} exact={props.exact} render={routingProps => <props.Component {...routingProps}/>}/>
        }
}

export default CustomRoute