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
function Mahasiswa() {
    const [mahasiswa, setMahasiswa] = useState([]);
    const [prodi, setProdi] = useState([]);
    const [nim, setNim] = useState("");
    const [nama, setnama] = useState("");
    const [tempat_lahir, setTempatLahir] = useState("");
    const [tgl_lahir, setTglLahir] = useState("");
    const [prodiId, setprodiId] = useState("");
    const [th_masuk, setThnMasuk] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        getMahasiswa();
        getProdi();
        setInterval(dataTable, 1000);
    }, []);

    const getMahasiswa = async () => {
        const response = await axios.get("http://localhost:5000/api/mahasiswa");
        console.log(response.data);
        setMahasiswa(response.data);
    };
    const save = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/mahasiswa", {
            nim: nim,
            nama: nama,
            tempat_lahir: tempat_lahir,
            tgl_lahir: tgl_lahir,
            prodi_id: prodiId,
            th_masuk: th_masuk,
        });
        getMahasiswa();
        kosong();
        navigate("/mhs", { replace: true });
    };

    const kosong = () => {
        setNim(""); setnama(""); setTempatLahir(""); setTglLahir(""); setThnMasuk(""); setprodiId();
    }
    const back = () => {
        navigate("/mhs", { replace: true });
    };
    const getProdi = async () => {
        const response = await axios.get("http://localhost:5000/api/prodi");
        console.log(response.data);
        setProdi(response.data);
    };
    const deleteProduct = async (id) => {
        await axios.delete("http://localhost:5000/api/mahasiswa/"+id);
        getMahasiswa("/:id");
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
                <h1>Mahasiswa</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Mahasiswa</li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Data Mahasiswa</h5>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal"
                                >
                                    Tambah Data Mahasiswa
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
                                                <h5 className="modal-title">Tambah Data Mahasiswa</h5>
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
                                                            NIM
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={nim}
                                                                onChange={(e) => setNim(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Nama
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={nama}
                                                                onChange={(e) =>
                                                                    setnama(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Tempat Lahir
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={tempat_lahir}
                                                                onChange={(e) =>
                                                                    setTempatLahir(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Tanggal Lahir
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                value={tgl_lahir}
                                                                onChange={(e) =>
                                                                    setTglLahir(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Prodi
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select example"
                                                                onChange={(e) =>
                                                                    setprodiId(e.target.value)}
                                                            >
                                                                <option>Program Studi</option>
                                                                {prodi.map((prodi, index) => (
                                                                    <option value={prodi.id}>
                                                                        {prodi.nama_prodi}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Tahun Masuk
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <div className="col-sm-10">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={th_masuk}
                                                                    onChange={(e) =>
                                                                        setThnMasuk(e.target.value)}
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
                                    Data Mahasiswa <span>| Today</span>
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
                                                            Nim
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "2%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Nama
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "2%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Prodi
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
                                                {mahasiswa.map((product, index) => (
                                                    <tr key={product.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{product.nim}</td>
                                                        <td>{product.nama}</td>
                                                        <td>{product.prodi.nama_prodi}</td>
                                                        <td>
                                                            <Link
                                                                to={`/mhs/${product.id}`}
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
export default Mahasiswa;


