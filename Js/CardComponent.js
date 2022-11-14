import { getProducts } from './data.js';


const CardComponent  = {
  render: async (products) => {
    return `
    ${products.content.map(product =>`
        <div class="col ${product.category_categoryToproduct.name}" data-category="${product.category_categoryToproduct.name}">
          <div class="card text-center">
            <img src="${product.url_image}" class="card-img-top product-img" alt="${product.name}">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${product.name}</li>
            </ul>
            <div class="d-flex justify-content-center card-footer">
              <p class="card-price">$${product.price}</p>
            </div>
          </div>
        </div>
    `).join('\n')}
    `
  }
}

export default CardComponent