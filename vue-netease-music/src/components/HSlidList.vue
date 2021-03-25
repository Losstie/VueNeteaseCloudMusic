<template>
    <div class="horizontalSlid">
        <div class="slideTitle">
            <h3>{{title}}</h3>
            <p>
                <span>更多</span>
                 <span>
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                </span>
            </p>
        </div>
        <cube-scroll
            ref="scroll"
            :data="itemList"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
                <li v-for="(item, index) in itemList" :key="index"  class="list-item">
                    <router-link :to="item.path">

                    </router-link>

                </li>
            </ul>
        </cube-scroll>
    </div>
</template>
<script>
export default {
    name: 'HSlidList',
    props:{
        title: String,
        itemList: Array
    },

}
</script>
