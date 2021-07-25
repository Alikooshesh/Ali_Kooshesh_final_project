import {FaDotCircle , FaKeyboard} from "react-icons/fa";
import CategoryCard from "./categoryCard/categoryCard";

function CategoryBox(props:{boxName:string}) {
    return(
        <div className={"p-5 bg-gray-100 rounded-lg shadow-md font-anjoman"}>
            <div className={"w-2/12 flex items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>{props.boxName}</p>
            </div>

            <div className={"flex justify-around overflow-hidden text-green-700"}>
                <div className={"w-3/12 border rounded-md border-transparent hover:border-green-700"}><CategoryCard/></div>
                <div className={"w-3/12 border rounded-md border-transparent hover:border-green-700"}><CategoryCard/></div>
                <div className={"w-3/12 border rounded-md border-transparent hover:border-green-700"}><CategoryCard/></div>
                <div className={"w-3/12 border rounded-md border-transparent hover:border-green-700"}><CategoryCard/></div>
                <div className={"w-3/12 border rounded-md border-transparent hover:border-green-700"}><CategoryCard/></div>
            </div>
        </div>
    )
}

export default CategoryBox