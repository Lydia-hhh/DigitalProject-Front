<template xmlns="http://www.w3.org/1999/html">

  <div style="background-color:  #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：我要选课
    </div>
    <div style="height: 20px"></div>
    <div style="width: 80%;margin-left: 10%;background-color: white;">
      <div style="height: 15px"></div>
      <div style="margin-left: 50px;">
        <table border="1">
          <tr id="head">
            <td>节次/周次</td>
            <td>星期一</td>
            <td>星期二</td>
            <td>星期三</td>
            <td>星期四</td>
            <td>星期五</td>
            <td>星期六</td>
            <td>星期日</td>

          </tr>
          <!--1-->
          <tr class="row">
            <td class="side">
              <span>第一节</span><br>
              <span>8:00-9:30</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <!--2-->
          <tr class="row">
            <td  class="side">
              <span>第二节</span><br>
              <span>10:00-11:30</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <!--3-->
          <tr class="row">
            <td  class="side">
              <span>第三节</span><br>
              <span>13:00-14:30</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <!--4-->
          <tr class="row">
            <td  class="side">
              <span>第四节</span><br>
              <span>15:00-16:30</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <!--5-->
          <tr class="row">
            <td  class="side">
              <span>第五节</span><br>
              <span>18:00-19:30</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <!--6-->
          <tr class="row">
            <td  class="side">
              <span>第六节</span><br>
              <span>19:40-20:30</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </table>
      </div>
      <div style="height: 20px"></div>


      <div style="margin-left:50px;border:1px solid #8c939d;width:90%  ">




        <el-tabs type="border-card">


          <el-tab-pane>
            <span slot="label">可选课程</span>
            <div>
              <input style="height: 15px;display: inline-block;margin-left:10px;width: 70px"/>
              <input style="height: 15px;display: inline-block;margin-left: 10px;width: 145px"/>
              <input style="height: 15px;display: inline-block;margin-left: 10px;width: 80px"/>
              <input style="height: 15px;display: inline-block;margin-left: 10px;width: 40px"/>
              <input style="height: 15px;display: inline-block;margin-left: 10px;width: 80px"/>
            </div>

            <el-table
                size="small"
                :data="tableData1"
                style="width: 100%"
                stripe
                max-height="700px">
              <el-table-column
                  prop="courseId"
                  label="课程ID"
                  width="90"
                  >
              </el-table-column>

              <el-table-column
                  prop="courseName"
                  label="课程名称"
                  width="160">
              </el-table-column>

              <el-table-column
                  prop="courseType"
                  label="课程类别"
                  width="100">
              </el-table-column>

              <el-table-column
                  prop="credit"
                  label="学分"
                  width="60">
              </el-table-column>

              <el-table-column
                  prop="teacher"
                  label="教师"
                  width="100">
              </el-table-column>

              <el-table-column
                  prop="courseArrange"
                  label="课程安排"
                  width="160">
              </el-table-column>

              <el-table-column
                  label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small" style="font-weight: bold">选课</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>



          <el-tab-pane>
            <span slot="label">已选课程</span>
            <el-table
                size="small"
                :data="tableData2"
                style="width: 100%"
                stripe
                max-height="700px">
              <el-table-column
                  prop="courseId"
                  label="课程ID">
              </el-table-column>

              <el-table-column
                  prop="courseName"
                  label="课程名称">
              </el-table-column>

              <el-table-column
                  prop="courseType"
                  label="课程类别">
              </el-table-column>

              <el-table-column
                  prop="credit"
                  label="学分">
              </el-table-column>

              <el-table-column
                  prop="teacher"
                  label="教师">
              </el-table-column>

              <el-table-column
                  prop="select"
                  label="已选/上限">
              </el-table-column>


              <el-table-column
                  prop="courseArrange"
                  label="课程安排">
              </el-table-column>

              <el-table-column
                  label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small" style="font-weight: bold">退课</el-button>
                </template>
              </el-table-column>

            </el-table>

          </el-tab-pane>
        </el-tabs>



      </div>
      <div style="height: 10px"></div>
      <div style="margin-left: 20%">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
      </div>

      <div style="height: 30px"></div>

    </div>

  </div>





</template>

<script>

export default {
  name: "CourseSelect",
  components:{

  },
  data(){
    return{
      currentPage4:1,
      tableData1: [{
        courseId: '1000',
        courseName: '数据库系统及其应用',
        courseType:'专业必修',
        credit:4,
        teacher:'赵慧',
        courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          courseArrange:'星期三第3节 教书院132'},
      ],
      tableData2: [{
        courseId: '1000',
        courseName: '数据库系统及其应用',
        courseType:'专业必修',
        credit:4,
        teacher:'赵慧',
        select:'2/7',
        courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          select:'2/7',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          select:'2/7',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          select:'2/7',
          courseArrange:'星期三第3节 教书院132'},
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          select:'2/7',
          courseArrange:'星期三第3节 教书院132'}],

    }
  },
  methods:{

    handleChange(value) {
      console.log(value);
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }

  }

}
</script>

<style scoped>
#head td{
  width: 100px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  line-height: 30px;
  background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
  font-size: small;
  font-weight: bold;
}
.row td{
  width: 100px;
  height: 80px;
  border: 1px solid black;
}
.side{
  background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  font-size: small;
}
</style>