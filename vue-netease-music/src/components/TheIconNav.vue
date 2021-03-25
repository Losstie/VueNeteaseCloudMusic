<template>
  <div class="NavIcon">
      <cube-scroll
        ref="scroll"
        :data="navList"
        direction="horizontal"
        class="horizontal-scroll-list-wrap">
        <ul class="list-wrapper">
            <li v-for="(item, index) in navList" :key="index"  class="list-item">
                <router-link :to="item.path">
                    <span class="icon-warper">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    </span>
                    <span>{{ item.name }}</span>
                </router-link>

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
          path: "/DailyRecommend",
        },
        {
          name: "私人FM",
          icon: "#icon-FM",
          path: "/PerFM",
        },
        {
          name: "歌单",
          icon: "#icon-gedan",
          path: "/Songlist",
        },
        {
          name: "排行榜",
          icon: "#icon-paihang-copy-copy-copy",
          path: "/Rankinglist",
        },
        {
          name: "直播",
          icon: "#icon-zhibo",
          path: "/LiveTelecast",
        },
        {
          name: "数字专辑",
          icon: "#icon-zhuanji",
          path: "/DigitalAlbum",
        },
        {
          name: "歌房",
          icon: "#icon-hpncircle",
          path: "/SongRoom",
        },
        {
          name: "游戏专区",
          icon: "#icon-youxishoubing",
          path: "/Games",
        },
      ],
    };
  }
};
</script>
<style lang="scss">
.horizontal-scroll-list-wrap{
    display: flex;
    justify-content: center;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    .cube-scroll-content {
        display: inline-block;
    }
    .list-wrapper {
        padding: 0 0.625rem;
        white-space: nowrap;
    }
    .list-item{
        display: inline-block;
        text-align: center;
        margin-right: 1rem;
        padding: 0.8rem 0;
        .icon-warper {
            width: 3.75rem;
            height: 3.75rem;
            box-sizing: border-box;
            padding-top: 25%;
            border-radius: 50%;
            margin: 0 auto 0.2rem;
            text-align: center;
            background-color: #fdf1f1;
        }
        span {
            line-height: 2rem;
            font-size: 0.85rem;
            color:#959595;
            display: block;
        }
    }

}
.icon {
  width: 2rem;
  height: 2rem;
  /* font-size: 16pt; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
