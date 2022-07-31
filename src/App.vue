<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>


export default {
  name:"Layout",
  components:{

  }
}
</script>
<style lang="scss">
#app{
  background-color: whitesmoke;


}

.el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
// 上面隐藏横向滚动条会导致下拉框底部遮盖问题
.el-select-dropdown .el-scrollbar {
  padding-bottom: 17px;
}

</style>
