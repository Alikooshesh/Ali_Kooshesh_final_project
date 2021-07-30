import {FaDotCircle} from "react-icons/fa";

const a = true

function UserOrders() {
    return(
        <>
            <div className={"w-full h-8 flex justify-start items-center mb-3"}>
                <p className={"text-green-500 text-lg ml-2"}><FaDotCircle/></p>
                <p className={"text-gray-900 font-anjoman font-light"}>سفارشات من</p>
            </div>

            <div className={"w-full max-h-screen font-anjoman overflow-y-auto"}>
                <table className={"w-full mx-auto table-fixed text-center"}>
                    <thead className={"mb-5"}>
                    <tr className={"border-b-2"}>
                        <th className={"w-1/2 md:w-1/4 pb-2"}>شماره سفارش</th>
                        <th className={"w-1/2 md:w-1/4 pb-2"}>وضعیت سفارش</th>
                        <th className={"hidden md:table-cell w-1/4 pb-2"}>توضیحات</th>
                        <th className={"hidden md:table-cell w-1/4 pb-2"}>درخواست پشتیبانی</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr className={`${!a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1583</td>
                        <td className={"py-2"}>در حال آماده سازی</td>
                        <td className={"hidden md:table-cell  py-2"}>با تیپاکس ارسال شود</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1520</td>
                        <td className={"py-2"}>ارسال شده</td>
                        <td className={"hidden md:table-cell  py-2"}>کد رهگیری : 52369357523693</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${!a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1583</td>
                        <td className={"py-2"}>در حال آماده سازی</td>
                        <td className={"hidden md:table-cell  py-2"}>با تیپاکس ارسال شود</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1520</td>
                        <td className={"py-2"}>ارسال شده</td>
                        <td className={"hidden md:table-cell  py-2"}>کد رهگیری : 52369357523693</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${!a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1583</td>
                        <td className={"py-2"}>در حال آماده سازی</td>
                        <td className={"hidden md:table-cell  py-2"}>با تیپاکس ارسال شود</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1520</td>
                        <td className={"py-2"}>ارسال شده</td>
                        <td className={"hidden md:table-cell  py-2"}>کد رهگیری : 52369357523693</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${!a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1583</td>
                        <td className={"py-2"}>در حال آماده سازی</td>
                        <td className={"hidden md:table-cell  py-2"}>با تیپاکس ارسال شود</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1520</td>
                        <td className={"py-2"}>ارسال شده</td>
                        <td className={"hidden md:table-cell  py-2"}>کد رهگیری : 52369357523693</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    <tr className={`${!a ? 'bg-gray-200' : 'bg-transparent'}`}>
                        <td className={"py-2"}>1583</td>
                        <td className={"py-2"}>در حال آماده سازی</td>
                        <td className={"hidden md:table-cell  py-2"}>با تیپاکس ارسال شود</td>
                        <td className={"hidden md:table-cell py-2"}>
                            <button className={"p-2 bg-transparent rounded-lg border-transparent bg-green-600 text-white"}>درخواست پشتیبانی</button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserOrders