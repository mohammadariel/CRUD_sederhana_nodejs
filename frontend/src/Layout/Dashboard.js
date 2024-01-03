import React from "react";
function Dashboard() {

    return (
        <main id="main" class="main">
            <div class="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
            </div>
            <section class="section dashboard">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-xxl-4 col-md-6">
                                <div class="card info-card sales-card">
                                    <div class="filter">
                                        <a class="icon" href="#" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end dropdownmenu-arrow">
                                            <li class="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Today
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    This Month
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    This Year
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Sales <span>| Today</span>
                                        </h5>
                                        <div class="d-flex align-items-center">
                                            <div class="card-icon rounded-circle d-flex alignitems-center justify-content-center">
                                                <i class="bi bi-cart"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>145</h6>
                                                <span class="text-success small pt-1 fw-bold">
                                                    12%
                                                </span>{" "}
                                                <span class="text-muted small pt-2 ps1">increase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-md-6">
                                <div class="card info-card revenue-card">
                                    <div class="filter">
                                        <a class="icon" href="#" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end dropdownmenu-arrow">
                                            <li class="dropdown-header text-start">
                                                <h6>Filter</h6>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Today
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    This Month
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    This Year
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Revenue <span>| This Month</span>
                                        </h5>
                                        <div class="d-flex align-items-center">
                                            <div class="card-icon rounded-circle d-flex alignitems-center justify-content-center">
                                                <i class="bi bi-currency-dollar"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h6>$3,264</h6>
                                                <span class="text-success small pt-1 fw-bold">
                                                    8%
                                                </span>{" "}
                                                <span class="text-muted small pt-2 ps1">increase</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown">
                                    <i class="bi bi-three-dots"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menuarrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Today
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Month
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Year
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">
                                    Recent Activity <span>| Today</span>
                                </h5>
                                <div class="activity">
                                    <div class="activity-item d-flex">
                                        <div class="activite-label">32 min</div>
                                        <i class="bi bi-circle-fill activity-badge textsuccess align-self-start"></i>
                                        <div class="activity-content">
                                            Quia quae rerum{" "}
                                            <a href="#" class="fw-bold text-dark">
                                                explicabo officiis
                                            </a>{" "}
                                            beatae
                                        </div>
                                    </div>
                                    <div class="activity-item d-flex">
                                        <div class="activite-label">56 min</div>
                                        <i class="bi bi-circle-fill activity-badge textdanger align-self-start"></i>
                                        <div class="activity-content">
                                            Voluptatem blanditiis blanditiis eveniet
                                        </div>
                                    </div>
                                    <div class="activity-item d-flex">
                                        <div class="activite-label">2 hrs</div>
                                        <i class="bi bi-circle-fill activity-badge textprimary align-self-start"></i>
                                        <div class="activity-content">
                                            Voluptates corrupti molestias voluptatem
                                        </div>
                                    </div>
                                    <div class="activity-item d-flex">
                                        <div class="activite-label">1 day</div>
                                        <i class="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                                        <div class="activity-content">
                                            Tempore autem saepe{" "}
                                            <a href="#" class="fw-bold text-dark">
                                                occaecati voluptatem
                                            </a>{" "}
                                            tempore
                                        </div>
                                    </div>
                                    <div class="activity-item d-flex">
                                        <div class="activite-label">2 days</div>
                                        <i class="bi bi-circle-fill activity-badge textwarning align-self-start"></i>
                                        <div class="activity-content">
                                            Est sit eum reiciendis exercitationem
                                        </div>
                                    </div>
                                    <div class="activity-item d-flex">
                                        <div class="activite-label">4 weeks</div>
                                        <i class="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                                        <div class="activity-content">
                                            Dicta dolorem harum nulla eius. Ut quidem quidem
                                            sit quas
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown">
                                    <i class="bi bi-three-dots"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menuarrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Today
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Month
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Year
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body pb-0">
                                <h5 class="card-title">
                                    Budget Report <span>| This Month</span>
                                </h5>
                                <div
                                    id="budgetChart"
                                    style={{
                                        height: "400px",
                                        select: "none",
                                        color: "rgba(0, 0, 0, 0)",
                                    }}
                                    class="echart"
                                    _echarts_instance_="ec_1700724054341"
                                >
                                    <div>
                                        <canvas
                                            data-zr-dom-id="zr_0"
                                            width="802"
                                            height="600"
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown">
                                    <i class="bi bi-three-dots"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menuarrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Today
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Month
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Year
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body pb-0">
                                <h5 class="card-title">
                                    Website Traffic <span>| Today</span>
                                </h5>
                                <div
                                    id="trafficChart"
                                    class="echart"
                                    _echarts_instance_="ec_1700724054342"
                                >
                                    <div>
                                        <canvas
                                            data-zr-dom-id="zr_0"
                                            width="802"
                                            height="600"
                                        ></canvas>
                                    </div>
                                    <div class=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown">
                                    <i class="bi bi-three-dots"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menuarrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Today
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Month
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            This Year
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body pb-0">
                                <h5 class="card-title">
                                    News &amp; Updates <span>| Today</span>
                                </h5>
                                <div class="news">
                                    <div class="post-item clearfix">
                                        <img src="assets/img/news-1.jpg" alt="" />
                                        <h4>
                                            <a href="#">Nihil blanditiis at in nihil autem</a>
                                        </h4>
                                        <p>
                                            Sit recusandae non aspernatur laboriosam. Quia enim
                                            eligendi sed ut harum...
                                        </p>
                                    </div>
                                    <div class="post-item clearfix">
                                        <img src="assets/img/news-2.jpg" alt="" />
                                        <h4>
                                            <a href="#">Quidem autem et impedit</a>
                                        </h4>
                                        <p>
                                            Illo nemo neque maiores vitae officiis cum eum
                                            turos elan
                                            dries werona nande...
                                        </p>
                                    </div>
                                    <div class="post-item clearfix">
                                        <img src="assets/img/news-3.jpg" alt="" />
                                        <h4>
                                            <a href="#">
                                                Id quia et et ut maxime similique occaecati ut
                                            </a>
                                        </h4>
                                        <p>
                                            Fugiat voluptas vero eaque accusantium eos.
                                            Consequuntur
                                            sed ipsam et totam...
                                        </p>
                                    </div>
                                    <div class="post-item clearfix">
                                        <img src="assets/img/news-4.jpg" alt="" />
                                        <h4>
                                            <a href="#">Laborum corporis quo dara net para</a>
                                        </h4>
                                        <p>
                                            Qui enim quia optio. Eligendi aut asperiores enim
                                            repellendusvel rerum cuder...
                                        </p>
                                    </div>
                                    <div class="post-item clearfix">
                                        <img src="assets/img/news-5.jpg" alt="" />
                                        <h4>
                                            <a href="#">Et dolores corrupti quae illo quod
                                                dolor</a>
                                        </h4>
                                        <p>
                                            Odit ut eveniet modi reiciendis. Atque cupiditate
                                            libero
                                            beatae dignissimos eius...
                                        </p>
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
export default Dashboard;