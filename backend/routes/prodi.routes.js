import express from "express";
import { 
    cariProdi, 
    deleteProdi, 
    getAllProducts, 
    tambahProdi, 
    updateProdi 
} 
from "../controllers/prodi.controllers.js";



const router = express.Router();
router.get('/', getAllProducts);
router.post('/', tambahProdi);
router.get('/:id', cariProdi); // cari by Id
router.patch('/:id', updateProdi) // update by Id
router.delete('/:id', deleteProdi); 

export default router;