
export async function replaceImage() {
    let path = "../assets/images/product-placeholder.png"
    const img = document.querySelectorAll(".product-img")
    img.forEach(element => {
      const src = element.getAttribute("src")
      if( src === ""|| src === undefined || src === null){
        element.setAttribute("src", path ) 
  }})
};


export function getBtnCategory () {
  let filterBtn = document.querySelectorAll(".btn");
  filterBtn.forEach( btn => {
  btn.addEventListener("click", function(e) {
    const category = e.currentTarget.dataset.id
    filterProduct(category)
  })
  })
}


export function filterProduct(value) {
  //Button class code
  let button = document.querySelectorAll(".btn");
  button.forEach(btn => {
    //check if value equals innerText
    if (value.toUpperCase() == btn.innerText.toUpperCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

    //select all cards
    let elements = document.querySelectorAll(".col");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.dataset.category === value) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }


export function searchProduct () {
  document.querySelector(".searchBtn").addEventListener("click", () => {
    let searchInput = document.querySelector(".search-input").value;
    localStorage.setItem("search", searchInput)
  });
}






