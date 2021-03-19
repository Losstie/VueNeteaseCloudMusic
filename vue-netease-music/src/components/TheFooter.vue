<template>
    <div class="footer" >
        <ul class="item-page">
            <li v-for="(item, index) in itemList" :key="index" :class="{'active-page': item.name === activePage}" @click="goPage(item)">
                <span :class="{'active-icon': item.name === activePage}">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                </span>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
    name: "TheFooter",
    data(){
        return {
            itemList:[
                {
                    name: "发现",
                    icon: "#icon-wangyiyunyinle",
                    path: "/",
                },
                {
                    name: "播客",
                    icon: "#icon-duomeiti_duomeiti_shengbo",
                    path: "/podcast",
                },
                {
                    name: "我的",
                    icon: "#icon-Song",
                    path: "/user",
                },
                {
                    name: "k歌",
                    icon: "#icon-maikefeng",
                    path: "/k-song",
                },
                {
                    name: "云村",
                    icon: "#icon-renqun",
                    path: "/cloud-village",
                },
            ]
        };
    },
    computed: {
        ...mapGetters(['activePage']),
    },
    methods: {
        goPage(val) {
            this.$store.commit("SetActivePage", val.name);
            this.$router.push({path: val.path})
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 666;
    }
    .item-page {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color:  #eceae8;
        background-color:  #fff;

        li {
            width: 20%;
            height: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 8px;
            color: #959595;
        }
        .active-page {
            color: #d73e39;
        }
        .active-icon {
            background: linear-gradient(to right, #ff5a4c, #ff1d11);
            color: #ffffff;
            border-radius: 100%;
            min-width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .icon {
        width: 1rem;
        height: 1rem;
        /* font-size: 16pt; */
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
