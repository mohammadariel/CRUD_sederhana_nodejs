import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

//menu
function Buku() {
    const [buku, setBuku] = useState([]);
    const [kode_buku, setKodeBuku] = useState("");
    const [judul, setJudul] = useState("");
    const [tahun_terbit, setTahunTerbit] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [pengarang_id, setPengarangId] = useState("");
    const [penerbit_id, setPenerbitId] = useState("");
    const [rak_kode_rak, setRakKodeRak] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        getBuku();
        setInterval(dataTable, 1000);
    }, []);

    const getBuku = async () => {
        const response = await axios.get("http://localhost:5000/api/buku");
        console.log(response.data);
        setBuku(response.data);
    };
    const save = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/buku", {
            kode_buku: kode_buku,
            judul: judul,
            tahun_terbit: tahun_terbit,
            jumlah: jumlah,
            pengarang_id: pengarang_id,
            penerbit_id: penerbit_id,
            rak_kode_rak: rak_kode_rak,
        });
        getBuku();
        kosong();
        navigate("/buku", { replace: true });
    };

    const kosong = () => {
        setKodeBuku(""); 
        setJudul(""); 
        setTahunTerbit(""); 
        setJumlah(""); 
        setPengarangId(""); 
        setPenerbitId("");
        setRakKodeRak("")
    }
    const back = () => {
        navigate("/buku", { replace: true });
    };
    const deleteProduct = async (id) => {
        await axios.delete("http://localhost:5000/api/buku/"+id);
        getBuku("/:id");
    };
    const dataTable = () => {
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable();
            }, 1000);
        });
    };
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Buku</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Buku</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Data Buku
                                </h5>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal"
                                >
                                    Tambah Data Buku
                                </button>
                                <div
                                    className="modal fade"
                                    id="basicModal"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Tambah Data Buku</h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={save}>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Kode Buku
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={kode_buku}
                                                                onChange={(e) => setKodeBuku(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Judul
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={judul}
                                                                onChange={(e) =>
                                                                    setJudul(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Tahun Terbit
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                value={tahun_terbit}
                                                                onChange={(e) =>
                                                                    setTahunTerbit(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Jumlah
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={jumlah}
                                                                onChange={(e) =>
                                                                    setJumlah(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Id Pengarang
                                                        </label>
                                                        <div className="col-sm-10">
                                                        <input
                                                                type="text"
                                                                className="form-control"
                                                                value={pengarang_id}
                                                                onChange={(e) =>
                                                                    setPengarangId(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Id Penerbit
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <div className="col-sm-10">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={penerbit_id}
                                                                    onChange={(e) =>
                                                                        setPenerbitId(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Kode Rak
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <div className="col-sm-10">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={rak_kode_rak}
                                                                    onChange={(e) =>
                                                                        setRakKodeRak(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={back}
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                    &nbsp;|&nbsp;
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Save changes
                                                    </button>
                                                </form>
                                            </div>
                                            <div className="modal-footer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card recent-sales overflow-auto">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Data Buku <span>| Today</span>
                                </h5>
                                <div className="dataTable-wrapper dataTable-loading nofooter sortable searchable fixed-columns">
                                    <div className="dataTable-top">
                                    </div>
                                    <div className="dataTable-container">
                                        <table className="table table-borderless datatable dataTable-table" id="example">
                                            <thead>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "1%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            No
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "1%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Kode Buku
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "2%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Judul
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "2%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Kode Rak
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "1%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Aksi
                                                        </a>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {buku.map((product, index) => (
                                                    <tr key={product.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{product.kode_buku}</td>
                                                        <td>{product.judul}</td>
                                                        <td>{product.rak_kode_rak}</td>
                                                        <td>
                                                            <Link
                                                                to={`/buku/${product.id}`}
                                                                className="btn btn-success btn-sm"
                                                            >
                                                                Edit
                                                            </Link>
                                                            &nbsp;|&nbsp;
                                                            <button
                                                                onClick={() =>
                                                                    deleteProduct(product.id)}
                                                                className="btn btn-danger btn-sm"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </main>
    );
}
export default Buku;


