import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Podcast from "@/views/Podcast.vue";
import User from "@/views/User.vue";
import Ksong from "@/views/Ksong.vue";
import CloudVillage from "@/views/CloudVillage.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/podcast",
    name: "Podcasr",
    component: Podcast,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/k-song",
    name: "Ksong",
    component: Ksong,
  },
  {
    path: "/cloud-village",
    name: "CloudVillage",
    component: CloudVillage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
