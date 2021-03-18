<template>
  <div class="k-song">
    <div class="ksong-content">开发中...</div>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Ksong",
  components: {
    TheFooter,
  },
};
</script>
<style lang="scss" scoped>
.ksong-content {
  text-align: center;
  margin-top: 100px;
}
</style>
