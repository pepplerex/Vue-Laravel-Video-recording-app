<template >
    <div class="mt-5">
        <div v-if="!isLoading">
            <table v-if="myVideos.length > 0" class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Recordings</th>
                        <th scope="col">Title</th>
                        <th scope="col">Views</th>
                        <th scope="col">Size</th>
                        <th scope="col">Last Modified</th>
                    </tr>
                </thead>
                <tbody class="recordings-body">

                    <tr v-for="(video, index) in myVideos" :key="index">
                        <td>
                            <img :src="video.img" alt="">
                        </td>
                        <td>
                            <div class="table-content">
                                <h6>{{ video.title }} </h6>
                                <p>{{ video.desc }} </p>
                            </div>
                        </td>
                        <td>{{ video.views }} </td>
                        <td>{{ video.size }} </td>
                        <td>{{ video.edited }} </td>
                        <td>
                            <div class="fa-solid fa-ellipsis"></div>
                        </td>
                    </tr>


                </tbody>
            </table>
            <div v-else>
                <div class="alert alert-info">No recent recordings</div>
            </div>
        </div>


        <div v-if="isLoading" class="loader">
            <div class=" spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            isLoading: true,
            myVideos: [
                {
                    img: "https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?s=612x612&w=0&k=20&c=SoTKXXMiJYnc4luzJz3gIdfup3MI8ZlROFNXRBruc10=",
                    title: "Getting it right the first time",
                    views: 324,
                    desc: "The Video description is shown here if the user has added it.",
                    size: "923 Kb",
                    edited: "3 months ago"
                },
                {
                    img: "https://media.istockphoto.com/id/492738668/photo/put-your-hands-up-in-the-air.jpg?s=612x612&w=0&k=20&c=E4suNSSyDnxuGei7NfyrY-aSm-cqmsrRrIhgniFdKb0=",
                    title: "Getting it right the first time",
                    views: 324,
                    desc: "The Video description is shown here if the user has added it.",
                    size: "923 Kb",
                    edited: "3 months ago"
                },
                {
                    img: "https://images.unsplash.com/photo-1591243315780-978fd00ff9db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D",
                    title: "Getting it right the first time",
                    views: 324,
                    desc: "The Video description is shown here if the user has added it.",
                    size: "923 Kb",
                    edited: "3 months ago"
                },

            ],
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1500);
    },
}
</script>
<style ></style>