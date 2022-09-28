import axios from "axios";
import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class BaseHttpService<TypeClass>{
  // private data: typeClass[] = []
  // private url = 'https://api.escuelajs.co/api/v1/products'
  constructor(protected url: string){}


  async getAll():Promise<TypeClass[]>{
    const {data} = await axios.get<Promise<TypeClass[]>>(this.url)
    return data
  }

  async update<ID,DTO>(id: ID, changes: DTO) {
    const {data} = await axios.put(`${this.url}/${id}`, changes)
    return data
  }

}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const productService =  new BaseHttpService<Product>(url1)

  const rta = await productService.getAll()
  console.log('products',rta[0])
  const rta3 = await productService.update<Product['id'],UpdateProductDto>(rta[0].id,{title: 'new Title'})


  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService =  new BaseHttpService<Product>(url2)
  
  const rta2 = await categoryService.getAll()
  console.log('categories',rta2[0])
})()