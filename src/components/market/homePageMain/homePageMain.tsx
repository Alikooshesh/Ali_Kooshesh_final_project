import {Carousel, CarouselItem} from "react-bootstrap"
import {Link} from 'react-router-dom'
import ProductBox from "../stableParts/productsBox/productBox";
import CategoryBox from "../stableParts/categoryBox/categoryBox";
import {useSelector} from "react-redux";

function HomePageMain() {

    const lastSeenProducts = useSelector((state:any)=> state.productSeen.productList)

    return(
        <div className={"w-full px-3 pt-3"} data-aos="zoom-in-up">
            <div className={"w-full h-auto md:h-14 flex justify-center items-center rounded text-center font-anjoman text-sm bg-indigo-600 text-white py-2 px-1 md:py-0"}>
                به دلیل تعطیلات ، در صورت عدم پاسخگویی پشتیبانی تلفنی ، از پشتیبانی آنلاین سایت استفاده کنید .
            </div>

            <div className={"w-full px-0 lg:px-64 pt-3"}>
                <div className={"flex justify-between"}>
                    <div className={"w-full md:w-8/12 rounded-lg"}>
                        <Carousel>
                            <CarouselItem>
                                <Link to={'/product/ca1pd2'}>
                                    <div className={"w-full h-full rounded-lg"}>
                                        <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                                    </div>
                                </Link>

                            </CarouselItem>
                            <CarouselItem>
                                <Link to={'/product/ca1pd2'}>
                                    <div className={"w-full h-full rounded-lg"}>
                                        <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/406241767eed0028c14a493524669e65a7d825fb_1628611218.gif"}/>
                                    </div>
                                </Link>

                            </CarouselItem>
                        </Carousel>
                    </div>
                    <div className={"hidden md:flex flex-col w-4/12 h-56 mr-1"}>

                        <Link to={'/product/ca1pd2'}>
                            <div className={"w-full rounded-lg mb-1"}>
                                <img className={"w-full rounded-lg"} src={"https://s4.uupload.ir/files/1628065140-oowutonxr3giumzv_vkmz.jpg"}/>
                            </div>
                        </Link>

                        <Link to={'/product/ca1pd2'}>
                            <div className={"w-full rounded-lg"}>
                                <img className={"w-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/406241767eed0028c14a493524669e65a7d825fb_1628611218.gif"}/>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={"mt-3"}><ProductBox boxName={"فروش ویژه"} productList={['ca2pd1', 'ca2pd2','ca1pd2','ca2pd3']}/></div>

                <div className={"w-full h-64 mt-3 flex justify-between"}>
                    <Link to={'/product/ca1pd2'}>
                        <div className={"w-full h-full rounded-lg shadow-sm pl-1"}>
                            <img className={"w-full h-full rounded-lg"} src={"https://s4.uupload.ir/files/1628101377-lmgz9xzkanen2ixp_tgjw.jpg"}/>
                        </div>
                    </Link>

                    <Link to={'/product/ca1pd2'}>
                        <div className={"hidden md:block w-full h-full rounded-lg shadow-md pr-1"}>
                            <img className={"w-full h-full rounded-lg"} src={"https://s4.uupload.ir/files/1627110439-ygvvqmnhokqutwo9_5qp8.jpg"}/>
                        </div>
                    </Link>

                </div>

                <div className={"mt-3"}><ProductBox boxName={"کالا های پیشنهادی"} productList={['ca1pd1', 'ca1pd2','ca2pd3','ca2pd2']}/></div>

                <div className={"hidden md:block mt-3"}><CategoryBox boxName={"بر اساس علایق شما"}/></div>

                {lastSeenProducts.length>1 && <div className={"mt-3"}><ProductBox boxName={"آخرین کالا های مشاهده شده"} productList={[...lastSeenProducts]}/></div>}


            </div>

        </div>
    )
}

export default HomePageMain