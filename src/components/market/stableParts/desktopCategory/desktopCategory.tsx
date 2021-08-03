import {useContext} from "react";
import {CategoryListContext} from '../../marketIndex'
import {Link} from 'react-router-dom'

function DesktopCategory(){

    const categoryListContext:any[] = useContext(CategoryListContext)

    return(
        <div className={"w-full bg-gray-100 p-3 flex flex-col space-y-3 rounded-lg rounded-t-none"}>
            {categoryListContext && categoryListContext.map(item => {
                return(
                    <Link to={`/category/${item.categoryID}`} key={`${item.categoryID}Desktop`}>
                        <button className={"w-full p-2 flex justify-start items-center hover:text-green-600 hover:bg-gray-200"}>
                            <div className={"w-1/12"}>
                                <img className={"w-full h-full bg-transparent"} src={item.categoryIcon} alt={`${item.name} Icon`}/>
                            </div>
                            <div className={"font-anjoman mr-2"}>{item.categoryName}</div>
                        </button>
                    </Link>
                )
            })}

        </div>
    )
}

export default DesktopCategory