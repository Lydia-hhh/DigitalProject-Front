<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div style="display: flex;flex-direction: row;">
      <div style="flex-grow: 4;background: rgb(43,43,43)">
        <router-view></router-view>
      </div>
<!--      <RightSide></RightSide>-->
    </div>
  </div>

</template>

<script>


import Header from "@/components/Header";
import RightSide from "@/components/windows/RightSide";

export default {
  name: "UserLayout",
  components:{
    RightSide,
    Header

  },
  methods:{

  },
  watch:{

  }
}
</script>

<style scoped>

</style>