import {Offcanvas} from "react-bootstrap";
import FilterBox from "../filterBox";

function MobileFilterOffcanvas(props:{show:boolean , setShow:Function}) {


    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);

    return(
        <Offcanvas show={props.show} onHide={handleClose} placement={'end'} scroll={true}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>فیلتر های بیشتر</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className={"p-3"}>
                    <FilterBox/>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default MobileFilterOffcanvas