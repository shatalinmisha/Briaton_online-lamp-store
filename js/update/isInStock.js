
export default function isInStock(product) {
  const stock = Object.values(product.availability);
  return stock.some(count => count > 0);
}