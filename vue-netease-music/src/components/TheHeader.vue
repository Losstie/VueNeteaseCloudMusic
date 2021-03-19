<template>
    <div class="header">
        <SideBar v-bind:news="news"/>
        <Search/>
        <div class="learn-music">
            <span>
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tinggeshiqu40x40"></use>
                </svg>
            </span>
        </div>
    </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import Search from "@/components/Search.vue";

export default {
    name: "TheHeader",
    components:{
        SideBar,
        Search
    },
    data(){
        return {
            news:1,
            isShow: false
        }
    },
    computed: {

    }

}
</script>
<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        min-height: 50px;
        height: 50px;
        z-index: 666;
        background-color: #f0ede8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .learn-music {
            margin-right: 10px;
        }
    }
    .icon {
        width: 1.5rem;
        height: 1.5rem;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
