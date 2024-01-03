import express from "express";

import {
    getAllProducts, tambahBuku, deleteBuku, cariBuku, updateBuku
} from "../controllers/buku.controllers.js";

const router = express.Router();
router.get('/', getAllProducts);
router.post('/', tambahBuku);
router.get('/:id', cariBuku); // cari by Id
router.patch('/:id', updateBuku) // update by Id
router.delete('/:id', deleteBuku); 

export default router;