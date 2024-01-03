import express from "express";

import { 
    getAllProducts,
    cariMahasiswa, 
    deleteMahasiswa,      
    tambahMahasiswa, 
    updateMahasiswa 
} 
from "../controllers/mahasiswa.controllers.js";

const router = express.Router();
router.get('/', getAllProducts);
router.post('/', tambahMahasiswa);
router.get('/:id', cariMahasiswa); // cari by Id
router.patch('/:id', updateMahasiswa); // update by Id
router.delete('/:id', deleteMahasiswa); 

export default router;