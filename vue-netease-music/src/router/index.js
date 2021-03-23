import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Podcast from "@/views/Podcast.vue";
import User from "@/views/User.vue";
import Ksong from "@/views/Ksong.vue";
import CloudVillage from "@/views/CloudVillage.vue";
import SearchPage from "@/views/SearchPage.vue";

Vue.use(VueRouter);

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
  {
    path: "/search",
    name: "SearchPage",
    component: SearchPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
