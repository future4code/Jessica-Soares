import app from "./controller/app"
import { CompeticaoRouter } from "./controller/CompeticaoRouter"


app.use('/competicao/', CompeticaoRouter)

