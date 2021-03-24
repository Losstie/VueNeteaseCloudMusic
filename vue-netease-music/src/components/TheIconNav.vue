<template>
  <div class="NavIcon">
      <cube-scroll
        ref="scroll"
        :data="navList"
        direction="horizontal"
        class="horizontal-scroll-list-wrap">
        <ul class="list-wrapper">
            <li v-for="(item, index) in navList" :key="index"  class="list-item">
                <span class="icon-warper">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                </span>
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </cube-scroll>

  </div>
</template>

<script>
export default {
  name: "IconNav",
  data() {
    return {
      navList: [
        {
          name: "每日推荐",
          icon: "#icon-rili",
          path: "",
        },
        {
          name: "私人FM",
          icon: "#icon-FM",
          path: "",
        },
        {
          name: "歌单",
          icon: "#icon-gedan",
          path: "",
        },
        {
          name: "排行榜",
          icon: "#icon-paihang-copy-copy-copy",
          path: "",
        },
        {
          name: "直播",
          icon: "#icon-zhibo",
          path: "",
        },
        {
          name: "数字专辑",
          icon: "#icon-zhuanji",
          path: "",
        },
        {
          name: "歌房",
          icon: "#icon-hpncircle",
          path: "",
        },
        {
          name: "游戏专区",
          icon: "#icon-youxishoubing",
          path: "",
        },
      ],
    };
  },
  methods: {
    goPage(val) {
      this.$router.push({ path: val.path });
    },
  },
};
</script>
<style lang="scss">
.horizontal-scroll-list-wrap{
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    .cube-scroll-content {
        display: inline-block;
    }
    .list-wrapper {
        padding: 0 10px;
        line-height: 60px;
        white-space: nowrap;
    }
    .list-item{
        display: inline-block
    }
}
.icon {
  width: 2rem;
  height: 2rem;
  /* font-size: 16pt; */
  vertical-align: -0.15em;
  fill: red;
  overflow: hidden;
}
</style>
