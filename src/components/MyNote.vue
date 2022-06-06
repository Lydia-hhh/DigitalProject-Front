<template>
<div style="margin-top: 20px">

  <div class="card" @click="showData">
    <div style="margin-left: 10px">
      <div style="margin-top: 10px;font-weight: bold">{{item.title}}</div>
      <div style="height: 5px"></div>
      <div style="font-size: small;color: #8c939d">
        <div style="display: inline-block;">{{item.author}}</div>
        <div style="display: inline-block;margin-left: 20px">{{item.periodical}}</div>
        <div style="display: inline-block;margin-left: 20px">{{item.date}}</div>
        <div style="display: inline-block;margin-left: 20px">{{item.type}}</div>
      </div>

      <div style="height: 5px"></div>
      <div style="font-size: small;margin-right: 5px">

       {{item.content}}

      </div>
      <div style="height: 5px"></div>
      <div style="font-size: small;color: #8c939d">
        <div style="width: 70%;display: inline-block">上传用户：{{item.uploader}}</div>
        <div style="width: 30%;display: inline-block">上传时间：{{item.upDate}}</div>
      </div>
      <div style="height: 3px"></div>
    </div>

  </div>


    <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        :close="handleClose">
      <div   id="showGraph">
        <div style="height: 20px"></div>
      <div style="width: 90%;margin-left: 5%;background-color: white">
        <div style="margin-left: 10px;">
          <div style="height: 10px"></div>
          <div style="font-weight: bold">研究方向：<span class="thesis-info">{{thesisInfo.orientation}}</span></div>
          <div style="height: 10px"></div>
          <div style="font-weight: bold">论文类型：<span class="thesis-info">{{thesisInfo.type}}</span></div>
          <div style="height: 10px"></div>
          <div style="font-weight: bold">作者：<span class="thesis-info">{{thesisInfo.author}}</span></div>
          <div style="height: 10px"></div>
          <div style="font-weight: bold">发布人：<span class="thesis-info">{{thesisInfo.uploader}}</span></div>
          <div style="height: 10px"></div>
          <div style="font-weight: bold">会议：<span class="thesis-info">{{thesisInfo.conference}}</span></div>
          <div style="height: 10px"></div>

        </div>

      </div>

        <div style="height: 20px"></div>
        <div style="width: 90%;height: 55%;background-color: white;margin-left: 5%">

        </div>

      </div>
    </el-drawer>



</div>
</template>

<script>
export default {
  name: "MyNote",
  props:{
    item:{
      type:Object,
    }
  },
  data(){
    return{
      drawer:false,
      direction:'rtl',
      thesisInfo:{
        orientation:'自然语言处理',
        type:'综述型',
        author:'刘挺',
        uploader:'刘大锤',
        conference: '中兴通讯技术'
      }
    }

  },
  methods:{
    showData(e){
      this.drawer=true;
      console.log(e)
    },
    handleClose(){
      this.drawer=false;
    }
  }
}
</script>

<style scoped>
/* From uiverse.io by @Sujitkavaiya */
.card {
  width: 95%;
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
}

.card:hover {
  border: #444444 0.2em solid;
}
.card:active{
  border: white 0.2em solid;
}
#showGraph{
  background-color: #F5F5F7;
  width: 100%;
  height: 100%;
}
.thesis-info{
  font-weight: normal;
}
</style>