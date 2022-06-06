<template>
  <div style="display: flex">
    <OfficeAside/>
    <router-view style="flex: 1"></router-view>
  </div>
</template>

<script>
import OfficeAside from "@/components/OfficeAside";
export default {
  name: "OfficeLayout",
  components: {OfficeAside}
}
</script>

<style scoped>

</style>