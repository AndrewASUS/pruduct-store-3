import express from "express"
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js"


const router = express.Router()


// CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE CREATE 
router.post("/", createProduct)


// READ READ READ READ READ READ READ READ READ READ READ READ READ READREAD READ READ READ READ READ READ
router.get("/", getProducts)


// UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATEUPDATE UPDATE UPDATE UPDATE UPDATE
router.put("/:id", updateProduct)


// DELETE DELETE DELETE DELETE DELETE DELETE DELETE DELETE DELETE DELETEDELETE DELETE DELETE DELETE DELETE
router.delete("/:id", deleteProduct)



export default router