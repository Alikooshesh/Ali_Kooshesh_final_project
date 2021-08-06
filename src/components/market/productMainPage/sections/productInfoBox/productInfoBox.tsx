function ProductInfoBox(props : {property : {propertyName : string , propertyInfo : string}[] | null}) {
    return(
        <div>
            <table className={"w-full"}>
                {props.property && props.property.map(item => {
                    return(
                        <tr key={`${item.propertyName} ${item.propertyInfo} ${Math.random()}`} className={"w-full flex flex-col md:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                            <td className={"md:w-2/12 3xl:w-1/12 text-gray-400 text-top"}>{item.propertyName}</td>
                            <td className={"md:w-10/12 3xl:w-11/12 text-gray-700 text-lg pr-5"}>{item.propertyInfo}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ProductInfoBox