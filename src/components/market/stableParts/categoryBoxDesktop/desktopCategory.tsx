import { FaAngular } from "react-icons/fa";
const icon = '<FaAngular/>'

function DesktopCategory(){
    return(
        <div className={"w-full bg-gray-100 p-3 flex flex-col space-y-3 rounded-lg rounded-t-none"}>
            <button className={"w-full p-2 flex justify-start items-center hover:text-green-600 hover:bg-gray-200"}>
                <div><FaAngular/></div>
                <div className={"font-anjoman mr-2"}>کارت گرافیک ها</div>
            </button>
        </div>
    )
}

export default DesktopCategory