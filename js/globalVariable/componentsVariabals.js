let currentPage = 1;

function getCurrentPage() {
  return currentPage;
}

function setCurrentPage(page) {
  currentPage = page;
}

let allProducts = [];// добавил в компоненты

function setProducts(products) {//  добавил в компоненты зачем она
  allProducts = products;
}

function getProducts() {
  return allProducts;
}

function getProductById(id) {
  return allProducts.find(p => p.id === id);// добавил в компоненты
}

export {
    getCurrentPage,
    setCurrentPage,
    setProducts,
    getProducts,
    getProductById
}