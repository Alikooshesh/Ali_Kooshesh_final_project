import React, {useEffect, useRef} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Header from "./components/stableParts/header/header";


function App() {

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])

    const root:any = useRef(null)
    const categoryDiv:any = useRef(null)

    function bodyScroll() {
        if (root.scrollTop() > 200){
            console.log("scrolled down")
            categoryDiv.display = "none"
        }else {
            console.log("scrolled top")
            categoryDiv.display = "block"
        }
    }


    return (
    <div className={""} ref={root} onScroll={bodyScroll}>
      <Header></Header>
    </div>
  );
}

export default App;
