import { getCategories } from "./data.js";

export const CategoryComponent = {
  render: async ()=> {
    const {content} = await getCategories();
    return `
    <button class="btn btn-outline-success" data-id="all">All</button>
    ${content.map(category =>`
          <button  class="btn btn-outline-success" data-id="${category.name}" >${category.name}</button>
    `).join('\n')}
    `
  }
}


export const NavBarCategoryComponent = {
  render: async ()=> {
    const {content} = await getCategories();
    console.log(content);
    return `
    <li>
      <button class="dropdown-item btn btn-outline-success" data-id="all">All</button>
    </li>
    ${content.map(category =>`
                
              <li>
                <button class="dropdown-item btn btn-outline-success" data-id="${category.name}">${category.name}</button>
              </li>
    `).join('\n')}
    `
  }
}

