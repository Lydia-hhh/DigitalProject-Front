<template>
  <el-menu
      router
      :default-active="index"
      class="el-menu-vertical-demo"
      background-color="#3C3F41"
      text-color="#BBBBBB"
      active-text-color="#3A91CF"
      mode="horizontal"
  >

    <el-menu-item index="/basic" >
      <span>基础功能</span>
    </el-menu-item>


    <el-menu-item index="/morpho">
      <span>图像形态学</span>
    </el-menu-item>


    <el-menu-item index="/noise">
      <span>噪声滤除</span>
    </el-menu-item>

    <el-menu-item index="/edge">
      <span>边缘检测</span>
    </el-menu-item>

    <el-menu-item index="/line">
      <span>线条变化检测</span>
    </el-menu-item>

    <el-menu-item index="/style">
      <span>风格迁移</span>
    </el-menu-item>


  </el-menu>



</template>

<script>
export default {
  name: "Header",
  data(){
    return{

      index:'/basic'
    }
  },
  methods:{


  },

  mounted() {
    this.index=this.$route.path;
  },
}
</script>



<style scoped>
::v-deep li.el-menu-item span{
  font-size:10px;
}
::v-deep ul{
  height: 40px;
}
::v-deep li.el-menu-item{
  height: 40px;
  line-height: 40px;
}


</style>