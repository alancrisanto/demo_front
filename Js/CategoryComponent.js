import data from './data.js'

const CategoryComponent = {
  render: ()=> {
    const {categories} = data;
    return `
    ${categories.map(category =>`
    <ul class="list-group">
          <li class="list-group-item">
            <a href="">
              ${category.name}
            </a>
          </li>
          <li class="list-group-item">
            <a href="">
              ${category.name}
            </a>
          </li>
          <li class="list-group-item">
            <a href="">
              ${category.name}
            </a>
          </li>
        </ul>
    `).join('\n')}
    `
  }
}

export default CategoryComponent