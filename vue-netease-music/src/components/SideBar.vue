<template>
    <div class="sidebar">
        <div class="btn" @click="triggleBar()">
            <span>
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-cebianlan"></use>
                </svg>
            </span>
            <span v-if="news>0" class="news">
                {{news}}
            </span>
        </div>
        <div class="bar" v-show="isShow">
            <div class="logInfo">
                <router-link to="/user">
                    <img :src="avatar" alt="headicon" v-show="nickName != '未登录'"/>
                    <span>{{nickName}}</span>
                    <span class="icon" aria-hidden="true">
                         <use xlink:href="#cebianlanzhankai"></use>
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "SideBar",
    computed:{
        ...mapGetters(['news','avatar','nickName','isShow'])
    },
    methods:{
        triggleBar(){
            console.log(111)
        }
    }

}
</script>
<style lang="scss" scoped>
    .btn {
        position: relative;
        .news {
            position: absolute;
            right: -15%;
            top:-10%;
            width: 1rem;
            height: 1rem;
            font-size: 0.55rem;
            background-color: #ff1d11;
            border-radius: 50%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .icon {
        width: 1.5rem;
        height: 1.5rem;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    // .bar {
    //     position: absolute;
    //     top:0;
    //     left:0;
    //     width: 80vw;
    //     height: 100vh;
    // }

</style>
