<template>
  <div style="width:350px;background:rgb(60,63,65);height:calc(100vh + 700px);border-left: 10px solid rgb(49,51,53)">
    <BasicParam v-if="basicShow"></BasicParam>
    <MorphoParam v-if="morphoShow"></MorphoParam>
    <NoiseParam v-if="noiseShow"></NoiseParam>
    <EdgeParam v-if="edgeShow"></EdgeParam>
    <LineParam v-if="lineShow"></LineParam>
    <StyleParam v-if="styleShow"></StyleParam>
  </div>
</template>

<script>
import BasicParam from "@/components/params/BasicParam";
import MorphoParam from "@/components/params/MorphoParam";
import NoiseParam from "@/components/params/NoiseParam";
import EdgeParam from "@/components/params/EdgeParam";
import LineParam from "@/components/params/LineParam";
import StyleParam from "@/components/params/StyleParam";
export default {
  name: "RightSide",
  components: {StyleParam, LineParam, EdgeParam, NoiseParam, MorphoParam, BasicParam},
  data(){
    return{
      basicShow:false,
      morphoShow:false,
      noiseShow:false,
      edgeShow:false,
      lineShow:false,
      styleShow:false
    }
  },
  methods:{
    getPath(){
      let route=this.$route.path;
      let routeAry=route.split("/")
      let coreRoute=routeAry[1]
      if(coreRoute==="basic"){
        this.basicShow=true;this.morphoShow=false;this.noiseShow=false;
        this.edgeShow=false;this.lineShow=false;this.styleShow=false;
      }else if(coreRoute==="morpho"){
        this.basicShow=false;this.morphoShow=true;this.noiseShow=false;
        this.edgeShow=false;this.lineShow=false;this.styleShow=false;
      }else if(coreRoute==="noise"){
        this.basicShow=false;this.morphoShow=false;this.noiseShow=true;
        this.edgeShow=false;this.lineShow=false;this.styleShow=false;
      }else if(coreRoute==="edge"){
        this.basicShow=false;this.morphoShow=false;this.noiseShow=false;
        this.edgeShow=true;this.lineShow=false;this.styleShow=false;
      }else if(coreRoute==="line"){
        this.basicShow=false;this.morphoShow=false;this.noiseShow=false;
        this.edgeShow=false;this.lineShow=true;this.styleShow=false;
      }else if(coreRoute==='style'){
        this.basicShow=false;this.morphoShow=false;this.noiseShow=false;
        this.edgeShow=false;this.lineShow=false;this.styleShow=true;
      }
    }
  },
  created() {
    this.getPath()
  },
  watch:{
    '$route':'getPath'
  }
}
</script>

<style scoped>

</style>