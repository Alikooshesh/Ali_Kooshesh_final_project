import {useContext, useEffect, useRef} from "react";
import {FaTimesCircle} from "react-icons/all";
import {CategoryListContext} from "../../marketIndex";
import {Link} from 'react-router-dom'

function OffCanvas(props:{show:boolean , setShow:Function}) {

    const handleClose = () => props.setShow(false)

    function navClick(categoryID:string) {
        console.log("nav Clicked" + categoryID)
        handleClose()
    }

    const offCanv = useRef<HTMLDivElement>(null)

    useEffect(()=> {
        if (offCanv.current){
            props.show ? offCanv.current.style.display = "block" : offCanv.current.style.display = "none"
        }
    }, [props.show])

    const categoryListContext:any[] = useContext(CategoryListContext)

    return(
        <nav>
            <div ref={offCanv} className={"w-9/12 h-full fixed z-50 top-0 right-0 bg-gray-200 overflow-x-hidden pt-6 px-4"}>
                <div className={"mb-4 flex items-center justify-between"} data-aos="fade-left">
                    <p className={"font-anjoman text-xl text-gray-800"}>دسته بندی کالا ها</p>
                    <FaTimesCircle className={"text-2xl text-black"} onClick={()=> props.setShow(false)}/>
                </div>

                <div className={"flex flex-col justify-start items-start pr-3 font-anjoman text-md text-gray-700 text-right"}>
                    {categoryListContext && categoryListContext.map(item =>{
                        return(
                            <Link to={`/category/${item.categoryID}`} key={`${item.categoryID}Mobile`}>
                                <button onClick={() => navClick(item.categoryID)} className={"w-full p-2 flex justify-start items-center hover:text-green-600 hover:bg-gray-200"}>
                                    <div className={"w-1/12"}>
                                        <img className={"w-full h-full bg-transparent"} src={item.categoryIcon} alt={`${item.name} Icon`}/>
                                    </div>
                                    <div className={"font-anjoman mr-2"}>{item.categoryName}</div>
                                </button>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default OffCanvas