export type Product = {
    _id:string,
    image:string,
    name: string,
    price:number,
    category:string,
    discount:number,
    status:Boolean,
    desc: string
}

export type ProductCreate = {
    name:string,
    image:string,
    price:number,
    category:string,
    discount:number,
    status:Boolean,
    desc: string
} 

export type ProductCart = {
    _id: string,
    name: string,
    price:number,
    value:number,
}