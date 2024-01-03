import { Sequelize } from "sequelize";
import db from "../config/db.config.js";

const { DataTypes } = Sequelize;
    const Buku = db.define('bukus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        kode_buku: {
            type: DataTypes.INTEGER
        },
        judul: {
            type: DataTypes.STRING
        },
        tahun_terbit: {
            type: DataTypes.INTEGER
        },
        jumlah: {
            type: DataTypes.INTEGER
        },
        pengarang_id: {
            type: DataTypes.INTEGER
        },
        penerbit_id: {
            type: DataTypes.INTEGER
        },
        rak_kode_rak: {
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
        } , {
            freezeTableName: true 
        });
    export default Buku;