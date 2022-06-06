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

      <el-menu-item index="/office/studept" >
        <i class="el-icon-user-solid"></i>
        <span>学生信息</span>
      </el-menu-item>



      <el-menu-item index="/office/teacherlist">
        <i class="el-icon-s-custom"></i>
        <span>教师信息</span>
      </el-menu-item>



      <el-menu-item index="/office/coursetype">
        <i class="el-icon-document"></i>
        <span>课程信息</span>
      </el-menu-item>






    </el-menu>


  </div>
</template>

<script>
export default {
  name: "OfficeAside",
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