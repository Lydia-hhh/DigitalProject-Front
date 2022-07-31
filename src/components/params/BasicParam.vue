<template>

  <div @click="changeBasicParam">
    <div v-if="!multi" class="radios">
      <el-checkbox @change="changeCheck" v-model="checked">非</el-checkbox>
    </div>

    <div v-if="multi" class="radios">
      <el-radio-group @change="changeOp" size="mini" v-model="op">
        <el-radio :label="'&'">与</el-radio>
        <el-radio :label="'|'">或</el-radio>
        <el-radio :label="'+'">加</el-radio>
        <el-radio :label="'-'">减</el-radio>
        <el-radio :label="'*'">乘</el-radio>
        <el-radio :label="'/'">除</el-radio>
      </el-radio-group>
    </div>
    <div class="range">
      <label>水平放大倍数</label>
      <input v-model="fx" id="horizontalInput" @input="changeHorizontalValue" style="margin-left: 15px" type="range" max="10" min="0.1" step="0.1">
      <label style="margin-left: 15px;color: #bbbbbb;" id="horizontal"></label>
    </div>

    <div class="range">
      <label>垂直放大倍数</label>
      <input v-model="fy"  id="verticalInput" style="margin-left: 15px" @input="changeVerticalValue" type="range" max="10" min="0.1" step="0.1">
      <label style="margin-left: 15px;color: #bbbbbb;" id="vertical"></label>
    </div>

    <div class="translation">
      <label style="margin-right: 10px">向左平移像素</label>
      <el-button @click="minusSx" style="display: inline-block" icon="el-icon-minus" size="mini" type="primary">
      </el-button>
      <el-input v-model="sx"  size="small" style="display: inline-block;width: 50px"></el-input>
      <el-button @click="addSx" style="display: inline-block" icon="el-icon-plus" size="mini" type="primary"></el-button>
    </div>

    <div class="translation">
      <label style="margin-right: 10px">向下平移像素</label>
      <el-button @click="minusSy" style="display: inline-block" icon="el-icon-minus" size="mini" type="primary">
      </el-button>
      <el-input v-model="sy"  size="small" style="display: inline-block;width: 50px"></el-input>
      <el-button @click="addSy" style="display: inline-block" icon="el-icon-plus" size="mini" type="primary"></el-button>
    </div>

    <div class="range">
      <label>旋转角度</label>
      <input v-model="angle"  id="rotateInput" style="margin-left: 15px" @input="changeRotateValue" type="range" max="360" min="0" step="1">
      <label style="margin-left: 15px;color: #bbbbbb;" id="rotate"></label>
    </div>

    <div class="range">
      <label>缩放因子</label>
      <input v-model="factor" id="scaleInput" style="margin-left: 15px" @input="changeScaleValue" type="range" max="10" min="1" step="0.1">
      <label style="margin-left: 15px;color: #bbbbbb;" id="scale"></label>
    </div>

    <div class="radios">
      <el-radio-group @change="changeMirror" class="mirrorRadio" size="mini" v-model="mirror">
        <el-radio :label="-1">对角镜像</el-radio>
        <el-radio :label="0">垂直镜像</el-radio>
        <el-radio :label="1">水平镜像</el-radio>
        <el-radio :label="2">无镜像</el-radio>
      </el-radio-group>
    </div>

    <div class="radios">
      <el-radio-group @change="changeZone" size="mini" v-model="zone">
        <el-radio :label="'rgb'">RGB色彩空间解析</el-radio>
        <el-radio :label="'hsv'">HSV色彩空间解析</el-radio>
      </el-radio-group>
    </div>

    <div class="radios">
      <el-radio-group @change="changeHistogram" size="mini" v-model="histogram">
        <el-radio :label="'grey'">灰度直方图</el-radio>
        <el-radio :label="'multi'">彩色直方图</el-radio>
      </el-radio-group>
    </div>





  </div>


</template>

<script>

