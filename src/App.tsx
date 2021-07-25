import React, {useEffect, useRef} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import HomePageMain from "./components/market/homePageMain/homePageMain";
import Header from "./components/market/stableParts/header/header";


function App() {

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])

    return (
    <div className={""}>
        <Header></Header>
        <HomePageMain></HomePageMain>
    </div>
  );
}

export default App;
