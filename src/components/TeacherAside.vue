<template>
  <div>

    <el-menu
        :default-active="index"
        class="el-menu-vertical-demo"
        style="width: 200px;min-height: calc(100vh - 50px);height: 100%"
        background-color="#313132"
        text-color="white"
        active-text-color="#ffd04b"
        :router="true"
    >
      <div style="height: 40px;margin-top: 20px;text-align: center">
        <span style="height: 30px;line-height: 30px;color:white;font-weight: bold">课 程 管 理</span>
      </div>
      <div style="height: 20px"></div>


      <el-menu-item index="/teacher/info" >
        <i class="el-icon-s-home"></i>
        <span>个人信息</span>
      </el-menu-item>



      <el-menu-item index="/teacher/coursetable">
        <i class="el-icon-search"></i>
        <span>查看课表</span>
      </el-menu-item>



      <el-menu-item index="/teacher/coursedetail">
        <i class="el-icon-document"></i>
        <span>课程信息</span>
      </el-menu-item>




      <el-menu-item index="/teacher/givescore">
        <i class="el-icon-notebook-2"></i>
        <span>成绩评定</span>
      </el-menu-item>



    </el-menu>


  </div>
</template>

<script>




export default {
  name: "TeacherAside",
  components:{

  },
  data(){
    return{
      index:'/',
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

</style>