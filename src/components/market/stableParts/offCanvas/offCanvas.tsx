import {Offcanvas} from "react-bootstrap";
import {useState} from "react";


function OffCanvas(props:{show:boolean , setShow:Function}) {

    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);

    function navClick() {
        console.log("nav Clicked")
        handleClose()
    }

    return(
        <nav>
            <Offcanvas show={props.show} onHide={handleClose} placement={'end'} scroll={true}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>دسته بندی کالا ها</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={"flex flex-col justify-start items-start pr-3 font-anjoman text-md text-gray-700 text-right"}>
                        <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                        <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                        <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                        <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                        <button className={"mb-3 border-1 border-transparent active:text-green-500 focus:text-green-500"} onClick={navClick}>کارت گرافیک ها</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </nav>
    )
}

export default OffCanvas