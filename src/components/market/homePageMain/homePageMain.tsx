import {Carousel, CarouselItem} from "react-bootstrap"
import ProductCard from "../stableParts/productsBox/productCard/productCard";
import ProductBox from "../stableParts/productsBox/productBox";
import CategoryBox from "../stableParts/categoryBox/categoryBox";

function HomePageMain() {

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
                                <div className={"w-full h-full rounded-lg"}>
                                    <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className={"w-full h-full rounded-lg"}>
                                    <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <div className={"hidden md:flex flex-col w-4/12 h-56 mr-1"}>
                        <div className={"w-full rounded-lg mb-1"}>
                            <img className={"w-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                        </div>
                        <div className={"w-full rounded-lg"}>
                            <img className={"w-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                        </div>
                    </div>
                </div>

                <div className={"pt-3"}><ProductBox boxName={"فروش ویژه"}/></div>

                <div className={"w-full h-64 mt-3 flex justify-between"}>
                    <div className={"w-6/12 h-full rounded-lg shadow-sm pl-1"}>
                        <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                    </div>
                    <div className={"w-6/12 h-full rounded-lg shadow-md pr-1"}>
                        <img className={"w-full h-full rounded-lg"} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c5ee7b6da7afebfb0ed9606d7495ae48253d7bb_1626776037.jpg?x-oss-process=image/quality,q_80"}/>
                    </div>
                </div>

                <div className={"pt-3"}><ProductBox boxName={"کالا های پیشنهادی"}/></div>

                <div className={"pt-3"}><CategoryBox boxName={"بر اساس علایق شما"}/></div>
            </div>

        </div>
    )
}

export default HomePageMain