import {FaChevronRight , FaChevronLeft} from "react-icons/fa";
import {useState} from "react";

function ProductSumImgBox(props:{img:string[]|undefined}) {

    const [selectedImg , setSelectedImg] = useState<number>(0)

    return(
        <div className={"w-full"}>
            <div className={"w-full flex justify-between items-center"}>
                <button onClick={()=> selectedImg != 0 && setSelectedImg(selectedImg-1)}>
                    <FaChevronRight className={"text-green-500 text-2xl cursor-pointer"}/>
                </button>

                <div className={"w-8/12 bg-gray-100 rounded-lg"}>
                    <img className={"w-full h-full"} src={props.img && props.img[selectedImg]} loading={"lazy"}/>
                </div>

                <button onClick={()=> selectedImg != (props.img && props.img.length-1) && setSelectedImg(selectedImg+1)}>
                    <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"}/>
                </button>

            </div>

            <div className={"w-full flex justify-between items-center mt-3"}>
                {props.img && props.img.map((item:string , index) => {
                    if (index<3){
                        return (
                            <div className={`w-3/12 bg-gray-100 rounded-lg cursor-pointer border-3 rounded-md ${selectedImg == index &&'border-green-500'}`}
                            onClick={()=> setSelectedImg(index)}>
                                <img className={"w-full h-full"} src={`${props.img && props.img[index]}`} loading={"lazy"}/>
                            </div>
                        )
                    }else {
                        return(
                            <></>
                        )
                    }
                })}

            </div>
        </div>
    )
}

export default ProductSumImgBox