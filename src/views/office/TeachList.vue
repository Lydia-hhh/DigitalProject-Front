<template>
  <div style="background-color: #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：教师信息>软件工程
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
        <el-button style="display: inline-block;width: 10%" type="primary" size="small" @click="searchTeacher">搜索</el-button>
        <div style="display: inline-block;width: 20%;"></div>
        <el-button style="display: inline-block;width: 10%" type="prime" size="small"
                   @click="centerDialogVisible=true">添加教师</el-button>
      </div>
      <div style="height: 10px"></div>
      <el-table
          :data="tableData"
          height="630"
          border
          style="width: 100%"
          stripe
      size="small">
        <el-table-column
            prop="name"
            label="姓名"
        width="100">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
        width="60">
        </el-table-column>
        <el-table-column
            prop="teacherNumber"
            label="工号">
        </el-table-column>
        <el-table-column
            prop="title"
            label="职称"
        width="100">
        </el-table-column>
        <el-table-column
            prop="inDate"
            label="入职年份"
        width="100">
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="电话">
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
        title="添加教师"
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
        <el-form-item label="工号">
          <el-input v-model="form.teacherNumber"></el-input>
        </el-form-item>
        <el-form-item label="职称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="入职年份">
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
        title="修改教师信息"
        :visible.sync="modifyTeacherVisible"
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
        <el-form-item label="工号">
          <el-input v-model="form.teacherNumber"></el-input>
        </el-form-item>
        <el-form-item label="入学年份">
          <el-date-picker
              v-model="form.inDate"
              type="month"
              placeholder="选择月">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="modifyTeacherVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveModify">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "TeachList",
  data() {
    return {
      form:{},
      centerDialogVisible: false,
      modifyTeacherVisible:false,
      currentPage4: 4,
      options: [{
        value: '姓名',
        label: '姓名'
      }, {
        value: '工号',
        label: '工号',
        disabled: true
      }],
      value: '',
      tableData: [{
        name: '黄娇',
        sex: '女',
        teacherNumber: '10191900423',
        title:'教授',
        inDate: '2019-9',
        email: '2576468562@qq.com',
        phone: '15730798389',

      }, {
        name: '黄娇',
        sex: '女',
        teacherNumber: '10191900423',
        title:'教授',
        inDate: '2019-9',
        email: '2576468562@qq.com',
        phone: '15730798389',
      }, {
        name: '黄娇',
        sex: '女',
        teacherNumber: '10191900423',
        title:'教授',
        inDate: '2019-9',
        email: '2576468562@qq.com',
        phone: '15730798389',
      }, {
        name: '黄娇',
        sex: '女',
        teacherNumber: '10191900423',
        title:'教授',
        inDate: '2019-9',
        email: '2576468562@qq.com',
        phone: '15730798389',
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
    saveModify() {
      this.modifyTeacherVisible=false;
    },
    handleEdit(index, row) {
      this.form=this.tableData[index];
      this.modifyTeacherVisible=true;
      //request;
    },
    handleDelete(index,row){
      //request;
    },
    saveAdd() {
      this.centerDialogVisible=false;
    },
    searchTeacher(){

    }
  }
}
</script>

<style scoped>

</style>