import ProductCard from "./productCard/productCard";
import {FaDotCircle} from 'react-icons/fa'

function ProductBox(props:{boxName:string}) {
    return(
        <div className={"p-5 bg-gray-100 rounded-lg shadow-md "}>
            <div className={"w-full flex justify-start items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>{props.boxName}</p>
            </div>
            <div className={"w-full flex justify-around px-3 overflow-x-scroll"}>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>
                <div className={"w-64 ml-3"}><ProductCard/></div>

            </div>
        </div>
    )
}

export default ProductBox