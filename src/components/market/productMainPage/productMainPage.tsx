import ProductSumImgBox from "./sections/productSumImgBox/productSumImgBox";
import Select from 'react-select';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import ProductBox from "../stableParts/productsBox/productBox";
import ProductInfoBox from "./sections/productInfoBox/productInfoBox";
import ProductCommentBox from "./sections/productCommentBox/productCommentBox";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Iproduct} from "../../../interfaces/apiInterfaces";
import {useDispatch} from "react-redux";
import {addSeenItem} from "../../../redux/reducers/productSeenReducer/productSeenReducer";
import {add} from "../../../redux/reducers/cartReducer/cartReducer";

function ProductMainPage() {

    const dispatch = useDispatch()

    const [productData, setProductData] = useState<Iproduct | null>(null)
    const [guaranteeSelected, setGuaranteeSelected] = useState<{ name?: string, id?: string, time?: string, selected: boolean }>({selected: false})
    const [guaranteeSelectedTimes, setGuaranteeSelectedTimes] = useState<null | { time: string }[]>(null)
    const [productNumber, setProductNumber] = useState<number>(1)

    const [addToCartErr, setAddToCartErr] = useState<string | boolean>(false)
    const [addToCartSuccess, setAddToCartSuccess] = useState<boolean>(false)

    const urlParam: { productID: string } = useParams()
    useEffect(() => {
        dispatch(addSeenItem({productID: urlParam.productID}))
        axios.get(`https://pcmarket-server-api.herokuapp.com/product/${urlParam.productID}`)
            .then(productData => {
                setProductData(productData.data)
                console.log(`axios get productData ${urlParam.productID}`)
            })
            .catch(err => console.log(err))
    }, [urlParam])

    useEffect(() => {
        if (guaranteeSelected.id) {
            const tempGuaranteeTime: any = productData?.guaranteeList.filter(item => item.guaranteeID == guaranteeSelected.id)
            setGuaranteeSelectedTimes(tempGuaranteeTime[0].guaranteeTime)
        }
    }, [guaranteeSelected])

    function addToCart() {

        if ((productData?.guaranteeList && productData?.guaranteeList.length > 0) && !guaranteeSelected.time) {
            setAddToCartErr('گارانتی مد نظر را از لیست بالا انتخاب کنید')
        } else {
            setAddToCartErr(false)
            setAddToCartSuccess(true)
            dispatch(add(
                {productId: productData?.productID,
                    number: productNumber,
                    description: guaranteeSelected ? `گارانتی : ${guaranteeSelected.name} ${guaranteeSelected.time}`: ''}))
        }
    }

    return (
        <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
            <div
                className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
            </div>

            <div className={"w-full mt-3 px-0 lg:px-28"}>
                <section
                    className={"w-full p-3 flex flex-col md:flex-row border-1 border-transparent rounded-md bg-gray-100 shadow-md"}>
                    <div className={"w-full md:w-1/3 md:border-l-2 bg-transparent pl-3"}>
                        <ProductSumImgBox img={productData?.img}/>
                    </div>

                    <div className={"w-full md:w-2/3 md:flex bg-transparent"}>
                        <div className={"w-full md:w-1/2 bg-transparent pr-5 pt-5"}>
                            <p className={"font-anjoman text-lg text-gray-700"}>{productData && productData.productTitleFA}</p>
                            <p className={"font-serif font-light text-sm text-gray-400"}>{productData && productData.productName}</p>
                            <div className={"mt-10 md:mt-20 first:mt-0"}>
                                {productData && productData.sumInfo.map(item => {
                                    return (
                                        <p key={`${item.sumInfoTitle} ${item.sumInfoText}`}
                                           className={"font-anjoman text-sm text-gray-500 mt-2"}>
                                            <span>{item.sumInfoTitle}</span> :
                                            <span>{item.sumInfoText}</span>
                                        </p>
                                    )
                                })}

                            </div>
                        </div>

                        <div className={"w-full md:w-1/2 items-end bg-transparent pr-5 pt-5 pl-5"}>
                            <div className={"mt-10"}>
                                <Select className={"font-anjoman"}
                                        onChange={(guarantee) => guarantee && guarantee.value != null && setGuaranteeSelected({
                                            id: guarantee.value,
                                            name: guarantee.label,
                                            selected: true
                                        })} defaultValue={{value: "null", label: 'انتخاب کنید'}} isSearchable={true}
                                        options={productData?.guaranteeList.map(item => {
                                            return {value: item.guaranteeID, label: item.guaranteeName}
                                        })}/>
                            </div>

                            <div className={"mt-10"}>
                                <Select isDisabled={!guaranteeSelectedTimes} className={"font-anjoman"}
                                        onChange={(guaranteeTime) => guaranteeTime && guaranteeTime.value != null && setGuaranteeSelected({
                                            ...guaranteeSelected,
                                            time: guaranteeTime.value
                                        })}
                                        defaultValue={{value: "null", label: 'انتخاب کنید'}} isSearchable={true}
                                        options={guaranteeSelectedTimes?.map((item) => {
                                            return {value: `${item}`, label: `${item}`}
                                        })}/>
                            </div>

                            <div className={"flex items-center mt-5 md:mt-10"}>
                                <p className={"text-gray-500 text-sm font-anjoman ml-5"}>تعداد</p>
                                <FaChevronRight className={"text-green-500 text-2xl cursor-pointer ml-3"}
                                                onClick={() => productNumber > 1 && setProductNumber(productNumber - 1)}/>
                                <input type={"number"}
                                       className={"w-16 h-16 text-xl font-bold pb-1 border-0 outline-none bg-transparent text-center text-green-700"}
                                       value={productNumber}
                                       onChange={(e: any) => e.target.value > 0 && setProductNumber(+e.target.value)}/>
                                <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"}
                                               onClick={() => setProductNumber(productNumber + 1)}/>
                            </div>

                            <p className={`w-full text-left text-red-500 font-anjoman text-sm ${productData && (productData.offPercent == 0 && 'hidden text-opacity-0')}`}>
                                <del>{productData && productData.offPercent !== 0 ? `${productData.price} تومان` : '0'}</del>
                            </p>
                            <p className={"w-full text-left font-anjoman text-3xl text-green-700"}>{`${productData && productData.price - (productData.price * (productData.offPercent / 100))} تومان`}</p>

                            <button
                                className={"w-full mt-20 h-16 border-1 border-transparent hover:border-green-700 rounded-lg bg-green-500 text-gray-100 text-2xl font-anjoman"} onClick={addToCart}>افزودن
                                به سبد خرید
                            </button>
                            <p className={`${!addToCartErr && 'hidden'} w-full text-center text-red-500 font-anjoman text-lg`}>{addToCartErr}</p>
                            <p className={`${!addToCartSuccess && 'hidden'} w-full text-center text-green-700 font-anjoman text-lg`}>با موفقیت به سبد خرید اضافه شد</p>

                        </div>
                    </div>
                </section>

                <section className={"hidden md:block mt-3"}><ProductBox boxName={"کالا های مشابه"}
                                                                        productList={['ca2pd1', 'ca2pd2','ca1pd2','ca2pd3']}/></section>

                <section className={"w-full relative mt-3 md:flex"}>
                    <div
                        className={"w-full lg:w-8/12 2xl:w-9/12 rounded-lg border-1 border-transparent bg-transparent"}>
                        <div
                            className={"flex justify-center sm:justify-start sticky top-0 z-10 shadow-md rounded-lg border-2 border-gray-300 font-anjoman text-gray-400 bg-gray-100"}>
                            <a href={"#info"}>
                                <button
                                    className={"py-3 px-7 my-2 mx-2 border-1 border-transparent rounded-lg bg-gray-200 text-gray-500 hover:text-green-500"}>مشخصات
                                </button>
                            </a>
                            <a href={"#comments"}>
                                <button
                                    className={"py-3 px-5 my-2 mx-2 border-1 border-transparent rounded-lg bg-gray-200 text-gray-500 hover:text-green-500"}>دیدگاه
                                    کاربران
                                </button>
                            </a>
                        </div>
                        <div id={"info"}
                             className={"w-full font-anjoman pt-2 px-5 rounded-lg border-1 border-transparent bg-gray-100 mt-2"}>
                            <ProductInfoBox property={productData && productData.fullProperty}/></div>
                        <div id={"comments"}
                             className={"w-full font-anjoman pt-2 px-5 rounded-lg border-1 border-transparent bg-gray-100 mt-2"}>
                            <ProductCommentBox commentList={productData && productData.comment}/></div>
                    </div>

                    <div
                        className={"sticky top-0 left-0 h-96 hidden lg:block w-4/12 2xl:w-3/12 rounded-lg border-2 border-gray-300 bg-gray-100 px-5 py-3 mr-2"}>
                        <div className={"w-3/5 h-2/3 bg-gray-100 rounded-lg mx-auto"}>
                            <img className={"w-full h-full"} src={`${productData && productData.img[0]}`}
                                 alt={productData?.productName} loading={"lazy"}/>
                        </div>
                        <p className={"font-anjoman text-gray-700 text-center mt-2"}>کارت گرافیک ام اس آی RTX 2060
                            GAMING 6G</p>
                        <div className={"flex justify-between items-center mt-5"}>
                            <div className={"hidden xl:flex items-center"}>
                                <p className={"text-gray-500 text-sm font-anjoman ml-5"}>تعداد</p>
                                <FaChevronRight className={"text-green-500 text-2xl cursor-pointer ml-3"}
                                                onClick={() => productNumber > 1 && setProductNumber(productNumber - 1)}/>
                                <input type={"number"}
                                       className={"w-16 h-16 text-xl font-bold pb-1 border-0 outline-none bg-transparent text-center text-green-700"}
                                       value={productNumber}
                                       onChange={(e: any) => e.target.value > 0 && setProductNumber(+e.target.value)}/>
                                <FaChevronLeft className={"text-green-500 text-2xl cursor-pointer"}
                                               onClick={() => setProductNumber(productNumber + 1)}/>
                            </div>

                            <button
                                className={"p-3 mx-auto border-1 border-transparent hover:border-green-700 rounded-lg bg-green-500 text-gray-100 text-lg font-anjoman"}
                                onClick={() => window.scrollTo(0, 0)}>افزودن به سبد خرید
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default ProductMainPage