import AddComment from "./addComment/addComment";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/all";
import {IcommentList} from "../../../../../interfaces/apiInterfaces";

function ProductCommentBox(props:{commentList:IcommentList[]|null}) {
    return(
            <div className={"w-full"}>
                <AddComment/>
                <div>
                    <table className={"w-full"}>
                        {props.commentList && props.commentList.map(item => {
                            return(
                                <tr key={`${item.commentID} ${Math.random()}`} className={"w-full flex flex-col lg:flex-row border-b-2 border-gray-300 py-3 items-start justify-between"}>
                                    <td className={"lg:w-2/12 3xl:w-1/12 text-gray-400 text-top text-sm"}>
                                        <span>{item.commentDate}</span>
                                        <p>{item.commenter}</p>
                                        <div className={"w-2/3 flex md:flex-col justify-around items-center pt-3 cursor-pointer pr-3 md:pr-0"}>
                                            <div className={"w-full flex justify-between items-center"}>
                                                <AiOutlineLike className={"text-2xl text-green-500"}/>
                                                <span dir={'ltr'} className={"text-xl text-green-500 font-sans"}>{`+ ${item.commentLike}`}</span>
                                            </div>
                                            <div className={"w-full flex justify-between items-center mt-2 cursor-pointer pr-5 md:pr-0"}>
                                                <AiOutlineDislike className={"text-2xl text-red-500"}/>
                                                <span dir={'ltr'} className={"text-xl text-red-500 font-sans"}>{`- ${item.commentDisLike}`}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={"lg:w-10/12 3xl:w-11/12 text-gray-600 text-md"}>{item.comentText}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
    )
}

export default ProductCommentBox