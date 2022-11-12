import CardComponent from "./CardComponent.js"
import {CategoryComponent} from "./CategoryComponent.js"
import { NavBarCategoryComponent } from "./CategoryComponent.js"

const router = async ()=> {
  const cardsContainer = document.querySelector(".cards-container")
  cardsContainer.innerHTML = await CardComponent.render()

  const categoryContainer = document.querySelector(".category-group")
  categoryContainer.innerHTML = await CategoryComponent.render()

  const navbarCategoryContainer = document.querySelector(".category-navbar")
  navbarCategoryContainer.innerHTML = await NavBarCategoryComponent.render()
}

window.addEventListener("load", router)