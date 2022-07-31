<template>
  <div>
    <div class="radios">
      <div class="param_label"><span>结构元长度</span></div>
      <el-radio-group @change="changeLen" size="mini" v-model="len">
        <el-radio :label="3">3</el-radio>
        <el-radio :label="5">5</el-radio>
        <el-radio :label="7">7</el-radio>
        <el-radio :label="9">9</el-radio>
        <el-radio :label="11">11</el-radio>
        <el-radio :label="13">13</el-radio>
        <el-radio :label="15">15</el-radio>
      </el-radio-group>
    </div>

  </div>


</template>

<script>
export default {
  name: "MorphoParam",
  data(){
    return{
      len:3
    }
  },
  methods:{
    changeLen(val){
      this.len=val
      let newMorphoParam={
        len:this.len
      }
      this.$store.commit('changeMorphoParam',newMorphoParam)
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
  margin-right: 20px;
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