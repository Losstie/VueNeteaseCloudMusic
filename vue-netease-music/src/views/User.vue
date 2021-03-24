<template>
  <div class="user">
    <div class="user-content">开发中...</div>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "User",
  components: {
    TheFooter,
  },
};
</script>
<style lang="scss" scoped>
.user-content {
  text-align: center;
  margin-top: 100px;
}
</style>
