import ProductSumImgBox from "./sections/productSumImgBox/productSumImgBox";
import Select from 'react-select';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import ProductBox from "../stableParts/productsBox/productBox";
import ProductInfoBox from "./sections/productInfoBox/productInfoBox";
import ProductCommentBox from "./sections/productCommentBox/productCommentBox";

function ProductMainPage() {
    return(
        <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
            <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
            </div>

            <div className={"w-full mt-3 px-0 lg:px-28"}>
                <section className={"w-full p-3 flex flex-col md:flex-row border-1 border-transparent rounded-md bg-gray-100 shadow-md"}>
                    <div className={"w-full md:w-1/3 md:border-l-2 bg-transparent pl-3"}>
                        <ProductSumImgBox/>
                    </div>

                    <div className={"w-full md:w-2/3 md:flex bg-transparent"}>
                        <div className={"w-full md:w-1/2 bg-transparent pr-5 pt-5"}>
                            <p className={"font-anjoman text-lg text-gray-700"}>کارت گرافیک ام اس آی RTX 2060 GAMING 6G</p>
                            <p className={"font-serif font-light text-sm text-gray-400"}>MSI GeForce RTX 2060 GAMING 6G GDDR6 Graphics Card</p>
                            <div className={"mt-10 md:mt-20 first:mt-0"}>
                                <p className={"font-anjoman text-sm text-gray-500 mt-2"}>نسل پردازنده: Turing</p>
                                <p className={"font-anjoman text-sm text-gray-500 mt-2"}>حجم حافظه: 6 گیگابایت</p>
                                <p className={"font-anjoman text-sm text-gray-500 mt-2"}>نوع حافظه: GDDR6</p>
                                <p className={"font-anjoman text-sm text-gray-500 mt-2"}>حداکثر رزولوشن: 7680×4320 پیکسل</p>
                                <p className={"font-anjoman text-sm text-gray-500 mt-2"}>سرعت حافظه: 14 گیگابیت بر ثانیه</p>

                            </div>
                        </div>

                        <div className={"w-full md:w-1/2 items-end bg-transparent pr-5 pt-5 pl-5"}>
                            <div className={"mt-10"}>
                                <Select className={"font-anjoman"} defaultValue={{value: "null", label: 'انتخاب کنید'}} isSearchable={true} options={[{ value: 'chocolate', label: 'Chocolate' },
                                    { value: 'strawberry', label: 'Strawberry' }]}/>
                            </div>

                            <div className={"mt-10"}>
                                <Select className={"font-anjoman"} defaultValue={{value: "null", label: 'انتخاب کنید'}} isSearchable={true} options={[{ value: 'chocolate', label: 'Chocolate' },
                                    { value: 'strawberry', label: 'Strawberry' }]}/>
                            </div>

                            <div className={"flex items-center mt-5 md:mt-10"}>
                                <p className={"text-gray-500 text-sm font-anjoman ml-5"}>تعداد</p>
                                <FaChevronRight className={"text-green-500 text-2xl cursor-pointer ml-3"}/>
                                <input type={"number"} className={"w-16 h-16 text-xl font-bold pb-1 border-0 outline-none bg-transparent text-center text-green-700"} value={1}/>
                                <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"}/>
                            </div>

                            <p className={"mt-3 w-full text-left font-anjoman text-3xl text-green-700"}>50000000 تومان</p>

                            <button className={"w-full mt-20 h-16 border-1 border-transparent hover:border-green-700 rounded-lg bg-green-500 text-gray-100 text-2xl font-anjoman"}>افزودن به سبد خرید</button>

                        </div>
                    </div>
                </section>

                <section className={"mt-3"}><ProductBox boxName={"کالا های مشابه"}/></section>

                <section className={"w-full max-h-screen mt-3 md:flex relative overflow-x-hidden overflow-y-auto hide-scroll"}>
                    <div className={"w-full lg:w-8/12 2xl:w-9/12 rounded-lg border-1 border-transparent bg-transparent"}>
                        <div className={"flex sticky top-0 z-10 rounded-lg border-2 border-gray-300 font-anjoman text-gray-400 bg-gray-100"}>
                            <button className={"p-5 border-b-2 border-green-600 text-gray-500"}>مشخصات</button>
                            <a href={"#comments"}><button className={"p-5 border-b-2 border-transparent mr-3"}>دیدگاه کاربران</button></a>
                        </div>
                        <div className={"w-full font-anjoman pt-2 px-5 rounded-lg border-1 border-transparent bg-gray-100 mt-2"}><ProductInfoBox/></div>
                        <div id={"comments"} className={"w-full font-anjoman pt-2 px-5 rounded-lg border-1 border-transparent bg-gray-100 mt-2"}><ProductCommentBox/></div>
                    </div>

                    <div className={"h-96 sticky top-0 z-10 hidden lg:block w-4/12 2xl:w-3/12 rounded-lg border-2 border-gray-300 bg-gray-100 px-5 py-3 mr-2"}>
                        <div className={"w-3/5 bg-gray-100 rounded-lg mx-auto"}>
                            <img className={"w-full h-full"} src={"https://www.gainward.com/main/product/vga/pro/p01092/p01092_pic2_18835f745071e06e1.png"} loading={"lazy"}/>
                        </div>
                        <p className={"font-anjoman text-gray-700 text-center"}>کارت گرافیک ام اس آی RTX 2060 GAMING 6G</p>
                        <div className={"flex justify-between items-center mt-5"}>
                            <div className={"hidden xl:flex items-center"}>
                                <p className={"text-gray-500 text-sm font-anjoman ml-5"}>تعداد</p>
                                <FaChevronRight className={"text-green-500 text-2xl cursor-pointer ml-3"}/>
                                <input type={"number"} className={"w-16 h-16 text-xl font-bold pb-1 border-0 outline-none bg-transparent text-center text-green-700"} value={1}/>
                                <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"}/>
                            </div>

                            <button className={"p-3 mx-auto border-1 border-transparent hover:border-green-700 rounded-lg bg-green-500 text-gray-100 text-lg font-anjoman"}>افزودن به سبد خرید</button>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default ProductMainPage