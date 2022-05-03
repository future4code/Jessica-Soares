import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";
import { createProducts } from "./endpoints/createProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { createPurchases } from "./endpoints/createPurchases";


app.post("/users", createUsers)
app.post("/products", createProducts)
app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/purchases", createPurchases)


