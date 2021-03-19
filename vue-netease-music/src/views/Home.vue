<template>
  <div class="home">
    <TheHeader/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    TheFooter,
    TheHeader,
  },
  mounted(){
    this.getKeywords();
  },
  methods: {
    getKeywords(){
      let _this = this;
      axios
        .get(_this.$store.state.HOST + "/search/default")
        .then((res)=>{
          let words = res.data.data.showKeyword;
          _this.$store.commit('SetKeywords', words);
        });
    },
    getNews(){
      let _this = this;
      axios
        .get(_this.$store.state.HOST+"")
    }
  }
};
</script>
