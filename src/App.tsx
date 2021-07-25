import React, {useEffect, useRef, useState} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import HomePageMain from "./components/market/homePageMain/homePageMain";
import Header from "./components/market/stableParts/header/header";
import OffCanvas from "./components/market/stableParts/offCanvas/offCanvas";


function App() {

    const [offCanShow, setOffCanShow] = useState(false);

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])

    return (
    <div className={""}>
        <Header setOffCanvShow={setOffCanShow}></Header>
        <HomePageMain></HomePageMain>
        <OffCanvas show={offCanShow} setShow={setOffCanShow}/>
    </div>
  );
}

export default App;
