<template>

  <div style="margin-left: 20px;color: #bbbbbb;font-size: 10px">
    <div style="margin-top: 10px">
      <span>threshold:</span>
      <div style="display: inline-block;width: 28px"></div>
      <el-input @input="changeThreshold" v-model="threshold" style="display: inline-block;width: 60px;margin-left: 10px;" size="mini"></el-input>
    </div>

    <div style="margin-top: 10px">
      <span>minLineLength:</span>
      <el-input @input="changeMinLineLength" v-model="minLineLength" style="display: inline-block;width: 60px;margin-left: 10px;" size="mini"></el-input>
    </div>

    <div style="margin-top: 10px">
      <span>maxLineGap:</span>
      <div style="display: inline-block;width: 15px"></div>
      <el-input @input="changeMaxLineGap" v-model="maxLineGap" style="display: inline-block;width: 60px;margin-left: 10px;" size="mini"></el-input>
    </div>

  </div>

</template>

<script>
export default {
  name: "LineParam",
  data(){
    return{
      threshold:118,
      minLineLength:80,
      maxLineGap:15
    }
  },
  methods:{
    changeThreshold(){
      this.changeLineParam()
    },
    changeMinLineLength(){
      this.changeLineParam()
    },
    changeMaxLineGap(){
      this.changeLineParam()
    },
    changeLineParam(){
      let newLineParam={
        threshold:this.threshold,
        minLineLength:this.minLineLength,
        maxLineGap:this.maxLineGap
      }
      this.$store.commit('changeLineParam',newLineParam)

    }
  }
}
</script>

<style scoped>

</style>