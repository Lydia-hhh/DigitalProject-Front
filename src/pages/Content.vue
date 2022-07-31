<template>
<div style="width:100%">
  <div style="display: flex;flex-direction: row;">
    <div style="flex:1">
      <div style="height: 355px">
        <UpWindow @event1="receiveResult"></UpWindow>
      </div>
      <div style="height: 20px;background: rgb(59,71,84)"></div>
      <div style="height: 355px">
        <DownWindow :route="route" :result="result"></DownWindow>
      </div>
    </div>
    <RightSide style="display: flex;"></RightSide>



  </div>



</div>
</template>

<script>
import UpWindow from "@/components/windows/UpWindow";
import DownWindow from "@/components/windows/DownWindow";
import RightSide from "@/components/windows/RightSide";
export default {
  name: "Content",
  components: {RightSide, DownWindow, UpWindow},
  data(){
    return{
      route:this.$route.path,
      result:{}
    }
  },
  methods:{
    getPath(){
      //console.log("route= "+this.$route.path)
    },
    receiveResult(result){
      this.result=result
    }
  },
  created() {
    this.route=this.$route.path
  },
  mounted() {
  },

  watch:{
    '$route':'getPath'
  }

}
</script>

<style scoped>

</style>