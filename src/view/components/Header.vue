<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid justify-content-between d-flex">
                <a class="navbar-brand" href="#">
                    <img src="https://previews.123rf.com/images/logomatch/logomatch1610/logomatch161000650/66645138-random-oval-shape-logo-overlapping-circle-symbol-creative-design.jpg"
                        alt="" class="logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Tools & App</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Channels</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Analytics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Settings</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-myend">
                    <div class="nav-end-text">
                        <h5>Help</h5>
                    </div>
                    <div class="navbar-end-img-cont">
                        <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="">
                        <div class="navbar-end-text">
                            <h5>Rex Pepple</h5>
                            <p>pepplerex01@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
.logo {
    width: 100px;
}

.navbar {
    border-bottom: 0.5px solid #e0e0e0;
}

.nav-item {
    margin-left: 20px;
    font-size: 17px;
}

.nav-link {
    font-weight: 500;
}

.navbar-myend {
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-end-text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 30px;
    border-right: 1px solid;
}

.navbar-myend h5 {
    margin-top: 5px;
    font-size: 15px;
}

.navbar-end-img-cont {
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-end-img-cont img {
    height: 35px;
    width: 40px;
    border-radius: 10px;
}

.navbar-end-text {
    margin-left: 14px;
    margin-right: 40px;
}

.navbar-end-text h5 {
    margin-top: 14px;
    font-size: 13px;
}

.navbar-end-text p {
    color: gray;
    font-size: 12px;
}
</style>