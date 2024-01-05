<script setup>
import RecordingNav from "./RecordingNav.vue";
import SideBar from "./Sidebar.vue";
import Recordings from "./Recordings.vue";
import RecordScreen from "./RecordScreen.vue";
</script>

<template>
    <div class="dashboard-container">
        <div class="container-fluid">
            <div class="row" v-if="showRecordings">
                <div class="col-md-3 app-sidebar">
                    <SideBar />
                </div>
                <div class="col-md-9 app-content">
                    <!-- <RecordingNav /> -->

                    <div>
                        <div class="mt-3">
                            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a>Snapbyte</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">My Recordings</li>
                                </ol>
                            </nav>

                            <div class="content-heading">
                                <h3>My Recordings <span>3</span></h3>
                                <div class="content-items">
                                    <div class="content-options">
                                        <div class="content-item">
                                            <i class="fa-solid fa-sort"></i>
                                            By Date
                                        </div>
                                    </div>
                                    <div class="content-options dropdown">
                                        <div class="content-item dropdown-toggle" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <div @click="requestMediaAccess" class="content-options bg-danger text-white"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i class="fa-solid fa-record-vinyl"></i>
                                        <div class="content-item">Start Recording</div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
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
                                                <label class="form-check-label" for="flexSwitchCheckDefault1">
                                                    Record screen
                                                </label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" checked type="checkbox"
                                                        id="flexSwitchCheckDefault1">
                                                </div>
                                            </div>
                                            <div class="recording-options">
                                                <label class="form-check-label" for="flexSwitchCheckDefault2">
                                                    Record camera
                                                </label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" checked type="checkbox"
                                                        id="flexSwitchCheckDefault2">
                                                </div>
                                            </div>
                                            <div class="recording-options">
                                                <label class="form-check-label" for="flexSwitchCheckDefault3">
                                                    Record mic
                                                </label>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="flexSwitchCheckDefault3">
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <button @click="navigateWaiting" type="button"
                                        class="btn col-8 text-white mx-auto rec-btn btn-info" v-if="isLoading">
                                        Initializing call
                                        <div class="spinner-border spinner-border-sm" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </button>

                                    <button @click="navigateWaiting" type="button"
                                        class="btn col-8 text-white mx-auto rec-btn btn-info" v-else>
                                        Start recording
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- end rexc nav  -->
                    <Recordings />
                </div>
            </div>
            <div class="row">
                <RecordScreen v-if="showRec" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showRecordings: true,
            showRec: false,
            isLoading: false,
        }
    },
    methods: {

        async requestMediaAccess() {
            try {
                // Checking if the user has already granted permission
                const cameraPermission = await navigator.permissions.query({ name: 'camera' });
                const microphonePermission = await navigator.permissions.query({ name: 'microphone' });

                if (cameraPermission.state === 'granted' && microphonePermission.state === 'granted') {
                    // User has already granted permission
                    console.log('Permission already granted.');
                } else {
                    // Request permission if not granted
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: true,
                        audio: true,
                    });

                    // Attach the stream to a video element
                    const videoElement = this.$refs.videoElement;
                    videoElement.srcObject = stream;

                    console.log('Permission granted.');
                }
            } catch (error) {
                console.error('Error accessing media devices:', error);
            }
        },


        navigateWaiting() {

            var myButton = document.getElementById('myButton');

            this.isLoading = true

            setTimeout(() => {
                myButton.click();
                this.isLoading = false
                this.showRecordings = !this.showRecordings;
                this.showRec = !this.showRec
            }, 800);

            // this.$router.push('/waiting')
        },
    },
}
</script>