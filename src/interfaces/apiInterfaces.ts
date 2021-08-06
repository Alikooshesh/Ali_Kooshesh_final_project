export interface Iproduct{
    productID : string,
    category : string,
    productName : string,
    productTitleFA : string,
    img : string[],
    sumInfo :{sumInfoTitle : string, sumInfoText : string}[],
    guaranteeList : {guaranteeID : string, guaranteeName : string, guaranteeTime : string[]}[],
    price : number,
    offPercent : number,
    exist : number,
    sold : number,
    requiredProperty : {propertyID : string, propertyOptionID : string}[],
    fullProperty : {propertyName : string, propertyInfo:string}[],
    comment : IcommentList[],

}

export interface IcommentList {
    commentID : string, commenter : string, commentDate : string, commentLike : number, commentDisLike:number, comentText:string
}