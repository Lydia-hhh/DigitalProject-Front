<template>

<div id="info" >
  <div style="height: 10px"></div>
  <div style="font-weight: bold;margin-left: 10px;font-size: 15px">
    {{item.title}}
  </div>
  <div style="height: 5px"></div>
  <div style="color: #8c939d;margin-left: 10px">
    {{item.author}}
  </div>
  <div style="margin-left: 10px">{{item.abstract}}</div>
  <div style="height: 5px"></div>
  <div style="margin-left: 10px">
    <div style="display: inline-block;width: 65%;height: 30px;line-height: 30px;color: #8c939d">
      上传用户：{{item.uploader}}
    </div>
    <div style="display: inline-block;width: 25%;height: 30px;line-height: 30px;color: #8c939d">
      上传时间：2022-02-01
    </div>



    <button id="button-thesis" @click="showDetail"> 详情
    </button>
  </div>

</div>

</template>

<script>
export default {
  name: "ThesisInfo",
  props:{
    item:{
      type:Object,
    }
  },
  methods:{
    showDetail(){
      this.$router.push("/user/thesisdetail");
    },
  }

}
</script>

<style scoped>
#info{
  width: 60%;
  border-left: 2px solid  #282936;
  border-bottom: 2px solid #282936;
  margin: 15px 20%;
  height: 150px;
  background-color:  white;
  font-size: 12px;
}

/* From uiverse.io by @adamgiebl */
#button-thesis {
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 10px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all .3s;
  box-shadow: 6px 6px 12px #c5c5c5,
  -6px -6px 12px #ffffff;
}

#button-thesis:hover {
  border: 1px solid white;
}

#button-thesis:active {
  box-shadow: 4px 4px 12px #c5c5c5,
  -4px -4px 12px #ffffff;
}

</style>