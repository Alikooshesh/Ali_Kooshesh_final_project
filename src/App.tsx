import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import CustomRoute from "./components/routerMaker/customRoute";
import {RtopLevelRoutes} from "./routes/topLevelRoutes";


function App() {

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])

    return (
    <Router>
        <Switch>
            {RtopLevelRoutes.map((item , index) => {
                return <CustomRoute key={`${item.path} + ${index}`} path={item.path} exact={item.exact} Component={item.Component} adminLoginReq={item.adminLoginReq} userLoginReq={item.userLoginReq}/>
            })}
        </Switch>
    </Router>
  );
}

export default App;
