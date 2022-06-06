<template>

  <div style="background-color: #F5F5F7">

    <div style="font-size: small;color:#606266;">
      当前位置：教师信息
    </div>
    <div style="height: 40px"></div>
    <div style="width: 80%;margin-left: 10%;background-color: white;height: 85%;">
      <div style="height: 100%;display: flex">

        <div style="display: inline-block; width: 50%;">
          <div style="width: 100%;text-align: center;background-color: #B4B4B4">
            <div>
              <el-button type="text" class="dept1" @click="toStuList">外语院部</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">体育与健康学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">生物学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">心理学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">新闻学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">中国语言文学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">社会学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">地理科学学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">化学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">物理学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept1">数学科学学院</el-button>
            </div>



          </div>

        </div>

        <div style="display: inline-block;width: 50%;align-self: flex-end">
          <div style="width: 100%;text-align: center;background-color: #2D2D2D">
            <div>
              <el-button type="text" class="dept">软件工程</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">计算机科学与技术学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">教育学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">马克思主义学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">经济学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">统计学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">法学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">设计学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">公共管理学院</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">历史学系</el-button>
            </div>
            <div>
              <el-button type="text" class="dept">政治与国际关系学院</el-button>
            </div>
          </div>
        </div>


      </div>


    </div>

  </div>

</template>

<script>
export default {
  name: "TeachDept",
  methods:{
    toStuList(){
      this.$router.push("/office/teachlist/param");
    }
  }
}
</script>

<style scoped>

.dept1{
  margin: 5px 0;
  font-weight: bold;
  font-size: 15px;
  color: #2D2D2D;
}
.dept{
  margin: 5px 0;
  font-weight: bold;
  font-size: 15px;
  color: #B4B4B4;
}
</style>