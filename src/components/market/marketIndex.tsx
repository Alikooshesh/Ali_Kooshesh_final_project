import Header from "./stableParts/header/header";
import {useState} from "react";
import HomePageMain from "./homePageMain/homePageMain";
import Footer from "./stableParts/footer/footer";
import OffCanvas from "./stableParts/offCanvas/offCanvas";

function MarketIndex() {

    const [mobileSideBarShow, setMobileSideBarShow] = useState(false);

    return(
        <>
            <Header setOffCanvShow={setMobileSideBarShow}/>
            <main>
                <HomePageMain/>
            </main>
            <Footer/>

            <OffCanvas show={mobileSideBarShow} setShow={setMobileSideBarShow}/>
        </>
    )
}

export default MarketIndex