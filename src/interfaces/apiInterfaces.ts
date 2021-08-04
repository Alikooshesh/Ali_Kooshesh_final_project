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
    optionalProperty : {propertyName : string, propertyInfo:string}[],
    comment : {commentID : string, commenterUserID : string, commentLike : number, commentDisLike:number, comentText:string}[],

}