<template>
  <div class="search">
    <input type="text" :placeholder="getKeywords" @click="goSearch()" />
    <span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Search",
  computed: {
    ...mapGetters(["getKeywords"]),
  },
  methods: {
    goSearch() {
      this.$router.push({ path: "/search" });
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  width: 70vw;
  input {
    width: 100%;
    height: 2.25rem;
    border: 0;
    border-radius: 1rem;
    line-height: 2.25rem;
    font-size: 0.75rem;
    text-indent: 2.5rem;
    background-color: #fdfdfd;
    color: #a7a7a7;
  }
  span {
    position: absolute;
    top: 25%;
    left: 1rem;
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
