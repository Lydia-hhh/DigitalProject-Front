<template xmlns="http://www.w3.org/1999/html">

  <div style="background-color:  #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：查看课表
    </div>
    <div style="height: 20px"></div>
    <div style="width: 80%;margin-left: 10%;background-color: white;">
    <div style="height: 30px"></div>
        <div style="margin-left: 10%">
          <span>学年学期</span>
          <div style="width: 10px;display: inline-block"></div>
          <el-cascader
              size="small"
              v-model="value"
              :options="options"
              @change="handleChange"></el-cascader>
        </div>
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
        <el-table
            size="small"
            :data="tableData"
            style="width: 100%"
            stripe
           max-height="330px">
          <el-table-column
              prop="number"
              label="序号"
              width="100">
          </el-table-column>
          <el-table-column
              prop="courseId"
              label="课程ID"
              width="180">
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
              prop="title"
              label="职称">
          </el-table-column>
        </el-table>



      </div>
      <div style="height: 20px"></div>


    </div>

  </div>





</template>

<script>

export default {
  name: "Timetable",
  components:{

  },
  data(){
    return{
      value:[],
      options:[
      ],
      tableData: [{
        number: '1',
        courseId: '1000',
        courseName: '数据库系统及其应用',
        courseType:'专业必修',
        credit:4,
        teacher:'赵慧',
        title:'教授'
      }, {
        number: '1',
        courseId: '1000',
        courseName: '数据库系统及其应用',
        courseType:'专业必修',
        credit:4,
        teacher:'赵慧',
        title:'教授'
      }, {
        number: '1',
        courseId: '1000',
        courseName: '数据库系统及其应用',
        courseType:'专业必修',
        credit:4,
        teacher:'赵慧',
        title:'教授'
      }, {
        number: '1',
        courseId: '1000',
        courseName: '数据库系统及其应用',
        courseType:'专业必修',
        credit:4,
        teacher:'赵慧',
        title:'教授'
      },
        {
          number: '1',
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          title:'教授'
        },
        {
          number: '1',
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          title:'教授'
        },
        {
          number: '1',
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          title:'教授'
        },
        {
          number: '1',
          courseId: '1000',
          courseName: '数据库系统及其应用',
          courseType:'专业必修',
          credit:4,
          teacher:'赵慧',
          title:'教授'
        }]

    }
  },
  methods:{

    handleChange(value) {
      console.log(value);
    },
    upDateTerm(){
      let date=new Date();
      let year=date.getFullYear();
      let children=[
        {
          value:"2学期",
          label:"2学期"
        },
        {
          value:"1学期",
          label:"1学期"
        }
      ];
      for(let i=0;i<4;i++){
        this.options[i]={
          value: (year-i)+"-"+(year+1-i),
          label: (year-i)+"-"+(year+1-i),
          children: children
        }
      }
    },

  },
  mounted() {
  },
  created() {
    this.upDateTerm();
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