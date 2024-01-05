<template>
    <div>
        <div class="mt-3">
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a>Snapbyte</a></li>
                    <li class="breadcrumb-item active" aria-current="page">My Recordings</li>
                </ol>
            </nav>

            <div class="content-heading">
                <h3>My Recordings <span>25</span></h3>
                <div class="content-items">
                    <div class="content-options">
                        <div class="content-item">
                            <i class="fa-solid fa-sort"></i>
                            By Date
                        </div>
                    </div>
                    <div class="content-options dropdown">
                        <div class="content-item dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa-solid fa-filter"></i> Add Filter
                        </div>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="content-options bg-info text-white">
                        <i class="fa-solid fa-video"></i>
                        <div class="content-item">New Request</div>
                    </div>
                    <div class="content-options bg-danger text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="fa-solid fa-record-vinyl"></i>
                        <div class="content-item">Start Recording</div>
                    </div>
                </div>
            </div>


        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Recording</h5>
                        <button id="myButton" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Save the recording in</p>
                        <select name="" id="" class="bg-light form-select">
                            <option value="">Select a project</option>
                        </select>
                        <div class="recording-settings">
                            <div class="recording-options">
                                <label class="form-check-label" for="flexSwitchCheckDefault">
                                    Record screen
                                </label>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault">
                                </div>
                            </div>
                            <div class="recording-options">
                                <label class="form-check-label" for="flexSwitchCheckDefault">
                                    Record camera
                                </label>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" checked type="checkbox" id="flexSwitchCheckDefault">
                                </div>
                            </div>
                            <div class="recording-options">
                                <label class="form-check-label" for="flexSwitchCheckDefault">
                                    Record mic
                                </label>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                </div>
                            </div>

                        </div>
                    </div>
                    <button @click="navigateWaiting" type="button"
                        class="btn col-8 text-white mx-auto rec-btn btn-info">Start
                        recording</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    methods: {
        navigateWaiting() {

            var myButton = document.getElementById('myButton');
            myButton.click();

            this.$router.push('/waiting')
        }
    },
}
</script>