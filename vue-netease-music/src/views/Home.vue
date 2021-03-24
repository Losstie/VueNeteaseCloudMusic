<template>
  <div class="home">
    <TheHeader />
    <Carousel :banners="banners" />
    <IconNav />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";
import Carousel from "@/components/Swiper.vue";
import IconNav from "@/components/TheIconNav.vue";
import TheHeader from "@/components/TheHeader.vue";

import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
    };
  },
  components: {
    TheFooter,
    Carousel,
    IconNav,
    TheHeader,
  },
  mounted() {
    this.getKeywords();
    // this.getNews();
    this.getBanner();
  },
  methods: {
    // 获取搜索关键词
    getKeywords() {
      let _this = this;
      axios.get(_this.$store.state.HOST + "/search/default").then((res) => {
        let words = res.data.data.showKeyword;
        _this.$store.commit("SetKeywords", words);
      });
    },
    // 获取详细数
    getNews() {
      let _this = this;
      axios.get(_this.$store.state.HOST + "");
    },
    getBanner() {
      let _this = this;
      axios
        .get(_this.$store.state.HOST + "/banner?type=2")
        .then((response) => {
          console.log("轮播图 ===> ", response.data.banners);
          _this.banners = response.data.banners;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
