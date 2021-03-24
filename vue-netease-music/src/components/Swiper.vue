<template>
  <div class="banner">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      :pagination="{ clickable: true }"
      class="myswiper"
      v-if="banners.length > 1"
    >
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <img :src="item.pic" alt="banner" />
        <span :style="{ 'background-color': item.titleColor }">{{
          item.typeTitle
        }}</span>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    banners: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
        loop: true,
        speed: 1000,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
  margin-top: 70px;
  height: 20vh;
  display: flex;
  justify-content: center;
  background-color: #fff;
  .myswiper {
    position: absolute;
    height: 20vh;
    width: 92vw;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1.2rem;
      padding: 0 6px;
      text-align: center;
      border-radius: 8px 0 8px 0;
      font-size: 0.8rem;
      color: #fff;
      z-index: 3;
    }
  }
}
</style>
