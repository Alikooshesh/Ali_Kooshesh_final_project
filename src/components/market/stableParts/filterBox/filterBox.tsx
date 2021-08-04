import React, {createContext, FormEventHandler, useContext, useState} from "react";
import {CategoryDataContext} from "../../categoryPageMain/categoryPageMain";

function FilterBox() {

    const categoryData = useContext(CategoryDataContext)

    const [categoryFilters , setCategoryFilters] = useState<any>({})
    function radioBtnChangeHandle(e:{target:any}) {
        // console.log({propertyID , event})
        const name:any = e.target.name
        const value:string = e.target.value
        const newVal:any = categoryFilters
        newVal[name] = value
        setCategoryFilters({...newVal})
    }

    return(
        <div className={"w-full h-auto bg-transparent font-anjoman"}>
            {console.log(categoryFilters)}
            {categoryData.property && categoryData.property.map((item:{propertyID:string, propertyName:string, options:any[]})=> {
                return(
                    <div key={`${item.propertyID}`} className={"border-b-2"}>
                        <p className={"text-xl"}>{item.propertyName}</p>
                        <form className={"w-full px-3 py-2 text-lg"}>
                            {item.options.map((item:{propertyID:string, propertyOptionID:string, propertyOptionName:string}) => {
                                return(
                                    <div key={`item-option-${item.propertyOptionID}`} className={"mb-1"} onChange={radioBtnChangeHandle}>
                                        <input id={item.propertyOptionID} type={"radio"} name={item.propertyID} value={item.propertyOptionID}/>
                                        <label htmlFor={item.propertyOptionID} className={"mr-2 text-gray-500"}>{item.propertyOptionName}</label>
                                    </div>
                                )
                            })}

                        </form>
                    </div>
                )
            })}

        </div>
    )
}

export default FilterBox