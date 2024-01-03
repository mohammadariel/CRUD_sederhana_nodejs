import Product from "../models/prodi.model.js";

export const getAllProducts = async ( req, res ) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const tambahProdi = async ( req, res ) => {
    try {
        const products = await Product.create(req.body);
        res.json( {
            "message" : "Prodi berhasil ditambahkan"
        } );
    } catch (error) {
        res.json({message:error.message});
    }
};

export const cariProdi = async ( req, res ) => {
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

export const updateProdi = async ( req, res ) => {
    try {
        const products = await Product.update(req.body, {
            where: {
                id:req.params.id
            }
        } );
        res.json({"message":"Prodi Berhasil diupdate"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const deleteProdi = async ( req, res ) => {
    try {
        const products = await Product.destroy(req.body, {
            where: {
                id:req.params.id
            }
        } );
        res.json({"message":"Prodi Berhasil dihapus"});
    } catch (error) {
        res.json({message:error.message});
    }
};
