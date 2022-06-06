<template>
  <div style="display: flex">
    <StuAside/>
    <router-view style="flex: 1"></router-view>
  </div>
</template>

<script>
import StuAside from "@/components/StuAside";

export default {
  name: "UserLayout",
  components:{
    StuAside,
  }
}
</script>

<style scoped>

</style>