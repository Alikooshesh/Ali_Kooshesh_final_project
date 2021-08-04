import {Link} from 'react-router-dom'

function ProductCard(props:{id:string, name:string, img:string, price:number, offPercent:number, exist:number}) {
    if (props.exist != 0){
        return(
            <Link to={`/product/${props.id}`}>
                {console.log(`${props.id} : ${props.exist}`)}
                <div className={"w-64 h-96 p-2 bg-gray-300 rounded cursor-pointer border-2 border-transparent hover:border-green-500"}>
                    <p className={`w-8/12 absolute top-0 right-0 pb-1 text-center text-white font-anjoman text-sm rounded-tr-md ${props.exist < 5 && 'bg-red-600'}`}>
                        {props.exist < 5 ? 'موجودی محدود' : ' '}
                    </p>
                    <div className={"w-full bg-gray-100 rounded-lg"}>
                        <img className={"w-full h-full"} src={props.img} alt={`${props.name}`} loading={"lazy"}/>
                    </div>
                    <p className={"w-full max-h-16 text-right text-black pt-3 text-lg overflow-y-hidden"}>{props.name}</p>
                    <p className={`w-full text-left text-red-500 font-anjoman text-sm pt-2`}>
                        <del>{props.offPercent !== 0 ? `${props.price} تومان` :' '}</del>
                    </p>
                    <p className={"w-full text-left text-green-600 font-anjoman text-2xl pt-1"}>{`${props.price - (props.price * (props.offPercent / 100))} تومان`}</p>
                </div>
            </Link>
        )
    }else {
        return (
            <>
            </>
        )
    }
}

export default ProductCard