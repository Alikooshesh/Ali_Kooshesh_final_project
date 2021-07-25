function ProductCard(props:{}) {
    return(
            <div className={"w-64 h-auto p-2 bg-gray-300 rounded cursor-pointer"}>
                <div className={"w-full bg-gray-100 rounded-lg"}>
                    <img className={"w-full h-full"} src={"https://www.gainward.com/main/product/vga/pro/p01092/p01092_pic2_18835f745071e06e1.png"}/>
                </div>
                <p className={"w-full text-right text-black pt-3 text-lg"}>Nvidia RTX 3090</p>
                <p className={"w-full text-left text-green-600 font-anjoman text-2xl pt-2"}>5000000 تومان</p>
            </div>
    )
}

export default ProductCard