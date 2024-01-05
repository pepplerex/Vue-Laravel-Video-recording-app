<template>
    <div>
        <img style="width: 130px; height: 130px; border-radius: 50%" :src=img alt="" srcset="">
        <h2>{{ name }}</h2>
        <h5>{{ email }}</h5>
        <button class="btn btn-primary" @click="generate()">Get random user</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "John doe",
            email: "random@email.com",
            img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg",
        }
    },
    methods: {
        async generate() {
            const user = await fetch("https://randomuser.me/api")
            const res = await user.json()

            const { results } = res

            this.name = results[0].name.first;
            this.email = results[0].email;
            this.img = results[0].picture.large
        }
    }

}
</script>
