import { getProducts } from './data.js';


const CardComponent  = {
  render: async () => {
    const  {content}  =  await getProducts()
    console.log("products",content)
    return `
    ${content.map(product =>`
    
    <div class="col">
        <div class="card">
          <img src=${product.url_image} class="card-img-top" alt=${product.info}>
        <div class="card-body">
          <p class="card-text">${product.name}</p>
        </div>
        <hr>
        <div class="d-flex card-body">
          <p class="card-price">$${product.price}</p>
        </div>
      </div>
    </div>
    `).join('\n')}
    `
  }
}

export default CardComponent