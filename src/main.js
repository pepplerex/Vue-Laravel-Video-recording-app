import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./App.css";
import Dashboard from "./view/App.vue";
import App from "./App.vue";

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: Dashboard }],
});

const app = createApp(App).use(router).mount("#app");
