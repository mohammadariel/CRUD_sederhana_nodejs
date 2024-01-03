import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditMahasiswa() {
    const [prodi, setProdi] = useState([]);
    const [nim, setNim] = useState("");
    const [nama, setnama] = useState("");
    const [tempat_lahir, setTempatLahir] = useState("");
    const [tgl_lahir, setTglLahir] = useState("");
    const [prodiId, setprodiId] = useState("");
    const [th_masuk, setThnMasuk] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getMahasiswabyId();
        getProdi();
    }, []);

    const getMahasiswabyId = async () => {
        const response = await
            axios.get("http://localhost:5000/api/mahasiswa/" + id);
        setNim(response.data.nim);
        setnama(response.data.nama);
        setTempatLahir(response.data.tempat_lahir);
        setTglLahir(response.data.tgl_lahir);
        setprodiId(response.data.prodiId);
        setThnMasuk(response.data.th_masuk);
    };
    const update = async (e) => {
        e.preventDefault();
        await axios.patch(('http://localhost:5000/api/mahasiswa/' + id), {
            nim: nim,
            nama: nama,
            tempat_lahir: tempat_lahir,
            tgl_lahir: tgl_lahir,
            prodi_id: prodiId,
            th_masuk: th_masuk,
        });
        navigate("/mhs", { replace: true });
    };
    const back = () => {
        navigate("/mhs", { replace: true });
    };
    const getProdi = async () => {
        const response = await axios.get("http://localhost:5000/api/prodi");
        //console.log(response.data);
        setProdi(response.data);
    };
   return (
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Mahasiswa</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Mahasiswa</li>
                    </ol>
                </nav>
            </div>
            <section class="section">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Data Mahasiswa</h5>
                                <form onSubmit={update}>
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-2 col-formlabel">NIM</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" value={nim}
                                                onChange={(e) => setNim(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-2 col-formlabel">Nama</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" value={nama}
                                                onChange={(e) => setnama(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Tempat Lahir</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control"
                                                value={tempat_lahir} onChange={(e) => setTempatLahir(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Tanggal Lahir</label>
                                        <div class="col-sm-10">
                                            <input type="date" class="form-control"
                                                value={tgl_lahir} onChange={(e) => setTglLahir(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Prodi</label>
                                        <div class="col-sm-10">
                                            <select class="form-select" aria-label="Default select example" onChange={(e) =>
                                                    setprodiId(e.target.value)}>
                                                <option>Program Studi</option>
                                                {prodi.map((prodi, index) => (
                                                    <option
                                                        value={prodi.id} selected>{prodi.nama_prodi}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Tahun Masuk</label>
                                        <div class="col-sm-10">
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control"
                                                    value={th_masuk} onChange={(e) => setThnMasuk(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary"
                                        >Submit</button>
                                        <button type="reset" onClick={back} class="btn btnsecondary">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 
export default EditMahasiswa;