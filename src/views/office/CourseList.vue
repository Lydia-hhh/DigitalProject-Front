<template>

  <div style="background-color: #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：课程信息>专业必修
    </div>
    <div style="height: 20px"></div>
    <div style="width: 92%;margin-left: 4%;background-color: white;padding: 10px">

      <div>
        <div style="display: inline-block;font-size: small;font-weight: bold;margin-right: 10px">学年学期:</div>
        <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
            size="mini"></el-cascader>
        <div style="width: 10px;display: inline-block"></div>
        <el-button size="mini">切换学期</el-button>
        <div style="width: 55%;display: inline-block"></div>
        <el-button type="primary" size="small" @click="centerDialogVisible=true">添加课程</el-button>
      </div>
      <div style="height: 10px"></div>
      <div>
        <el-input v-model="condition.courseId" size="mini" style="width: 100px" placeholder="课程ID"></el-input>
        <div style="display: inline-block;width: 10px"></div>
        <el-input v-model="condition.courseName" size="mini" style="width: 160px" placeholder="课程名称"></el-input>
        <div style="display: inline-block;width: 10px"></div>
        <el-input v-model="condition.credit" size="mini" style="width: 60px" placeholder="学分"></el-input>
        <div style="display: inline-block;width: 10px"></div>
        <el-input v-model="condition.teacher" size="mini" style="width: 70px" placeholder="教师"></el-input>
        <div style="display: inline-block;width: 48%"></div>
        <el-button @click="searchCourse" size="small" type="prime" style="width: 8%">查询</el-button>
      </div>


      <div>
      <el-table
          size="small"
          :data="tableData1"
          style="width: 100%"
          stripe
          height="630">
        <el-table-column
            prop="courseId"
            label="课程ID"
            width="100"
        >
        </el-table-column>

        <el-table-column
            prop="courseName"
            label="课程名称"
        width="180">
        </el-table-column>


        <el-table-column
            prop="credit"
            label="学分"
        width="60">
        </el-table-column>

        <el-table-column
            prop="teacher"
            label="教师"
            width="80">
        </el-table-column>

        <el-table-column
            prop="teacher"
            label="职称"
            width="80">
        </el-table-column>

        <el-table-column
            prop="courseArrange"
            label="课程安排">
        </el-table-column>

        <el-table-column
            label="操作">
          <el-button @click="toCourseStu" type="text" size="small" style="color: #606266;font-weight: bold">查看学生名单</el-button>
          <el-button size="small" type="text" style="color: #67C23A;font-weight: bold">修改</el-button>
          <el-button size="small" type="text" style="color: #F56C6C;font-weight: bold">删除</el-button>
        </el-table-column>

      </el-table>
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
      </div>
    </div>
    <el-dialog
        title="添加课程"
        :visible.sync="centerDialogVisible"
        center
        width="600px">
      <el-form ref="form" :model="form" label-width="80px" size="small"
               style="width: 70%;margin-left: 10%">
        <el-form-item label="课程名称">
          <el-input v-model="form.courseName"></el-input>
        </el-form-item>
        <el-form-item label="学分">
          <el-input v-model="form.credit"></el-input>
        </el-form-item>
        <el-form-item label="教师">
          <el-autocomplete
              v-model="form.teacher"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
              style="width: 300px"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="课程安排">
          <el-input v-model="form.courseTime" placeholder="请输入课程时间，例如：星期三第3节"></el-input>
          <el-input v-model="form.courseRoom" placeholder="请输入课程教室，例如：教书院132"
          style="margin-top: 10px"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>

</template>

<script>
export default {
  name: "CourseList",
  data(){
    return{
      condition:{

      },
      teacherList:[],
      timeout:null,
      centerDialogVisible:false,
      state:'',
      form:{
        courseRoom:'',
        courseTime:'',
      },
      value:[],
      options:[

      ],
      currentPage4:1,
      tableData1: [{
        courseId: '1000',
        courseName: '数据库系统及其应用',
        credit:4,
        teacher:'赵慧哈哈',
        title:'教授',
        courseArrange:'星期三第3节 教书院132'
      },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        },
        {
          courseId: '1000',
          courseName: '数据库系统及其应用',
          credit:4,
          teacher:'赵慧哈哈',
          title:'教授',
          courseArrange:'星期三第3节 教书院132'
        }]
    }
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toCourseStu(){
      this.$router.push("/office/coursestu");
    },
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
    querySearchAsync(queryString, cb) {
      let teacherList = this.teacherList;
      let results = queryString ? teacherList.filter(this.createStateFilter(queryString)) : teacherList;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.indexOf(queryString) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    loadAll(){
      return[
        {"value":"赵慧 00000000000  教授"},
        {"value":"张敏 00000000001  教授"},
        {"value":"陈良育 00000000002  副教授"},
        {"value":"陈闻杰 00000000003  副教授"},
        {"value":"王廷 00000000004  副教授"},
        {"value":"王高丽 00000000005  教授"},
        {"value":"酒井香江子 00000000006  讲师"},
        {"value":"田怀珍 00000000007  副教授"},
        {"value":"张其颖 00000000008  副教授"},
        {"value":"祝毅 00000000009  讲师"}
      ]
    },
    searchCourse(){

    },

  },
  mounted() {
    this.teacherList = this.loadAll();
  },
  created() {
    this.upDateTerm();
  }
}
</script>

<style scoped>

</style>