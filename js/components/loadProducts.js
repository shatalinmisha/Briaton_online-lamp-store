import { setProducts } from "./store.js";
import renderProducts from "./renderProducts.js";
import updateFilterCounts from "./updateFilterCounts.js";


export default async function loadProducts() {
  const response = await fetch('./data/data.json');
  const data = await response.json();
  
  setProducts(data); // сохраняем глобально
  renderProducts(data);
  updateFilterCounts();
}
