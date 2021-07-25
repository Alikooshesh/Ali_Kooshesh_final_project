import ProductCard from "./productCard/productCard";
import {FaDotCircle} from 'react-icons/fa'

function ProductBox() {
    return(
        <div className={"p-5 bg-gray-100 rounded-lg shadow-md overflow-x-scroll"}>
            <div className={"w-2/12 flex items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>فروش ویژه</p>
            </div>
            <div className={"flex justify-around"}>
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