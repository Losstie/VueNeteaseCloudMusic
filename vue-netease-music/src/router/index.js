import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Podcast from "@/views/Podcast.vue";
import User from "@/views/User.vue";
import Ksong from "@/views/Ksong.vue";
import CloudVillage from "@/views/CloudVillage.vue";
import SearchPage from "@/views/SearchPage.vue";
import DailyRecommend from "@/views/DailyRecommend.vue";
import DigitalAlbum from "@/views/DigitalAlbum.vue";
import Games from "@/views/Games.vue";
import LiveTelecast from "@/views/LiveTelecast.vue";
import PerFM from "@/views/PerFM.vue";
import RankingList from "@/views/RankingList.vue";
import SongList from "@/views/SongList.vue";
import SongRoom from "@/views/SongRoom.vue";


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
  {
    path: "/DailyRecommend",
    name: "DailyRecommend",
    component: DailyRecommend,
  },
  {
    path: "/PerFM",
    name: "PerFM",
    component: PerFM,
  },
  {
    path: "/Songlist",
    name: "SongList",
    component: SongList,
  },
  {
    path: "/Rankinglist",
    name: "RankingList",
    component: RankingList,
  },
  {
    path: "/LiveTelecast",
    name: "LiveTelecast",
    component: LiveTelecast,
  },
  {
    path: "/DigitalAlbum",
    name: "DigitalAlbum",
    component: DigitalAlbum,
  },
  {
    path: "/SongRoom",
    name: "SongRoom",
    component: SongRoom,
  },
  {
    path: "/Games",
    name: "Games",
    component: Games,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
