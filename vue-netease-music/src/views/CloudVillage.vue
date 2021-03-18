<template>
  <div class="cloud-village">
    <div class="cloud-village-content">开发中...</div>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "CloudVillage",
  components: {
    TheFooter,
  },
};
</script>
<style lang="scss" scoped>
.cloud-village-content {
  text-align: center;
  margin-top: 100px;
}
</style>
