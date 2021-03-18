import { createStore } from "vuex";

export default createStore({
  state: {
    HOST:'http://localhost:3000',
    activePage: "发现",
    news: "",
    placeholder:""
  },
  getters: {
    activePage: state => state.activePage,
    news: state => state.news,
    placeholder: state=> state.placeholder
  },
  mutations: {
    SetActivePage: (state, activePage) => { state.activePage = activePage },
    SetNews: (state, news) => { state.news = news },
    SetPlaceholder: (state, placeholder) => { state.placeholder = placeholder}
  },
  actions: {},
  modules: {},
});
