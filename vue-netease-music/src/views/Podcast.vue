<template>
  <div class="podcast">
    <div class="podcast-content">开发中...</div>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "Podcast",
  components: {
    TheFooter,
  },
};
</script>
<style lang="scss" scoped>
.podcast-content {
  text-align: center;
  margin-top: 100px;
}
</style>
