import Product from "../models/buku.model.js";

export const getAllProducts = async ( req, res ) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const tambahBuku = async ( req, res ) => {
    try {
        const products = await Product.create(req.body);
        res.json( {
            "message" : "Buku berhasil ditambahkan"
        } );
    } catch (error) {
        res.json({message:error.message});
    }
};

export const cariBuku = async ( req, res ) => {
    try {
        const products = await Product.findAll( {
            where: {
                id:req.params.id
            }
        } );
        res.json(products[0]);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const updateBuku = async ( req, res ) => {
    try {
        const products = await Product.update(req.body, {
            where: {
                id:req.params.id
            }
        } );
        res.json({"message":"Buku Berhasil diupdate"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const deleteBuku = async ( req, res ) => {
    try {
        const products = await Product.destroy(req.body, {
            where: {
                id:req.params.id
            }
        } );
        res.json({"message":"Buku Berhasil dihapus"});
    } catch (error) {
        res.json({message:error.message});
    }
};
