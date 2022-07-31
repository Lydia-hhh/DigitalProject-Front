<template>
  <div>

    <!---basic--->
    <div v-if="basicShow">
      <div style="width: 100%;border-right: 6px solid rgb(89,91,93);border-left: 6px solid rgb(89,91,93);
    border-top: 6px solid rgb(89,91,93);height: 320px;
    display: flex;justify-content: space-evenly;align-items: center;padding-top: 20px">

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 600px;height: 300px;"
              :src="result.result"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>result</span>
          </div>
        </div>

      </div>
      <div style="width: 100%;border-right: 6px solid rgb(89,91,93);border-left: 6px solid rgb(89,91,93);
    border-top: 6px solid rgb(89,91,93);height: 320px;
    display: flex;justify-content: space-evenly;align-items: center;padding-top: 20px">

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 350px;height: 300px"
              :src="result.RorH"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>R/H</span>
          </div>
        </div>
        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 350px;height: 300px"
              :src="result.GorS"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>G/S</span>
          </div>
        </div>
        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 350px;height: 300px"
              :src="result.BorV"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>B/V</span>
          </div>
        </div>

      </div>
      <div style="width: 100%;border: 6px solid rgb(89,91,93);height: 320px;
    display: flex;justify-content: space-evenly;align-items: center;padding-top: 20px">
        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 600px;height: 300px"
              :src="result.histogram"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>histogram</span>
          </div>
        </div>
      </div>
    </div>


    <!---morpho-->
    <div v-if="morphoShow">
      <div style="width: 100%;border-right: 6px solid rgb(89,91,93);border-left: 6px solid rgb(89,91,93);
    border-top: 6px solid rgb(89,91,93);height: 320px;
    display: flex;justify-content: space-evenly;align-items: center;padding-top: 20px">

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 450px;height: 300px"
              :src="result.open"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>open</span>
          </div>
        </div>

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 450px;height: 300px"
              :src="result.close"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>close</span>
          </div>
        </div>

      </div>
      <div style="width: 100%;border: 6px solid rgb(89,91,93);height: 320px;
    display: flex;justify-content: space-evenly;align-items: center;padding-top: 20px">

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 450px;height: 300px"
              :src="result.erosion"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>erosion</span>
          </div>
        </div>

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 450px;height: 300px"
              :src="result.dilation"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>dilatiion</span>
          </div>
        </div>

      </div>

    </div>


    <!---noise------edge-->
    <div v-if="noiseShow || edgeShow || styleShow">
      <div style="width: 100%;border: 6px solid rgb(89,91,93);height: 320px;
    display: flex;justify-content: space-evenly;align-items: center;padding-top: 20px">
        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 600px;height: 300px"
              :src="result.url"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>result</span>
          </div>
        </div>

      </div>
    </div>

    <!--line--->
    <div v-if="lineShow">
      <div style="width: 100%;border: 6px solid rgb(89,91,93);height: 320px;
    display: flex;justify-content: space-evenly;align-items: center;padding-top: 20px">

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 450px;height: 300px"
              :src="result.res1"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>result1</span>
          </div>
        </div>

        <div style="margin-left: 20px;margin-top: 10px">
          <el-image
              style="width: 450px;height: 300px"
              :src="result.res2"
              :fit="'contain'"></el-image>
          <div style="height: 50px;margin-top: 10px;margin-left: 20px;color: #bbbbbb">
            <span>result2</span>
          </div>
        </div>

      </div>


    </div>


  </div>



</template>

<script>
export default {
  name: "DownWindow",
  data(){
    return{
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      basicShow:false,
      morphoShow:false,
      noiseShow:false,
      edgeShow:false,
      lineShow:false,
      styleShow:false

    }
  },
  props:{
    route:{
      type:String
    },
    result:{
      type:Object
    }
  },
  methods: {
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
      }else if(coreRoute==="style"){
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
::v-deep img{
  background: rgb(89,91,93);
}


</style>