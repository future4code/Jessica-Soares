import { app } from "./app";
import { createUsers } from "./endpoints/createUsers";
import { createProducts } from "./endpoints/createProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { createPurchases } from "./endpoints/createPurchases";
import { getPurchasesUser } from "./endpoints/getPurchasesUser";


app.post("/users", createUsers)
app.post("/products", createProducts)
app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/purchases", createPurchases)
app.get("/users/:user_Id/purchases", getPurchasesUser)


