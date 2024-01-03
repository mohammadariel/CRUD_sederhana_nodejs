import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProdi() {
    // const [prodi, setProdi] = useState([]);
    const [kode_prodi, setKodeProdi] = useState("");
    const [nama_prodi, setNamaProdi] = useState("");
    const [singkatan, setSingkatan] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProdibyId();
    }, []);

    const getProdibyId = async () => {
        const response = await axios.get("http://localhost:5000/api/prodi/" + id);
        setKodeProdi(response.data.kode_prodi);
        setNamaProdi(response.data.nama_prodi);
        setNamaProdi(response.data.nama_prodi);
    };
    const update = async (e) => {
        e.preventDefault();
        await axios.patch(("http://localhost:5000/api/prodi/" + id), {
            kode_prodi: kode_prodi,
            nama_prodi: nama_prodi,
            singkatan: singkatan,
        });
        navigate("/prodi", { replace: true});
    };
    const back = () => {
        navigate("/prodi", { replace: true});
    };

    return (
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Prodi</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Prodi</li>
                    </ol>
                </nav>
            </div>
            <section class="section">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Data Prodi</h5>
                                <form onSubmit={update}>
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-2 col-formlabel">Kode Prodi</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" value={kode_prodi}
                                                onChange={(e) => setKodeProdi(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-2 col-formlabel">Nama Prodi</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" value={nama_prodi}
                                                onChange={(e) => setNamaProdi(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Singkatan</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" value={singkatan} 
                                                onChange={(e) => setSingkatan(e.target.value)} />
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
};


export default EditProdi;