export default {
  name: "BasicParam",
  data(){
    return{
      multi:false,
      mirror:2,
      zone:'rgb',
      histogram:'grey',
      sx:0,
      sy:0,
      radio:1,
      fx:1,
      fy:1,
      angle:0,
      factor:1,
      op:'+',
      checked:false,
      op1:'no'
    }
  },
  computed:{
    getMulti(){
      return this.$store.state.multi
    }
  },
  methods:{
      setHorizontalValue(){
        let input=document.getElementById("horizontalInput")
        input.value=this.fx
        document.getElementById("horizontal").innerHTML=this.fx
      },
      setVerticalValue(){
        let input=document.getElementById("verticalInput")
        input.value=this.fy
        document.getElementById("vertical").innerHTML=this.fy
      },
      setRotateValue(){
        let input=document.getElementById("rotateInput")
        input.value=this.angle
        document.getElementById("rotate").innerHTML=this.angle
      },
      setScaleValue(){
        let input=document.getElementById("scaleInput")
        input.value=this.factor
        document.getElementById("scale").innerHTML=this.factor
      },
      addSx(){
        this.sx++;
        this.changeBasicParam()
      },
      minusSx(){
        this.sx--;
        this.changeBasicParam()
      },
      addSy(){
        this.sy++;
        this.changeBasicParam()
      },
      minusSy(){
        this.sy--;
        this.changeBasicParam()
      },
      getMultiStatus(){
        console.log("multi: "+this.$store.state.multi)
      },
      changeBasicParam(){
        let newBasicParam={
          mirror:this.mirror,
          zone:this.zone,
          histogram:this.histogram,
          sx:this.sx,
          sy:this.sy,
          fx:this.fx,
          fy:this.fy,
          angle:this.angle,
          factor:this.factor,
          op:this.op,
          op1:this.op1
        }
        this.$store.commit('changeBasicParam',newBasicParam)
      },
    changeCheck(val){
      this.checked=val
      if(val===false){
        this.op1='no'
      }else {
        this.op1='~'
      }
      this.changeBasicParam()
    },
    changeOp(val){
      this.op=val
      this.changeBasicParam()
    },
    changeHorizontalValue(){
      document.getElementById('horizontal').innerHTML = this.fx
      this.changeBasicParam()
    },
    changeVerticalValue(){
      document.getElementById('vertical').innerHTML = this.fy
      this.changeBasicParam()
    },
    changeRotateValue(){
      document.getElementById('rotate').innerHTML = this.angle
      this.changeBasicParam()
    },
    changeScaleValue(){
      document.getElementById('scale').innerHTML = this.factor
      this.changeBasicParam()
    },
    changeMirror(val){
      this.mirror=val
      this.changeBasicParam()
    },
    changeZone(val){
      this.zone=val
      this.changeBasicParam()
    },
    changeHistogram(val){
      this.histogram=val
      this.changeBasicParam()
    }


  },
  watch:{
    getMulti:function (val){
      this.multi=val;
    }
  },
  created() {

  },



  mounted() {
    this.setHorizontalValue()
    this.setVerticalValue()
    this.setRotateValue()
    this.setScaleValue()
    this.getMultiStatus()

  }
}
</script>

<style scoped>
.radios{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 10px;
}

.radios span{
  margin-top: 20px;
  color: #BBBBBB;
  font-size: small;
}
.range{
  margin-left: 20px;
  margin-top: 10px;
  color: #bbbbbb;
  font-size: small;
}
div{
  color: #bbbbbb;
  font-size: small;
}
.translation{
  margin-top: 15px;
  margin-left: 20px;
}
::v-deep .el-radio{
  font-size: 10px;
  color: #bbbbbb;
  margin-right: 15px;
}
::v-deep .el-radio__original {
  width: 11px;
  height: 11px;
}

::v-deep .el-radio__inner {
  width: 11px;
  height: 11px;
}

::v-deep .el-radio__label{
  font-size: 10px;
}
::v-deep .el-checkbox__inner{
  width: 10px;
  height: 10px;
}
::v-deep .el-checkbox__label{
  font-size: 12px;
  color: #bbbbbb;
  padding-left: 5px;
}
.range{
  font-size: 10px;
}
.translation{
  font-size: 10px;
}

</style>