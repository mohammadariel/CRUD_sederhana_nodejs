import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import ref_prodi from "./prodi.model.js";
const { DataTypes } = Sequelize;
const Mahasiswa = db.define(
    'mahasiswas',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nim: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nama: {
            type: DataTypes.STRING,
        },
        tempat_lahir: {
            type: DataTypes.STRING,
        },
        tgl_lahir: {
            type: DataTypes.DATE,
        },
        prodi_id: {
            type: DataTypes.INTEGER,
        },
        th_masuk: {
            type: DataTypes.INTEGER,
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
ref_prodi.hasMany(Mahasiswa, { foreignKey: "prodi_id" });
Mahasiswa.belongsTo(ref_prodi, { foreignKey: "prodi_id" });

export default Mahasiswa;
