export interface Iorder {
    orderId : string,
    makerUserId : string,
    products : {productName : string , productNumber : number , productPrice : number}[],
    status : string,
    description : string
}