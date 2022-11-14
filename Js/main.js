import { getProducts, getFilterProducts } from './data.js';
import CardComponent from "./CardComponent.js"
import {CategoryComponent} from "./CategoryComponent.js"
import { NavBarCategoryComponent } from "./CategoryComponent.js"
import { replaceImage, filterProduct, getBtnCategory, searchProduct } from "./functions.js"

const router = async ()=> {
  let products

  const search = localStorage.getItem("search")
  if(search === undefined || search === null || search === ""){
    products = await getProducts()
  }else {
    products = await getFilterProducts(search)
  }

  console.log("products",products)

  const cardsContainer = document.querySelector(".cards-container")
  cardsContainer.innerHTML = await CardComponent.render(products)

  const categoryContainer = document.querySelector(".category-group")
  categoryContainer.innerHTML = await CategoryComponent.render()

  const navbarCategoryContainer = document.querySelector(".category-navbar")
  navbarCategoryContainer.innerHTML = await NavBarCategoryComponent.render()

  replaceImage()
  getBtnCategory()
  searchProduct()
}

window.addEventListener("load", router)
window.addEventListener(localStorage.removeItem("search"))
window.addEventListener("load", filterProduct("all"))
