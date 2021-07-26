import React, {useEffect, useRef, useState} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import HomePageMain from "./components/market/homePageMain/homePageMain";
import Header from "./components/market/stableParts/header/header";
import OffCanvas from "./components/market/stableParts/offCanvas/offCanvas";
import CategoryPageMain from "./components/market/categoryPageMain/categoryPageMain";
import ProductMainPage from "./components/market/productMainPage/productMainPage";


function App() {

    const [offCanShow, setOffCanShow] = useState(false);

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])

    return (
    <div className={""}>
        <Header setOffCanvShow={setOffCanShow}/>
        <ProductMainPage/>
        <OffCanvas show={offCanShow} setShow={setOffCanShow}/>
    </div>
  );
}

export default App;
