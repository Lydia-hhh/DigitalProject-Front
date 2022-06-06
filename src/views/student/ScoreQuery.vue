<template>
  <div style="background-color:  #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：成绩查询
    </div>
    <div style="width: 90%;margin-left: 5%;background-color: white;
   margin-top: 20px;padding: 20px">
      <div style="font-weight: bold;font-size: small;">学生个人成绩查询</div>
      <div style="height: 10px"></div>
      <div>
        <div style="display: inline-block;font-size: small;font-weight: bold;margin-right: 10px">学年学期:</div>
        <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
        size="mini"></el-cascader>
        <div style="width: 10px;display: inline-block"></div>
        <el-button size="mini">切换学期</el-button>
        <div style="width: 50%;display: inline-block"></div>
        <el-button type="text">所有学期成绩</el-button>
      </div>
      <el-table
          :data="tableData"
          stripe
          style="width: 100%">
        <el-table-column
            prop="year"
            label="学年学期">
        </el-table-column>
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
            label="学分"
            width="60">
        </el-table-column>
        <el-table-column
            prop="usualScore"
            label="平时成绩"
            width="80">
        </el-table-column>
        <el-table-column
            prop="finalScore"
            label="期末成绩"
            width="80">
        </el-table-column>
        <el-table-column
            prop="totalScore"
            label="总评成绩"
            width="80">
        </el-table-column>
        <el-table-column
            prop="grade"
            label="等级成绩"
        width="80">
        </el-table-column>
        <el-table-column
            prop="point"
            label="绩点"
        width="60">
        </el-table-column>
        <el-table-column
            label="操作">
          <el-button type="text" size="small" style="color: #F56C6C;font-weight: bold">成绩质疑</el-button>
        </el-table-column>
      </el-table>


    </div>
  </div>

</template>

<script>

export default {
  name: "ScoreQuery",
  components: {

  },
  data(){
    return{
      value:[],
      options:[
        {
          value:'2018-2019',
          label:'2018-2019',
          children:[
            {
              value:'2学期',
              label:'2学期',
            },
            {
              value:'1学期',
              label:'1学期',
            },
          ]
        },
        {
          value:'2019-2020',
          label:'2019-2020',
          children:[
            {
              value:'2学期',
              label:'2学期',
            },
            {
              value:'1学期',
              label:'1学期',
            },
          ]
        },
        {
          value:'2020-2021',
          label:'2020-2021',
          children:[
            {
              value:'2学期',
              label:'2学期',
            },
            {
              value:'1学期',
              label:'1学期',
            },
          ]
        },
        {
          value:'2021-2022',
          label:'2021-2022',
          children:[
            {
              value:'2学期',
              label:'2学期',
            },
            {
              value:'1学期',
              label:'1学期',
            },
          ]
        }
      ],
      tableData: [{
        year:'2021-2022 1',
        courseId:'10001',
        courseName:'操作系统实践',
        courseType:'专业必修',
        credit:4,
        usualScore:91,
        finalScore:87,
        totalScore:89,
        grade:'A',
        point:3.9
      }, {
        year:'2021-2022',
        semester:'1',
        courseId:'10001',
        courseName:'操作系统实践',
        courseType:'专业必修',
        credit:4,
        usualScore:91,
        finalScore:87,
        totalScore:89,
        grade:'A',
        point:3.9
      }, {
        year:'2021-2022',
        semester:'1',
        courseId:'10001',
        courseName:'操作系统实践',
        courseType:'专业必修',
        credit:4,
        usualScore:91,
        finalScore:87,
        totalScore:89,
        grade:'A',
        point:3.9
      }, {
        year:'2021-2022',
        semester:'1',
        courseId:'10001',
        courseName:'操作系统实践',
        courseType:'专业必修',
        credit:4,
        usualScore:91,
        finalScore:87,
        totalScore:89,
        grade:'A',
        point:3.9
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
  },

}
</script>

<style scoped>


</style>