import app from "./controller/app"
import { JogoRouter } from "./controller/JogoRouter"


app.use('/jogo/', JogoRouter)

