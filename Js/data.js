const BASE_URL = "http://127.0.0.1:3000"


export async function getProducts() {
  const result = await fetch(`${BASE_URL}/products`);
  const response = result.json();
  return response
}

export async function getCategories(){
  const result = await fetch(`${BASE_URL}/category`)
  const response =  await result.json();
  return response
}
