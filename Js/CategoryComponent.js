import { getCategories } from "./data.js";

export const CategoryComponent = {
  render: async ()=> {
    const {content} = await getCategories();
    console.log(content);
    return `
    ${content.map(category =>`
          <li class="list-group-item" id=${category.id} data-key=${category.id}>
            <a href="">
              ${category.name}
            </a>
          </li>
    `).join('\n')}
    `
  }
}


export const NavBarCategoryComponent = {
  render: async ()=> {
    const {content} = await getCategories();
    console.log(content);
    return `
    ${content.map(category =>`
              <li><a class="dropdown-item" href="#" id=${category.id} data-key=${category.id}>${category.name}</a></li>
    `).join('\n')}
    `
  }
}

