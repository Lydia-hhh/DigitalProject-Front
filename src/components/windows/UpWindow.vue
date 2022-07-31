<template>

  <div style="border: 6px solid rgb(89,91,93)">

    <div v-if="!show" style="width: 100%;height: 320px;display: flex;justify-content: space-evenly;align-items: center">

        <el-upload
            class="avatar-uploader"
            ref="upload"
            action="#"
            :on-change="handleChange"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :auto-upload="false"
            :before-upload="beforeAvatarUpload"
            :file-list="fileList"
            >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>

      <div v-if="show" style="width: 100%;height: 320px;display: flex;justify-content: space-evenly;align-items: center">
      <el-upload
          class="avatar-uploader"
          ref="upload"
          action="#"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-change="addFile1"
          :file-list="fileList1"
          :auto-upload="false">
        <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

        <el-upload
            class="avatar-uploader"
            ref="upload"
            action="#"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="addFile2"
            :file-list="fileList2"
            :auto-upload="false">
          <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </div>
    <div v-if="showSwitch" id="switch" style="display: flex;flex-direction: row-reverse">
      <el-button size="mini" plain @click="switchWindow">切换</el-button>
    </div>
  </div>


</template>

<script>

import request from "@/utils/request";

export default {
  name: "UpWindow",
  data(){
    return{
      dialogImageUrl: '',
      dialogVisible: false,
      show:false,
      imageUrl: '',
      multi:false,
      showSwitch:true,
      fileList:[],
      fileFormData:new FormData(),
      imageUrl1:'',
      imageUrl2:'',
      fileList1:[],
      fileList2:[],
    }
  },
  props:{
    route:{
      type:String
    }
  },
  methods: {
    addFile1(item){
      this.fileFormData.append("file",item.raw)
    },
    addFile2(item){
      this.fileFormData.append("file2",item.raw)
      let route=this.$route.path;
      if(route==="/basic") {
        let basicParam = this.$store.state.basicParam
        if (this.multi === true) {
          this.fileFormData.append('mirror', basicParam.mirror)
          this.fileFormData.append('zone', basicParam.zone)
          this.fileFormData.append('histogram', basicParam.histogram)
          this.fileFormData.append('sx', basicParam.sx)
          this.fileFormData.append('sy', basicParam.sy)
          this.fileFormData.append('fx', basicParam.fx)
          this.fileFormData.append('fy', basicParam.fy)
          this.fileFormData.append('angle', basicParam.angle)
          this.fileFormData.append('factor', basicParam.factor)
          this.fileFormData.append('op', basicParam.op)
          console.log("fileFormData: ")
          console.log("file: "+this.fileFormData.get("file"))
          console.log("file2: "+this.fileFormData.get("file2"))
          console.log("mirror: "+this.fileFormData.get("mirror"))
          console.log("zone: "+this.fileFormData.get("zone"))
          console.log("histogram: "+this.fileFormData.get("histogram"))
          console.log("sx: "+this.fileFormData.get("sx"))
          console.log("sy: "+this.fileFormData.get("sy"))
          console.log("fx: "+this.fileFormData.get("fx"))
          console.log("fy: "+this.fileFormData.get("fy"))
          console.log("angle: "+this.fileFormData.get("angle"))
          console.log("factor: "+this.fileFormData.get("factor"))
          console.log("op: "+this.fileFormData.get("op"))
          this.requestBasic2(this.fileFormData)
        }
      }
    },
    requestBasic2(data){
      request.post('/basic/geo/two',data).then(res=>{
        console.log(res)
        if(res.code==="0"){
          this.imageUrl1 = res.data.origin
          this.imageUrl2=res.data.origin2
          this.$emit('event1',res.data)
          this.$message({
            type:'success',
            message:'上传成功！'
          })
        }else {
          this.$message({
            type:'error',
            message:'上传失败！'
          })
        }
      })
    },
    submitUpload(){
      console.log("this.$refs.upload: "+this.$refs.upload)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log("preview: "+file);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$message({
        type:'success',
        message:'上传成功！'
      })
    },
    beforeAvatarUpload(file) {
      console.log("file name: "+file)
    },
    switchWindow(){
      this.show=!this.show
      this.multi=!this.multi
      this.$store.commit('changeMulti',this.multi)
    },
    getPath(){
      let route=this.$route.path;
      if(route==="/basic"){
        this.showSwitch=true;
      }else {
        this.showSwitch=false;
      }
    },
    handleChange(item){
      let formData=new FormData();
      let file=item.raw;
      formData.append('file',file);
      let route=this.$route.path;
      if(route==="/basic"){
        let basicParam=this.$store.state.basicParam
        if(this.multi===false){
            formData.append('mirror',basicParam.mirror)
            formData.append('zone',basicParam.zone)
            formData.append('histogram',basicParam.histogram)
            formData.append('sx',basicParam.sx)
            formData.append('sy',basicParam.sy)
            formData.append('fx',basicParam.fx)
            formData.append('fy',basicParam.fy)
            formData.append('angle',basicParam.angle)
            formData.append('factor',basicParam.factor)
            formData.append('op',basicParam.op1)
          this.requestBasic(formData)
        }else {
          // let data={
          //   file:item.raw,
          //   mirror:basicParam.mirror,
          //   zone:basicParam.mirror,
          //   histogram:basicParam.histogram,
          //   sx:basicParam.sx,
          //   sy:basicParam.sy,
          //   fx:basicParam.fx,
          //   fy:basicParam.fy,
          //   angle:basicParam.angle,
          //   factor:basicParam.factor,
          //   op:basicParam.op
          // }
          // this.requestBasic(data)
        }
      }else if(route==='/morpho'){
        let morphoParam=this.$store.state.morphoParam
        formData.append('len',morphoParam.len)
        this.requestMorpho(formData)
      }else if(route==='/noise'){
        let noiseParam=this.$store.state.noiseParam
        formData.append('filter',noiseParam.filter)
        this.requestFilter(formData)
      }else if(route==='/line'){
        let lineParam=this.$store.state.lineParam
         formData.append('threshold',lineParam.threshold)
         formData.append('minLineLength',lineParam.minLineLength)
         formData.append('maxLineGap',lineParam.maxLineGap)
        this.requestLine(formData)
      }else if(route==='/edge'){
        let edgeParam=this.$store.state.edgeParam
        formData.append('operator',edgeParam.operator)
        this.requestEdge(formData)
      }else if(route==='/style'){
        let styleParam=this.$store.state.styleParam
        formData.append('style',styleParam.style)
        this.requestStyle(formData)
      }
    },
    requestBasic(data){
      request.post('/basic/geo',data).then(res=>{
        console.log(res)
        if(res.code==="0"){
          this.imageUrl = res.data.origin
          this.$emit('event1',res.data)
          this.$message({
            type:'success',
            message:'上传成功！'
          })
        }else {
          this.$message({
            type:'error',
            message:'上传失败！'
          })
        }
      })
    },
    requestMorpho(data){
      request.post('/basic/morphology',data).then(res=>{
        console.log(res)
        if(res.code==="0"){
          this.imageUrl = res.data.origin
          this.$emit('event1',res.data)
          this.$message({
            type:'success',
            message:'上传成功！'
          })
        }else {
          this.$message({
            type:'error',
            message:'上传失败！'
          })
        }
      })
    },
    requestFilter(data){
      request.post('/basic/filter',data).then(res=>{
        console.log(res)
        if(res.code==="0"){
          this.imageUrl = res.data.origin
          let result={
            url:res.data.result
          }
          this.$emit('event1',result)
          this.$message({
            type:'success',
            message:'上传成功！'
          })
        }else {
          this.$message({
            type:'error',
            message:'上传失败！'
          })
        }
      })
    },
    requestLine(data){
      request.post('/basic/line',data).then(res=>{
        console.log(res)
        if(res.code==="0"){
          this.imageUrl = res.data.origin
          this.$emit('event1',res.data)
          this.$message({
            type:'success',
            message:'上传成功！'
          })
        }else {
          this.$message({
            type:'error',
            message:'上传失败！'
          })
        }
      })
    },
    requestEdge(data){
      request.post('/basic/edge',data).then(res=>{
        console.log(res)
        if(res.code==="0"){
          this.imageUrl = res.data.origin
          let result={
            url:res.data.edge
          }
          this.$emit('event1',result)
          this.$message({
            type:'success',
            message:'上传成功！'
          })
        }else {
          this.$message({
            type:'error',
            message:'上传失败！'
          })
        }
      })
    },
    requestStyle(data){
      request.post('/transfer/img',data).then(res=>{
        console.log(res)
        if(res.code==="0"){
          this.imageUrl = res.data.origin
          let result={
            url:res.data.result
          }
          this.$emit('event1',result)
          this.$message({
            type:'success',
            message:'上传成功！'
          })
        }else {
          this.$message({
            type:'error',
            message:'上传失败！'
          })
        }
      })
    },

    },
  watch:{
    '$route':'getPath'
  },
  created() {
    this.getPath()
  }


}
</script>

<style scoped>

::v-deep .avatar-uploader .el-upload {
  border: 1px solid #3B87CF;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 300px;
}
::v-deep .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
::v-deep .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
::v-deep .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

::v-deep #switch button.el-button{
  background:rgb(60,63,65);
  border: 1px solid rgb(89,91,93);
}


</style>