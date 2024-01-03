
// export const getAllMhs = async (req, res) => {
//     try {
//         const mahasiswas = await Mahasiswa.findAll({
//             include: { model: ref_prodi },
//         });
//         res.json(mahasiswas);
//     } catch (error) {
//         res.json({ message: error.message });
//     }
// };


import Product from "../models/mahasiswa.model.js";
import ref_prodi from "../models/prodi.model.js";

export const getAllProducts = async ( req, res ) => {
    try {
        const products = await Product.findAll({
            include: { model: ref_prodi },
        });
        res.json(products);
    } catch (error) {
        res.json({message:error.message});
    }
};

export const tambahMahasiswa = async ( req, res ) => {
    try {
        const products = await Product.create(req.body);
        res.json( {
            "message" : "Mahasiswa berhasil ditambahkan"
        } );
    } catch (error) {
        res.json({message:error.message});
    }
};

export const cariMahasiswa = async ( req, res ) => {
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

export const updateMahasiswa = async ( req, res ) => {
    try {
        const products = await Product.update(req.body, {
            where: {
                id:req.params.id
            }
        } );
        res.json({"message":"Mahasiswa Berhasil diupdate"});
    } catch (error) {
        res.json({message:error.message});
    }
};

export const deleteMahasiswa=async (req, res)=>{

    try {
        const products = await Product.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({"message": "Mahasiswa berhasil dihapus"});
    } catch (error) {
        res.json({message:error.message});
    }
};

