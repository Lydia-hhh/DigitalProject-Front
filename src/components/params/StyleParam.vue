<template>
  <div>
    <div class="radios">
      <div class="param_label"><span>风格</span></div>
      <el-radio-group @change="changeStyle" size="mini" v-model="style">
        <el-radio :label="'wave'">神奈川冲浪里</el-radio>
        <el-radio :label="'wreck'">运输船遇难</el-radio>
        <el-radio :label="'qljst2'">千里江山图</el-radio>
        <el-radio :label="'scream'">呐喊</el-radio><div style="height: 15px"></div>
        <el-radio :label="'udnie'">皮卡比亚</el-radio>
        <el-radio :label="'rain_princess'">雨中女人</el-radio>
        <el-radio :label="'la_muse'">缪斯女神</el-radio>

      </el-radio-group>
    </div>

  </div>
</template>

<script>
export default {
  name: "StyleParam",
  data(){
    return{
      style:'la_muse'
    }
  },
  methods:{
    changeStyle(val){
      this.style=val
      let newStyleParam={
        style:val
      }
      this.$store.commit('changeStyleParam',newStyleParam)
    }
  }
}
</script>

<style scoped>
.radios{
  margin-left: 20px;
  margin-top: 10px;
}

::v-deep .el-radio{
  font-size: 10px;
  color: #bbbbbb;
  margin-right: 15px;
}
::v-deep .el-radio__original {
  width: 10px;
  height: 10px;
}

::v-deep .el-radio__inner {
  width: 10px;
  height: 10px;
}

::v-deep .el-radio__label{
  font-size: 10px;
  padding-left: 2px;
}
.param_label{
  margin-top: 10px;
  font-size: 10px;
  color: #bbbbbb;
  margin-bottom: 10px;
}
</style>