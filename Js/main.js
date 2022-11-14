import CardComponent from "./CardComponent.js"
import {CategoryComponent} from "./CategoryComponent.js"
import { NavBarCategoryComponent } from "./CategoryComponent.js"
import { replaceImage, filterProduct, getBtnCategory } from "./functions.js"

const router = async ()=> {
  const cardsContainer = document.querySelector(".cards-container")
  cardsContainer.innerHTML = await CardComponent.render()

  const categoryContainer = document.querySelector(".category-group")
  categoryContainer.innerHTML = await CategoryComponent.render()

  const navbarCategoryContainer = document.querySelector(".category-navbar")
  navbarCategoryContainer.innerHTML = await NavBarCategoryComponent.render()
  const category = localStorage.getItem("category")
  replaceImage()
  getBtnCategory()
}

window.addEventListener("load", router)
window.addEventListener("load", localStorage.removeItem("category"))
window.addEventListener("load", filterProduct("all"))
