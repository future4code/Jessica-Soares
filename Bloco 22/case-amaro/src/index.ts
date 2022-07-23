import app from "./controller/app"
import { ProductRouter } from "./controller/ProductRouter"


app.use('/product/', ProductRouter)

