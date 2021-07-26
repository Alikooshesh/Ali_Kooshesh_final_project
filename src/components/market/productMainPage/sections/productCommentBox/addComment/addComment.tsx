function AddComment() {
    return(
        <div className={"w-full border-b-2 pb-2"}>
            <p className={"text-gray-500"}>دیدگاهتان را در مورد این محصول بنویسید</p>
            <textarea className={"w-full md:w-9/12 h-48 md:h-64 block rounded border-1 mt-3 p-3"}/>
            <button className={"p-3 rounded border-1 border-transparent bg-green-700 text-gray-100 mt-3"}>ثبت دیدگاه</button>
        </div>
    )
}

export default AddComment