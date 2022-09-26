import { ProductHttpService } from "./services/product-http.service";
(async ()=> {

  const productService = new ProductHttpService()
  try {
    
    console.log('---'.repeat(15))
    console.log('GetAll')

    const products = await productService.getAll()
    console.log(products.length)
    console.log(products.map(i => i.price))

    console.log('---'.repeat(15))
    console.log('Update')

    const productId = products[1].id
    await productService.update(productId,{price:99999999998,title: 'new Title Cristian'})

    console.log('---'.repeat(15))
    console.log('FindOne')
    
    const product = await productService.findOne(productId)
    console.log(product)
  } catch (error) {
    console.log('Error Product service http')
  }

})()