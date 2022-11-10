import data from './data.js'

const CardComponent = {
  render: ()=> {
    const {products} = data;
    return `
    ${products.map(product =>`
    <div class="col">
        <div class="card">
          <img src=${product.image} class="card-img-top" alt=${product.info}>
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