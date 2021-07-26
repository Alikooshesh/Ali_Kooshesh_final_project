import {useEffect, useRef} from "react";
import {FaTimesCircle} from "react-icons/all";

function OffCanvas(props:{show:boolean , setShow:Function}) {

    const handleClose = () => props.setShow(false)

    function navClick() {
        console.log("nav Clicked")
        handleClose()
    }

    const offCanv = useRef<HTMLDivElement>(null)

    useEffect(()=> {
        if (offCanv.current){
            props.show ? offCanv.current.style.display = "block" : offCanv.current.style.display = "none"
        }
    }, [props.show])

    return(
        <nav>
            <div ref={offCanv} className={"w-9/12 h-full fixed z-50 top-0 right-0 bg-gray-200 overflow-x-hidden pt-6 px-4"}>
                <div className={"mb-4 flex items-center justify-between"} data-aos="fade-left">
                    <p className={"font-anjoman text-xl text-gray-800"}>دسته بندی کالا ها</p>
                    <FaTimesCircle className={"text-2xl text-black"} onClick={()=> props.setShow(false)}/>
                </div>

                <div className={"flex flex-col justify-start items-start pr-3 font-anjoman text-md text-gray-700 text-right"}>
                    <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                    <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                    <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                    <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                    <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                </div>
            </div>
        </nav>
    )
}

export default OffCanvas