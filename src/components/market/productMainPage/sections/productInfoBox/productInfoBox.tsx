function ProductInfoBox() {
    return(
        <div>
            <table className={"w-full"}>
                <tr className={"w-full flex flex-col md:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                    <td className={"md:w-2/12 3xl:w-1/12 text-gray-400 text-top"}>سازنده</td>
                    <td className={"md:w-10/12 3xl:w-11/12 text-gray-700 text-lg"}>MSI</td>
                </tr>

                <tr className={"w-full flex flex-col md:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                    <td className={"md:w-2/12 3xl:w-1/12 text-gray-400 text-top"}>وزن</td>
                    <td className={"md:w-10/12 3xl:w-11/12 text-gray-700 text-lg"}>957 گرم</td>
                </tr>

                <tr className={"w-full flex flex-col md:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                    <td className={"md:w-2/12 3xl:w-1/12 text-gray-400 text-top"}>تعداد فن</td>
                    <td className={"md:w-10/12 3xl:w-11/12 text-gray-700 text-lg"}>2 عدد</td>
                </tr>

                <tr className={"w-full flex flex-col md:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                    <td className={"md:w-2/12 3xl:w-1/12 text-gray-400 text-top"}>کلاس پردازنده</td>
                    <td className={"md:w-10/12 3xl:w-11/12 text-gray-700 text-lg"}>گیمینگ</td>
                </tr>

                <tr className={"w-full flex flex-col md:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                    <td className={"md:w-2/12 3xl:w-1/12 text-gray-400 text-top"}>مدل پردازنده</td>
                    <td className={"md:w-10/12 3xl:w-11/12 text-gray-700 text-lg"}>RTX 2060</td>
                </tr>

                <tr className={"w-full flex flex-col md:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                    <td className={"md:w-2/12 3xl:w-1/12 text-gray-400 text-top"}>سازنده پردازنده گرافیکی</td>
                    <td className={"md:w-10/12 3xl:w-11/12 text-gray-700 text-lg"}>Nvidia</td>
                </tr>
            </table>
        </div>
    )
}

export default ProductInfoBox