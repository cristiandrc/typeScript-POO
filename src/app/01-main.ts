import axios from 'axios'
import {Product} from './models/product.model'

(async()=>{

  async function getProduct(): Promise<Product[]>{
    const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    return data
  }

  async function getProduct2(){ //forced way
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    const data = rta.data as Product[]
    return data
  }

  console.log('---'.repeat(15))
  const productsV2 = await getProduct()
  console.log(productsV2.map(item => `ID: ${item.id}, name: ${item.title}`))
})()