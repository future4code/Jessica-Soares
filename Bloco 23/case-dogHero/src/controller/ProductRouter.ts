import express from "express";

import { ProductController } from "./ProductController";

export const ProductRouter = express.Router()

const productController = new ProductController()

ProductRouter.post('/create', productController.createProduct)

ProductRouter.get('/:id', productController.getProductById)

ProductRouter.get('/name', productController.getProductByName)




