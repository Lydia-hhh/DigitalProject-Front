<template>
  <div style="display: flex">
    <TeacherAside/>
    <router-view style="flex: 1"></router-view>
  </div>
</template>

<script>
import TeacherAside from "@/components/TeacherAside";
export default {
  name: "TeacherLayout",
  components:{
    TeacherAside
  }
}
</script>

<style scoped>

</style>