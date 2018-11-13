// export interface Product {
//   key: string;
//   title: string;
//   text: string;
//   tara: string;
//   price: number;
//   url: any;
// }

export class Product {
  constructor(
    public key: string,
    public title: string,
    public text: string,
    public tara: string,
    public price: number,
    public url: string,
    public index: string,
  ){}
}


export class Key {
  constructor(
    public keyCart: string,
  ){}
}
