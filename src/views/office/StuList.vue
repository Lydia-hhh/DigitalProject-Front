<template>

  <div style="background-color: #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：软件工程学院>学生信息>2018级
    </div>
    <div style="height: 20px"></div>
    <div style="width: 90%;padding: 10px;margin-left: 5%;background-color: white">
      <div>
        <div style="display: inline-block;font-weight: bold;font-size: small;">学院</div>
        <div style="display: inline-block;font-size: small;margin-left: 10px">
          <span>软件工程</span>
        </div>
      </div>
      <div style="height: 10px"></div>


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
          <el-input style="display: inline-block;width: 50%" size="small"></el-input>
          <el-button style="display: inline-block;width: 10%" type="primary" size="small" @click="searchStudent">搜索</el-button>
          <div style="width: 20%;display: inline-block"></div>
          <el-button style="display: inline-block;width: 10%;" type="prime" size="small" @click="centerDialogVisible=true">添加学生</el-button>
        </div>
      <div style="height: 10px"></div>
      <el-table
          :data="tableData"
          height="650"
          border
          size="small"
          style="width: 100%"
          stripe>
        <el-table-column
            prop="name"
            label="姓名"
        width="90">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
        width="60">
        </el-table-column>
        <el-table-column
            prop="stuNumber"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="inDate"
            label="入学年份"
        width="80">
        </el-table-column>
        <el-table-column
            prop="outDate"
            label="毕业年份"
        width="80">
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="电话"
        width="100">
        </el-table-column>
        <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="color: #67C23A;font-weight: bold"
            @click="handleEdit(scope.$index,scope.row)">修改</el-button>
            <el-button type="text" size="small" style="color: #F56C6C;font-weight: bold"
            @click="handleDelete(scope.$index,scope.row)">删除</el-button>
          </template>

        </el-table-column>


      </el-table>
      <div style="width: 60%;margin-left: 20%">
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

    <el-dialog
        title="添加学生"
        :visible.sync="centerDialogVisible"
        center
    width="600px">
      <el-form ref="form" :model="form" label-width="80px" size="small"
      style="width: 70%;margin-left: 10%">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.stuNumber"></el-input>
        </el-form-item>
        <el-form-item label="入学年份">
          <el-date-picker
              v-model="form.inDate"
              type="month"
              placeholder="选择月">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="毕业年份">
          <el-date-picker
              v-model="form.inDate"
              type="month"
              placeholder="选择月">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveAdd">确 定</el-button>
  </span>
    </el-dialog>



    <el-dialog
        title="修改学生信息"
        :visible.sync="modifyStudentVisible"
        center
        width="600px">
      <el-form ref="form" :model="form" label-width="80px" size="small"
               style="width: 70%;margin-left: 10%">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.stuNumber"></el-input>
        </el-form-item>
        <el-form-item label="入学年份">
          <el-date-picker
              v-model="form.inDate"
              type="month"
              placeholder="选择月">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="毕业年份">
          <el-date-picker
              v-model="form.inDate"
              type="month"
              placeholder="选择月">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="modifyStudentVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveModify">确 定</el-button>
  </span>
    </el-dialog>




  </div>

</template>

<script>
export default {
  name: "StuList",
  data(){
    return{
      form:{},
      centerDialogVisible: false,
      modifyStudentVisible:false,
      currentPage4: 4,
      options: [{
        value: '姓名',
        label: '姓名'
      }, {
        value: '学号',
        label: '学号',
        disabled: true
      }],
      value:'',
      tableData: [{
       name:'黄娇',
       sex:'女',
       stuNumber:'10191900423',
        department:'软件工程',
        inDate:'2019-9',
        outDate:'2024-6',
        email:'2576468562@qq.com',
        phone:'15730798389',
        point:'3.71'

      }, {
        name:'黄娇',
        sex:'女',
        stuNumber:'10191900423',
        department:'软件工程',
        inDate:'2019-9',
        outDate:'2024-6',
        email:'2576468562@qq.com',
        phone:'15730798389',
        point:'3.71'
      }, {
        name:'黄娇',
        sex:'女',
        stuNumber:'10191900423',
        department:'软件工程',
        inDate:'2019-9',
        outDate:'2024-6',
        email:'2576468562@qq.com',
        phone:'15730798389',
        point:'3.71'
      }, {
        name:'黄娇',
        sex:'女',
        stuNumber:'10191900423',
        department:'软件工程',
        inDate:'2019-9',
        outDate:'2024-6',
        email:'2576468562@qq.com',
        phone:'15730798389',
        point:'3.71'
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
    handleEdit(index,row){
      this.modifyStudentVisible=true;
      this.form=this.tableData[index];
      console.log(index,row);
    },
    handleDelete(index,row){
      console.log(index,row);
      //request;
    },
    saveModify(){
      this.modifyStudentVisible=false;
      //request;
    },
    saveAdd(){
      this.modifyStudentVisible=false;
      //request
    },
    searchStudent(){
      console.log(this.value)
    }
  }
}
</script>

<style scoped>

</style>