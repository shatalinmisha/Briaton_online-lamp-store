let allProducts = [];

export function setProducts(products) {
  allProducts = products;
}

export function getProducts() {
  return allProducts;
}

export function getProductById(id) {
  return allProducts.find(p => p.id === id);
}