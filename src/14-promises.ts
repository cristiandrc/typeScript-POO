import axios from 'axios'

(async()=>{
  function delay (time: number){
    const promise = new Promise<string>((resolve)=>{
      setTimeout(()=>{
        resolve('string')
      },time)
    })
    return promise
  }

  function getProduct(){
    const promise = axios.get('https://api.escuelajs.co/api/v1/products')
    return promise
  }

  async function getProductAsync(){
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products')
    return rta.data
  }



  console.log('---'.repeat(15))
  const rta = await delay(3000)
  console.log(rta)

  console.log('---'.repeat(15))
  const products = await getProduct()
  console.log(products.data)

  console.log('---'.repeat(15))
  const productsV2 = await getProductAsync()
  console.log(productsV2)
})()