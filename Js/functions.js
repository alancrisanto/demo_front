
export async function replaceImage() {
    let path = "../assets/images/product-placeholder.png"
    const img = document.querySelectorAll(".product-img")
    img.forEach(element => {
      const src = element.getAttribute("src")
      if( src === ""|| src === undefined || src === null){
        element.setAttribute("src", path ) 
  }})
};


