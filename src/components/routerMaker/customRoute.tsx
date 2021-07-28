import {Route} from "react-router-dom";
import {Redirect} from "react-router/ts4.0";
import React from "react";

function CustomRoute(props:{adminLoginReq : boolean , userLoginReq:boolean , path:string , exact:boolean , Component:any}) {
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