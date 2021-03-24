import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    HOST: "http://localhost:3000",
    activePage: "发现",
    news: 0,
    avatar: "#",
    nickName: "未登录",
    curKeywords: "",
  },
  getters: {
    activePage: (state) => state.activePage,
    news: (state) => state.news,
    getKeywords: (state) => state.curKeywords,
    avatar: (state) => state.avatar,
    nickName: (state) => state.nickName,
    isShow: (state) => state.isShow,
  },
  mutations: {
    SetActivePage: (state, activePage) => {
      state.activePage = activePage;
    },
    SetNews: (state, news) => {
      state.news = news;
    },
    SetKeywords: (state, curKeywords) => {
      state.curKeywords = curKeywords;
    },
    SetAvatar: (state, avatar) => {
      state.avatar = avatar;
    },
    Set,
  },
  actions: {},
  modules: {},
});
