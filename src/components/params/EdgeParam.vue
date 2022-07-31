<template>
  <div>
    <div class="radios">
      <div class="param_label"><span>算子</span></div>
      <el-radio-group @change="changeOperator" size="mini" v-model="operator">
        <el-radio :label="'Roberts'">Roberts</el-radio>
        <el-radio :label="'Sobel'">Sobel</el-radio>
        <el-radio :label="'Laplacian'">Laplacian</el-radio>
        <el-radio :label="'LoG'">LoG</el-radio>
        <el-radio :label="'Canny'">Canny</el-radio>
      </el-radio-group>
    </div>

  </div>
</template>

<script>
export default {
  name: "EdgeParam",
  data(){
    return{
      operator:'Roberts'
    }
  },
  methods:{
    changeOperator(val){
      this.operator=val
      let newEdgeParam={
        operator:val
      }
      this.$store.commit('changeEdgeParam',newEdgeParam)
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