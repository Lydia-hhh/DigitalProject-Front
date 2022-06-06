<template>
  <div style="background-color:  #F5F5F7">
    <div style="width: 90%;margin-left: 5%;background-color: white;
   margin-top: 20px;padding: 10px">
      <div>
        <div style="display: inline-block;font-weight: bold;font-size: small;">学生名单</div>
        <div style="display: inline-block;font-size: small;margin-left: 10px">学年学期:{{term}}</div>
      </div>
      <div style="height: 15px"></div>
      <div>
        <el-select v-model="value" size="small" placeholder="请选择" style="width: 10%">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input v-model="search" style="display: inline-block;width: 50%" size="small"></el-input>
        <el-button @click="searchStudent" style="display: inline-block;width: 10%" type="primary" size="small">搜索</el-button>
      </div>

      <div style="height: 10px"></div>
      <div style="width: 100%;">
        <el-table
            :data="tableData"
            style="width: 100%;"
            height="600px"
        size="small">
          <el-table-column
              prop="stuName"
              label="学生">
          </el-table-column>
          <el-table-column
              prop="stuNumber"
              label="学号">
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
              label="平时成绩">
            <template slot-scope="scope">
              <el-input v-model="tableData[scope.$index].usualScore"  v-if="!tableData[scope.$index].confirm" size="mini" style="width: 60px"></el-input>
              <div v-if="tableData[scope.$index].confirm">{{tableData[scope.$index].usualScore}}</div>
            </template>

          </el-table-column>
          <el-table-column
              label="期末成绩">
            <template slot-scope="scope">
              <el-input v-model="tableData[scope.$index].finalScore" v-if="!tableData[scope.$index].confirm" size="mini" style="width: 60px"></el-input>
              <div v-if="tableData[scope.$index].confirm">{{tableData[scope.$index].finalScore}}</div>
            </template>
          </el-table-column>
          <el-table-column
              prop="totalScore"
              label="总评成绩">
          </el-table-column>
          <el-table-column
              prop="grade"
              label="等级成绩">
          </el-table-column>
          <el-table-column
              label="操作">

            <template slot-scope="scope">
              <el-button @click="confirmScore(scope.$index,scope.row)" type="text" size="small" style="color: #67C23A;font-weight: bold">确认</el-button>
              <el-button @click="handleEdit(scope.$index,scope.row)" type="text" size="small" style="color: #F56C6C;font-weight: bold">修改</el-button>
            </template>

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


    </div>
  </div>

</template>

<script>
export default {
  name: "AddScore",
  data(){
    return {
      search:'',
      term:'',
      currentPage4:1,
      options: [{
        value: '姓名',
        label: '姓名'
      }, {
        value: '学号',
        label: '学号',
        disabled: true
      }, ],
      value: '',
      tableData: [{
        stuName: '黄娇',
        stuNumber: '10001',
        courseName: '操作系统实践',
        courseType: '专业必修',
        credit: 4,
        usualScore: 91,
        finalScore: 87,
        totalScore: 89,
        grade: 'A',
        point: 3.9,
        confirm:true
      }, {
        stuName: '黄娇',
        stuNumber: '10001',
        courseName: '操作系统实践',
        courseType: '专业必修',
        credit: 4,
        usualScore: 91,
        finalScore: 87,
        totalScore: 89,
        grade: 'A',
        point: 3.9,
        confirm: true
      }, {
        stuName: '黄娇',
        stuNumber: '10001',
        courseName: '操作系统实践',
        courseType: '专业必修',
        credit: 4,
        usualScore: 91,
        finalScore: 87,
        totalScore: 89,
        grade: 'A',
        point: 3.9,
        confirm: true
      }, {
        stuName: '黄娇',
        stuNumber: '10001',
        courseName: '操作系统实践',
        courseType: '专业必修',
        credit: 4,
        usualScore: 91,
        finalScore: 87,
        totalScore: 89,
        grade: 'A',
        point: 3.9,
        confirm: true
      },
        {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        }, {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        }, {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        }, {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        },
        {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        }, {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        }, {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        }, {
          stuName: '黄娇',
          stuNumber: '10001',
          courseName: '操作系统实践',
          courseType: '专业必修',
          credit: 4,
          usualScore: 91,
          finalScore: 87,
          totalScore: 89,
          grade: 'A',
          point: 3.9,
          confirm: true
        }]
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
    confirmScore(index,row){
      this.tableData[index].confirm=true;

    },
    handleEdit(index,row){
      this.tableData[index].confirm=false;
    },
    loadTerm(){
      let date=new Date();
      let year=date.getFullYear();
      let month=date.getMonth()+1;
      if(3<=month && month<=7){
        this.term=(year-1)+"-"+year+" 2学期";
      }else {
        this.term=year+"-"+(year+1)+" 1学期";
      }
    },
    searchStudent() {

    }
  },
  mounted() {
  },
  created() {
    this.loadTerm();
  }
}
</script>

<style lang="scss">
.el-table__fixed {
  height: auto !important;
  bottom: 5px;
  position: absolute;
  top: 0;
  left: 0;

}

</style>