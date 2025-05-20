const products = [
  { id: 1, name: "Product A", price: 100, description: "Desc A" },
  { id: 2, name: "Product B", price: 200, description: "Desc B" },
];

module.exports = {
  getAll: () => products,
  getById: (id) => products.find((p) => p.id == id),
};
