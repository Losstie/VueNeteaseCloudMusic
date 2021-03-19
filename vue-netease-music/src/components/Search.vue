<template>
    <div class="search">
        <input type="text" :placeholder="getKeywords" @click="goSearch()">
        <span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "Search",
    computed: {
        ...mapGetters(['getKeywords'])
    },
    methods:{
        goSearch(){
            this.$router.push({path: "/search"})
        }
    }
}
</script>
<style lang="scss" scoped>
    .search {
        position: relative;
        width: 70vw;
        input {
            width: 100%;
            height: 36px;
            border: 0;
            border-radius: 15px;
            line-height: 36px;
            font-size: 12px;
            text-indent: 15%;
            background-color: #fdfdfd;
            color: #a7a7a7;
        }
        span {
            position: absolute;
            top: 25%;
            left: 6%;
        }
    }

    .icon {
        width: 1.25rem;
        height: 1.25rem;
        vertical-align: -0.15em;
        fill: #ababab;
        overflow: hidden;
    }
</style>
