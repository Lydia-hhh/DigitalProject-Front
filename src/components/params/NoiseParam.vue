<template>
  <div>
    <div class="radios">、
      <div class="param_label"><span>滤波器</span></div>
      <el-radio-group @change="changeFilter" v-model="filter" size="mini">
        <el-radio-button label="average">均值类</el-radio-button>
        <el-radio-button label="sort">排序统计类</el-radio-button>
        <el-radio-button label="selectivity">选择性</el-radio-button>
      </el-radio-group>
    </div>

  </div>
</template>

<script>
export default {
  name: "NoiseParam",
  data(){
    return{
      filter:'selectivity'
    }
  },
  methods:{
    changeFilter(val){
      this.filter=val;
      let newNoiseParam={
        filter:this.filter
      }
      this.$store.commit('changeNoiseParam',newNoiseParam)
    }
  }
}
</script>

<style scoped>

::v-deep .el-radio-button--mini .el-radio-button__inner {
  padding: 2px 2px;
  font-size: 10px;
  border-radius: 0;
}
::v-deep .el-radio-button{
  margin-right: 30px;
}

.radios{
  margin-left: 20px;
}

.param_label{
  font-size: 10px;
  color: #bbbbbb;
  margin-bottom: 10px;
}
</style>