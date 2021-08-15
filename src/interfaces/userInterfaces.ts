export interface IuserOrder {
    orderId : string,
    products : {productName : string , productNumber : string , productPrice : number}[],
    status : string,
    description : string
}