<template>

  <div style="background-color: #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：个人信息
    </div>
   <div style="width: 80%;margin-left: 10%;">
      <div style="height: 20px"></div>
     <div style="height: 580px;width:100%;background: white">
       <div style="height: 20px"></div>
        <div style=";margin-left: 20px;margin-top:0;padding:0;display: inline-block">
          <el-image
              style="width: 100px; height: 150px"
              :src="url"
              :fit="'cover'"></el-image>
          <div style=" ;display: inline-block;width: calc(100vw - 820px);margin-left: 70px">
            <div style="display: inline-block;width: 85%">
              <el-button type="primary" @click="centerDialogVisible1=!centerDialogVisible1">修改基本信息</el-button>
            </div>
            <div style="display: inline-block;width: 15%">
              <el-button type="primary" @click="centerDialogVisible2=!centerDialogVisible2">修改密码</el-button>
            </div>
          </div>

        </div>
       <div style="height: 20px"></div>

       <div style=";width: 75%;margin-left: 20%">
         <el-card class="box-card">
           <div slot="header" class="clearfix">
             <span>个人信息</span>
           </div>
           <div>
             <div style="width: 49%;display: inline-block">
               <div style="height: 20px"></div>
               <div>姓名：{{personInfo.name}}</div>
               <div style="height: 30px"></div>
               <div>学号：{{personInfo.stuNumber}}</div>
               <div style="height: 30px"></div>
               <div>入学年份：{{personInfo.inDate}}</div>
               <div  style="height: 30px"></div>
               <div>邮箱：{{personInfo.email}}</div>
               <div style="height: 30px"></div>
             </div>
             <div style="padding-left: 10px;width: 49%;border-left:2px solid #DCDFE6;display: inline-block">
               <div style="height: 30px"></div>
               <div>性别：{{personInfo.sex}}</div>
               <div style="height: 30px"></div>
               <div>学院：{{personInfo.department}}</div>
               <div style="height: 30px"></div>
               <div>毕业年份：{{personInfo.outDate}}</div>
               <div style="height: 30px"></div>
               <div>电话：{{personInfo.phone}}</div>
               <div style="height: 20px"></div>
             </div>
           </div>
         </el-card>
       </div>
     </div>
   </div>


    <el-dialog
        title="修改基本信息"
        :visible.sync="centerDialogVisible1"
        width="30%"
        center>

      <div>
        更改邮箱：
        <div style="height: 10px"></div>
        <el-input placeholder="请输入新的邮箱"></el-input>
      </div>
      <div style="height: 10px"></div>
      <div>
        更改电话：
        <div style="height: 10px"></div>
        <el-input placeholder="请输入新的电话号码"></el-input>

      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="saveModifyInfo">确 定</el-button>
  </span>
    </el-dialog>

    <el-dialog
        title="修改密码"
        :visible.sync="centerDialogVisible2"
        width="30%"
        center>

      <div>
        新密码：
        <div style="height: 10px"></div>
        <el-input placeholder="请输入新密码"></el-input>
      </div>
      <div style="height: 10px"></div>
      <div>
        确认密码：
        <div style="height: 10px"></div>
        <el-input placeholder="请确认新密码"></el-input>

      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="saveModifyPwd">确 定</el-button>
  </span>
    </el-dialog>
  </div>




</template>

<script>
import * as echarts from "echarts";
export default {
  name:'StudentInfo',
  components:{
      echarts
  },
  data() {
    return {
      centerDialogVisible2:false,
      centerDialogVisible1:false,
        url:require('../../image/person.jpg'),
        personInfo:{
          name:'黄娇',
          sex:'女',
          stuNumber:'10191900423',
          department:'软件工程学院',
          inDate:'2019-9',
          outDate:'2024-6',
          email:'2576468562@qq.com',
          phone:'15730798389'
        }

    }
  },
  methods: {
    saveModifyInfo(){
      this.centerDialogVisible1=false;
    },
    saveModifyPwd(){
      this.centerDialogVisible2=false;
    },



  },

  mounted() {

  },
  created() {

  }
}
</script>
<style lang="scss">

</style>