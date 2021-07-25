function FilterBox() {

    return(
        <div className={"w-full h-auto bg-transparent font-anjoman"}>
            <div className={"border-b-2"}>
                <p className={"text-xl"}>برند تولید کننده</p>
                <div className={"w-full px-3 py-2 text-lg"}>
                    <div className={"mb-1"}>
                        <input id={"brand-1"} type={"checkbox"} value={1}/>
                        <label htmlFor={"brand-1"} className={"mr-2 text-gray-500"}>Asus</label>
                    </div>
                    <div className={"mb-1"}>
                        <input id={"brand-1"} type={"checkbox"} value={1}/>
                        <label htmlFor={"brand-1"} className={"mr-2 text-gray-500"}>MSI</label>
                    </div>
                    <div className={"mb-1"}>
                        <input id={"brand-1"} type={"checkbox"} value={1}/>
                        <label htmlFor={"brand-1"} className={"mr-2 text-gray-500"}>AMD</label>
                    </div>
                    <div className={"mb-1"}>
                        <input id={"brand-1"} type={"checkbox"} value={1}/>
                        <label htmlFor={"brand-1"} className={"mr-2 text-gray-500"}>Nvidia</label>
                    </div>
                    <div className={"mb-1"}>
                        <input id={"brand-1"} type={"checkbox"} value={1}/>
                        <label htmlFor={"brand-1"} className={"mr-2 text-gray-500"}>Inja</label>
                    </div>
                    <div className={"mb-1"}>
                        <input id={"brand-1"} type={"checkbox"} value={1}/>
                        <label htmlFor={"brand-1"} className={"mr-2 text-gray-500"}>گیگابایت</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterBox