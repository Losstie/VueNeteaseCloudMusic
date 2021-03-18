<template>
    <div class="header">
        <ul>
            <li class="sidebar-user">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-cebianlan"></use>
                    </svg>
                </span>
                <span></span>
            </li>
            <li class="search">
                <input type="text" placeholder="placeholder">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                </span>
            </li>
            <li>
                <span class="item.feature">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-cebianlan_tinggeshiqu_"></use>
                    </svg>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "TheHeader",
    data(){
        return {
            placeholder:"",
            news:"",
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
        z-index: 666;
    }
    .itemlist {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }

</style>
