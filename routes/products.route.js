const route = require("express").Router;
const {createProduct,
deleteProduct,
getProducts,
updateProduct,} =require("../controllers/products.controller");

const ProductRouter = route();

ProductRouter.get("/", getProducts);
ProductRouter.post("/", createProduct);
ProductRouter.patch("/", updateProduct);
ProductRouter.delete("/",deleteProduct);

module.exports = ProductRouter;