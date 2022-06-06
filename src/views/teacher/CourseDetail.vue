<template>
  <div style="background-color:  #F5F5F7">

    <div style="height: 45px"></div>
    <div style="width: 90%;margin-left: 5%;background-color: white;">
      <div style="height: 20px"></div>
      <div style="margin-left: 6%">
        <span>学年学期</span>
        <div style="width: 10px;display: inline-block"></div>
        <el-cascader
            size="small"
            v-model="value"
            :options="options"
            @change="handleChange"></el-cascader>
        <div style="display: inline-block;margin-left: 10px">
          <el-button type="prime" size="small">切换学期</el-button>
        </div>
      </div>
      <div style="height: 10px"></div>
      <div style="margin-left:50px;border:1px solid #8c939d;width:90%  ">
        <el-table
            size="small"
            :data="tableData"
            style="width: 100%;"
            stripe
            max-height="600px"
          >
          <el-table-column
              prop="number"
              label="序号"
              >
          </el-table-column>
          <el-table-column
              prop="courseId"
              label="课程ID"
          >
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
      <div style="height: 10px"></div>


    </div>

  </div>




</template>

<script>
export default {
  name: "CourseDetail",
  data(){
    return{
      currentPage4:1,
      value:[],
      options:[
        {
          value:'2018-2019',
          label:'2018-2019',
          children:[
            {
              value:'1学期',
              label:'2学期',
            }
          ]
        },
        {
          value:'2019-2020',
          label:'2019-2020',
          children:[
            {
              value:'1学期',
              label:'2学期',
            }
          ]
        },
        {
          value:'2020-2021',
          label:'2020-2021',
          children:[
            {
              value:'1学期',
              label:'2学期',
            }
          ]
        },
        {
          value:'2021-2022',
          label:'2021-2022',
          children:[
            {
              value:'1学期',
              label:'2学期',
            }
          ]
        }
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
        },
        {
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
        },
        {
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
        }],

    }
  },
  methods:{
    handleChange(value) {
      console.log(value);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toStuSheet(index,row){
      console.log(index,row)
      this.$router.push("/teacher/stusheet/"+index);
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

</style>