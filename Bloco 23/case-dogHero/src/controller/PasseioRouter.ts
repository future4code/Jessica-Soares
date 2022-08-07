import express from "express";

import { PasseioController } from "./PasseioController";

export const PasseioRouter = express.Router()

const passeioController = new PasseioController()

PasseioRouter.post('/criar', passeioController.criarPasseio)
PasseioRouter.put('/editar/:id', passeioController.editarPasseio)
PasseioRouter.get('/localizar/:status', passeioController.localizarPasseio)








