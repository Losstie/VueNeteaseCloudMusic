<template>
  <div class="home">
    <TheHeader/>
    <TheFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "Home",
  components: {
    TheFooter,
    TheHeader,
  },
};
</script>
