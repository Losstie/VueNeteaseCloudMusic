import { createStore } from "vuex";

export default createStore({
  state: {
    HOST:'http://localhost:3000',
    activePage: "发现",
    news: 1,
    curKeywords:""
  },
  getters: {
    activePage: state => state.activePage,
    news: state => state.news,
    getKeywords: state=> state.curKeywords
  },
  mutations: {
    SetActivePage: (state, activePage) => { state.activePage = activePage },
    SetNews: (state, news) => { state.news = news },
    SetKeywords: (state, curKeywords) => { state.curKeywords = curKeywords}
  },
  actions: {},
  modules: {},
});
