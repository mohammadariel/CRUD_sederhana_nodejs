import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;
const Prodi = db.define(
    'prodis',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        kode_prodi: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nama_prodi: {
            type: DataTypes.STRING,
        },
        singkatan: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        },
    },
    {
        freezeTableName: true,
    }
);
export default Prodi;