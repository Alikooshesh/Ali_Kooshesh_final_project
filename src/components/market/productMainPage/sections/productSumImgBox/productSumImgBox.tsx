import {FaChevronRight , FaChevronLeft} from "react-icons/fa";

function ProductSumImgBox() {
    return(
        <div className={"w-full"}>
            <div className={"w-full flex justify-between items-center"}>
                <FaChevronRight className={"text-green-500 text-2xl cursor-pointer"}/>
                <div className={"w-8/12 bg-gray-100 rounded-lg"}>
                    <img className={"w-full h-full"} src={"https://www.gainward.com/main/product/vga/pro/p01092/p01092_pic2_18835f745071e06e1.png"} loading={"lazy"}/>
                </div>
                <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"}/>
            </div>

            <div className={"w-full flex justify-between items-center mt-3"}>
                <div className={"w-3/12 bg-gray-100 rounded-lg cursor-pointer border-3 border-green-500 rounded-md"}>
                    <img className={"w-full h-full"} src={"https://www.gainward.com/main/product/vga/pro/p01092/p01092_pic2_18835f745071e06e1.png"} loading={"lazy"}/>
                </div>

                <div className={"w-3/12 bg-gray-100 rounded-lg cursor-pointer border-3 border-gray-300 rounded-md hover:border-green-500"}>
                    <img className={"w-full h-full"} src={"https://www.gainward.com/main/product/vga/pro/p01092/p01092_pic2_18835f745071e06e1.png"} loading={"lazy"}/>
                </div>

                <div className={"w-3/12 bg-gray-100 rounded-lg cursor-pointer border-3 border-gray-300 rounded-md hover:border-green-500"}>
                    <img className={"w-full h-full"} src={"https://www.gainward.com/main/product/vga/pro/p01092/p01092_pic2_18835f745071e06e1.png"} loading={"lazy"}/>
                </div>

            </div>
        </div>
    )
}

export default ProductSumImgBox