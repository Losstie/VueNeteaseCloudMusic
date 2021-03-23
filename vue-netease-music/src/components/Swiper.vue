<template>
    <div class="banner">
        <mt-swipe :atuo="4000" class="swiper">
            <mt-swipe-item v-for="(item,index) in banners" :key="index">
                <img :src="item.pic" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

export default {
    name: "Swiper",
    props:{
        banners:Array
    }

}
</script>
<style lang="scss" scoped>
    .banner {
        position: relative;
        height: 40vh;
        top: 70px;
        display: flex;
        justify-content: center;
        .swiper {
            position: absolute;
            width: 92vw;
            height: 40vh;
            border-radius: 8px;
            overflow: hidden;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
