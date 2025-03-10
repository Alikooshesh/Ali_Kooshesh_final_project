import {Carousel, CarouselItem} from "react-bootstrap";
import {FaFilter, FaSortAmountDownAlt} from 'react-icons/fa'
import ProductCard from "../stableParts/productsBox/productCard/productCard";
import ProductBox from "../stableParts/productsBox/productBox";
import FilterBox from "../stableParts/filterBox/filterBox";
import {createContext, useEffect, useState} from "react";
import {useHistory, useLocation, useParams} from "react-router-dom"
import MobileFilterOffcanvas from "../stableParts/filterBox/mobileFilterOffcanvas/mobileFilterOffcanvas";
import axios from "axios";
import {Iproduct} from "../../../interfaces/apiInterfaces";

export const CategoryDataContext = createContext<any>([])

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchPageMain(props:any) {

    const history = useHistory()

    const [categoryData , setCategoryData] = useState<any>([])
    const urlParams:{searchText : string} = useParams()

    const [sort,setSort] = useState({mostSell : true , highPrice : false , lowPrice : false})
    const [sortedproductList , setSortedProductList] = useState([])

    useEffect(()=> {
        axios.get(`https://pcmarket-server-api.herokuapp.com/search/${urlParams.searchText}`)
            .then(res => {
                setCategoryData(res.data)
                console.log(res.data)
                console.log(`axios search ${urlParams.searchText}`)
            })
            .catch(err => console.log(err))
    },[urlParams])

    useEffect(()=>{
        async function resetSort(){
            await setSortedProductList([])

            if(sort.mostSell){
                await categoryData.product && setSortedProductList(categoryData.product.sort((a:Iproduct,b:Iproduct)=> a.sold - b.sold))
                console.log({sortedproductList})
            }else if(sort.lowPrice){
                await categoryData.product && setSortedProductList(categoryData.product.sort((a:Iproduct,b:Iproduct)=> a.price - b.price))
                console.log({sortedproductList})
            }else if(sort.highPrice){
                await categoryData.product && setSortedProductList(categoryData.product.sort((a:Iproduct,b:Iproduct)=> b.price - a.price))
                await setSortedProductList(sortedproductList.reverse())
                console.log({sortedproductList})
            }else{
                await categoryData.product && setSortedProductList(categoryData.product)
            }
        }

        resetSort()
    },[categoryData,sort])

    useEffect(()=>{
        history.push(`${props.location.pathname}?sort=${(sort.lowPrice && 'lowPrice') || (sort.highPrice && 'highPrice') || (sort.mostSell && 'mostSell')}`)
    },[sort])

    function sortHandle(sortName:string|null) {
        let sortTemp:any = {mostSell : false , highPrice : false , lowPrice : false}
        sortName ? sortTemp[sortName] = true : console.log("bad Sort Name")
        setSort(sortTemp)
    }

    return(
        <CategoryDataContext.Provider value={categoryData}>
            <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
                <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                    به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
                </div>

                <div className={"w-full h-full px-0 lg:px-28 mt-3"}>
                    <section className={"w-full 2xl:h-96 2xl:px-52"}>
                        <Carousel>
                            <CarouselItem>
                                <div className={"w-full h-full 2xl:h-96 rounded-lg"}>
                                    <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className={"w-full h-full 2xl:h-96 rounded-lg"}>
                                    <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </section>

                    <section className={"w-full flex mt-3"}>
                        <div className={"w-full bg-gray-100 rounded shadow-md"}>
                            <div className={"w-full p-3 border-b-2 border-gray-300 font-anjoman"}>
                                <div className={"w-full flex justify-center md:justify-start items-center "}>
                                    <FaSortAmountDownAlt className={"text-xl ml-2"}/>
                                    <button className={`p-2 pt-1 border-1 border-transparent hover:border-black bg-gray-200 rounded ml-3 ${sort.mostSell && 'border-green-500 bg-gray-300 hover:border-green-500'}`} onClick={()=> sortHandle('mostSell')}>پر فروش ترین</button>
                                    <button className={`p-2 pt-1 border-1 border-transparent hover:border-black bg-gray-200 rounded ml-3 ${sort.lowPrice && 'border-green-500 bg-gray-300 hover:border-green-500'}`} onClick={()=> sortHandle('lowPrice')}>ارزانترین</button>
                                    <button className={`p-2 pt-1 border-1 border-transparent hover:border-black bg-gray-200 rounded ml-3 ${sort.highPrice && 'border-green-500 bg-gray-300 hover:border-green-500'}`} onClick={()=> sortHandle('highPrice')}>گرانترین</button>
                                </div>
                            </div>
                            {sortedproductList.length == 0 && <p className={"w-full text-red-500 text-center mt-3 text-3xl font-anjoman"}>نتیجه ای برای جستجوی شما یافت نشد</p>}
                            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 p-3 font-anjoman"}>
                                {sortedproductList && sortedproductList.map((item:Iproduct) => {
                                    return(
                                        <div key={`pr ${item.productID} ${Math.random()}`} className={"relative w-64 mt-2 mx-auto"}>
                                            <ProductCard id={item.productID} name={item.productName} img={item.img[0]} price={item.price} offPercent={item.offPercent} exist={item.exist}/>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </CategoryDataContext.Provider>
    )
}

export default SearchPageMain