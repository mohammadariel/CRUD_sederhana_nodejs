import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditBuku() {
    // const [prodi, setProdi] = useState([]);
    const [kode_buku, setKodeBuku] = useState("");
    const [judul, setJudul] = useState("");
    const [tahun_terbit, setTahunTerbit] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [pengarang_id, setPengarangId] = useState("");
    const [penerbit_id, setPenerbitId] = useState("");
    const [rak_kode_rak, setRakKodeRak] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getBuku();
    }, []);

    const getBuku = async () => {
        const response = await
            axios.get("http://localhost:5000/api/buku/" + id);
        setKodeBuku(response.data.kode_buku);
        setJudul(response.data.judul);
        setTahunTerbit(response.data.tahun_terbit);
        setJumlah(response.data.jumlah);
        setPengarangId(response.data.pengarang_id);
        setPenerbitId(response.data.penerbit_id);
        setRakKodeRak(response.data.rak_kode_rak);
    };
    const update = async (e) => {
        e.preventDefault();
        await axios.patch(("http://localhost:5000/api/buku/" + id), {
            kode_buku: kode_buku,
            judul: judul,
            tahun_terbit: tahun_terbit,
            jumlah: jumlah,
            pengarang_id: pengarang_id,
            penerbit_id: penerbit_id,
            rak_kode_rak: rak_kode_rak,
        });
        navigate("/buku", { replace: true });
    };
    const back = () => {
        navigate("/buku", { replace: true });
    };

   return (
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Buku</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Buku</li>
                    </ol>
                </nav>
            </div>
            <section class="section">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Data Buku</h5>
                                <form onSubmit={update}>
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-2 col-formlabel">Kode Buku</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" value={kode_buku}
                                                onChange={(e) => setKodeBuku(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail3" class="col-sm-2 col-formlabel">Judul</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" value={judul}
                                                onChange={(e) => setJudul(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Tempat Lahir</label>
                                        <div class="col-sm-10">
                                            <input type="date" class="form-control"
                                                value={tahun_terbit} onChange={(e) => setTahunTerbit(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Jumlah</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control"
                                                value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Id Pengarang</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control"
                                                value={pengarang_id} onChange={(e) => setPengarangId(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Id Penerbit</label>
                                        <div class="col-sm-10">
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control"
                                                    value={penerbit_id} onChange={(e) => setPenerbitId(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPassword3" class="col-sm-2 col-formlabel">Kode Rak</label>
                                        <div class="col-sm-10">
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control"
                                                    value={rak_kode_rak} onChange={(e) => setRakKodeRak(e.target.value)} />
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
export default EditBuku;