import express from "express";

import { CompeticaoController } from "./CompeticaoController";

export const CompeticaoRouter = express.Router()

const competicaoController = new CompeticaoController()

CompeticaoRouter.post('/criarCompeticao', competicaoController.criarCompeticao)
CompeticaoRouter.post('/inserirAtleta', competicaoController.inserirAtleta)
CompeticaoRouter.get('/ordenarAtletas', competicaoController.ordenarAtletas)









