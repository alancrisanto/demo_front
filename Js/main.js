import CardComponent from "./CardComponent.js"
import CategoryComponent from "./CategoryComponent.js"

const router = ()=> {
  const cardsContainer = document.querySelector(".cards-container")
  cardsContainer.innerHTML = CardComponent.render()

  const categoryContainer = document.querySelector(".category-group")
  categoryContainer.innerHTML = CategoryComponent.render()
}

window.addEventListener("load", router)