export type Product = {
    _id:string,
    name: string,
    price:number,
    category:string,
    cost:number,
    status:string,
    desc: string
}

export type ProductCreate = {
    name:string
} 

export type ProductCart = {
    _id: string,
    name: string,
    price:number,
    value:number,
}