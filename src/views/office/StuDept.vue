<template>

<div style="background-color: #F5F5F7">
  <div style="font-size: small;color:#606266;">
    当前位置：软件工程学院 > 学生信息
  </div>
  <div style="height: 40px"></div>
  <div style="width: 80%;margin-left: 10%;height: 85%;filter: alpha(Opacity=80);" :style="conTop">
    <div style="height: 30px"></div>
    <div style="margin-left: 30px;font-size: 28px;font-weight: bold;background-color: white;padding: 5px;width: 30%">软件工程学院</div>
    <div style="height: 50px"></div>
    <div style="width: 100%;margin-left: 53%;height: 32%;">
      <div>
        <el-button type="text" class="grade" @click="toStuList">
          {{form.first}}级 <span style="margin-left: 40px">》</span>
        </el-button>
      </div>

      <div>
        <el-button type="text" class="grade">
          {{form.second}}级 <span style="margin-left: 40px">》</span>
        </el-button>
      </div>

      <div>
        <el-button type="text" class="grade">
          {{form.third}}级 <span style="margin-left: 40px">》</span>
        </el-button>
      </div>

      <div>
        <el-button type="text" class="grade">
          {{form.third}}级 <span style="margin-left: 40px">》</span>
        </el-button>
      </div>

    </div>


  </div>

</div>


</template>

<script>
export default {
  name: "StuDept",
  components:{

  },
  data(){
    return{
        conTop:{
          backgroundImage:"url("+require("../../image/bg3.jpg"),
          // width:"80%",
          // margin:"0 0 0 10%",
          // height:"85%",
          //opacity:0.5,
        },
      form:{
          first:'',
          second:'',
          third:'',
          forth:''
      }
    }
  },
  methods:{
    toStuList(){
      this.$router.push("/office/stulist/1");
    },
    loadData(){
      let date=new Date();
      let date1=(date.getMonth()+1)+"-"+date.getDate();
      let year=date.getFullYear();
      if(date1<"9-1"){
        this.form.first=year-4;
        this.form.second=year-3;
        this.form.third=year-2;
        this.form.forth=year-1;
      }else {
        this.form.first=year-3;
        this.form.second=year-2;
        this.form.third=year-1;
        this.form.forth=year;
      }



    }
  },
  mounted() {

  },
  created() {
    this.loadData();
  }
}
</script>

<style scoped>


.grade{
  font-size: 17px;
  margin-top: 25px;
  font-weight: bold;
}
.grade:active{
  color: #94949b;
}


</style>