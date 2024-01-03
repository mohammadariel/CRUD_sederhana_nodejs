import Dashboard from './Layout/Dashboard.js';
import Mahasiswa from './Form/Mahasiswa.js';
import EditMahasiswa from './Form/EditMahasiswa.js';
import Peminjaman from './Form/Peminjaman.js';
import AksiPinjam from './Form/FormPinjam.js';
import ProsesPinjam from './Form/ProsesPinjam.js';
import Prodi from './Form/Prodi.js';
import EditProdi from './Form/EditProdi.js';
import Buku from './Form/Buku.js';
import EditBuku from './Form/EditBuku.js';

const routes = [
     { path: '/', component: <Dashboard />, exact: true },
     { path: '/mhs', component: <Mahasiswa /> },
     { path: '/mhs/:id', component: <EditMahasiswa /> },
     { path: '/peminjaman', component: <Peminjaman /> },
     { path: '/pinjamaksi', component: <AksiPinjam /> },
     { path: '/pinjamaksi/:id', component: <ProsesPinjam /> },
     { path: '/prodi', component: <Prodi />},
     { path: '/prodi/:id', component: <EditProdi />},
     { path: '/buku', component: <Buku />},
     { path: '/buku/:id', component: <EditBuku />},
];

export default routes;