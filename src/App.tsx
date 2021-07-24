import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';


function App() {

    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])
  return (
    <>
      <p className={"text-red-800 text-9xl"} data-aos={"fade-up"}>test</p>
    </>
  );
}

export default App;
