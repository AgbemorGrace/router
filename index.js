const express = require("express");
const userRouter = require("./routes/users.route");
const ProductRouter = require("./routes/products.route");

const app = express();

app.use("/users", userRouter);
app.use("/products", ProductRouter);


app.listen(4000,(err) => {
    console.log("server is listening on http://localhost:4000");
});