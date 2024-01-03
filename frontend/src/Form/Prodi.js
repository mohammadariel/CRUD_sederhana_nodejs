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
function Prodi() {
    const [prodi, setProdi] = useState([]);
    const [kode_prodi, setKodeProdi] = useState("");
    const [nama_prodi, setNamaProdi] = useState("");
    const [singkatan, setSingkatan] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getProdi();
        setInterval(dataTable, 1000);
    }, []);

    const getProdi = async () => {
        const response = await axios.get("http://localhost:5000/api/prodi");
        console.log(response.data);
        setProdi(response.data);
    };
    const save = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/prodi", {
            kode_prodi: kode_prodi,
            nama_prodi: nama_prodi,
            singkatan: singkatan,
        });
        getProdi();
        kosong();
        navigate("/prodi", { replace: true });
    };

    const kosong = () => {
        setKodeProdi(""); setNamaProdi(""); setSingkatan("");
    };
    const back = () => {
        navigate("/prodi", { replace: true });
    };
    const deleteProducts = async (id) => {
        await axios.delete("http://localhost:5000/api/prodi/" + id);
        getProdi("/:id");
    };

    const dataTable
        = () => {
            $(document).ready(function () {
                setTimeout(function () {
                    $('#example').DataTable();
                }, 1000);
            });
        };
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Prodi</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadsrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                    </ol>
                </nav>
            </div>
            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Data Prodi</h5>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal"
                                >
                                    Tambah Data Prodi
                                </button>
                                <div
                                    className="modal fade"
                                    id="basicModal"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                    style={{ display: "none" }}
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Tambah Data Prodi</h5>
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
                                                            Kode Prodi
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={kode_prodi}
                                                                onChange={(e) => setKodeProdi(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputEmail3"
                                                            className="col-sm-2 col-form-label"
                                                        >
                                                            Nama Prodi
                                                        </label>
                                                        <div className="col-sm10">
                                                            <input
                                                                type="text"

                                                                className="form-control"
                                                                value={nama_prodi}
                                                                onChange={(e) => setNamaProdi(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label
                                                            for="inputPassword3"
                                                            className="col-sm2 col-form-label"
                                                        >
                                                            Singkatan
                                                        </label>
                                                        <div className="col-sm-10">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={singkatan}
                                                                onChange={(e) => setSingkatan(e.target.value)}
                                                            />
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
                                    Data Prodi <span> |Today</span>
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
                                                            Kode Prodi
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "2%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Nama Prodi
                                                        </a>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        data-sortable=""
                                                        style={{ width: "2%" }}
                                                    >
                                                        <a href="#" className="dataTable-sorter">
                                                            Singkatan
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
                                                {prodi.map((product, index) => (
                                                    <tr key={product.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{product.kode_prodi}</td>
                                                        <td>{product.nama_prodi}</td>
                                                        <td>{product.singkatan}</td>
                                                        <td>
                                                            <Link
                                                                to={`/prodi/${product.id}`}
                                                                className="btn btn-succes btn-sm"
                                                            >
                                                                Edit
                                                            </Link>
                                                            &nbsp;|&nbsp;
                                                            <button
                                                                onClick={() =>
                                                                    deleteProducts(product.id)}
                                                                className="btn brn-danger btn-sm"
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
    )
}

export default Prodi;