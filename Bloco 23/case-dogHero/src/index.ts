import app from "./controller/app"
import { PasseioRouter } from "./controller/PasseioRouter"


app.use('/passeio/', PasseioRouter)

