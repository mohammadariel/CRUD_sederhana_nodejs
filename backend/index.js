import express from "express";
import db from "./config/db.config.js";
import bukuRoute from "./routes/buku.routes.js"
import mahasiswaRoute from "./routes/mahasiswa.routes.js"
import prodiRoute from "./routes/prodi.routes.js"
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log("database ok");
} catch (error) {
    console.log("belum konek", error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/api/buku', bukuRoute);
app.use('/api/mahasiswa', mahasiswaRoute);
app.use('/api/prodi', prodiRoute);

app.listen(5000);