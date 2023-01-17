class ProductManager {
  products = new Map();

  addProduct = (title, description, price, thumbnail, code, stock) => {
    if (this.products.has(code)) {
      throw new Error("El producto con este código ya exite");
    } else {
      let id = [...this.products.keys()].length + 1;
      this.products.set(code, { id, title, description, price, thumbnail, stock });
    }
  };

  getProducts = () => [...this.products.values()];

  getProductById = id => {
    let product = [...this.products.values()].find(p => p.id === id);
    if (!product) {
      throw new Error("Product not found.");
    } else {
      return product;
    }
  };
}

const myProductManager = new ProductManager();
console.log(myProductManager.getProducts());
myProductManager.addProduct("Coca-cola 1LT", "Cocacola de 1LT para compartir", 9.99, "thumbnail1.jpg", "code1", 100);
myProductManager.addProduct("Coca-cola 1LT", "Cocacola de 1LT para compartir", 9.99, "thumbnail1.jpg", "code1", 100);
console.log(myProductManager.getProducts());
