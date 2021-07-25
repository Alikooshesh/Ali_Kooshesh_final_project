import {FaKeyboard} from "react-icons/fa";

function CategoryCard() {
    return(
        <div className={"w-full hidden md:flex flex-col justify-center items-center cursor-pointer"}>
            <FaKeyboard className={"text-8xl"}/>
            <p className={"text-xl"}>صفحه کلید</p>
        </div>
    )
}

export default CategoryCard