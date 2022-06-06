<template>
  <div style="background-color: #F5F5F7">
    <div style="font-size: small;color:#606266;">
      当前位置：课程信息
    </div>
    <div style="height: 30px"></div>
    <div style="width: 80%;background-color: white;margin-left: 10%">

      <div style="height: 50px"></div>
      <div>
        <div style="display: inline-block;width: 18%"></div>
        <div style="display: inline-block;">

          <div class="card" @click="toPublicCourse">
            <div class="icon">
              
              <img src="../../icon/noun-public-2556806.png" style="width: 45px;height: 45px">

            </div>
            <strong> 公共必修
            </strong>
            <span>查看</span>
          </div>
        </div>
        <div style="display: inline-block;width: 5%"></div>
        <div style="display: inline-block">
          <div class="card" @click="toGeneralCourse">
            <div class="icon">
              <img src="../../icon/noun-knowledge-4306501.png" style="width: 45px;height: 45px">

            </div>
            <strong> 通识教育课程
            </strong>
            <span>查看</span>
          </div>
        </div>
      </div>
      <div style="height: 30px"></div>

      <div>
        <div style="display: inline-block;width: 18%"></div>
        <div style="display: inline-block">
          <div class="card" @click="toSubjectCourse">
            <div class="icon">
             <img src="../../icon/noun-course-3428417.png" style="width: 45px;height: 45px">
            </div>
            <strong> 学科基础课程
            </strong>
            <span>查看</span>
          </div>
        </div>
        <div style="display: inline-block;width: 5%"></div>
        <div style="display: inline-block">
          <div class="card" @click="toProfessionCourse">
            <div class="icon">
              <img src="../../icon/noun-professional-3341674.png" style="width: 45px;height: 45px">

            </div>
            <strong> 专业教育课程
            </strong>
            <span>查看</span>
          </div>
        </div>
      </div>

      <div style="height: 50px"></div>


    </div>
  </div>
</template>

<script>
export default {
  name: "CourseType",
  methods:{
    toPublicCourse(){
      this.$router.push("/office/courselist/1");
    },
    toGeneralCourse(){
      this.$router.push("/office/courselist/2");
    },
    toSubjectCourse(){
      this.$router.push("/office/courselist/3");
    },
    toProfessionCourse(){
      this.$router.push("/office/courselist/4");
    }
  }
}
</script>

<style scoped>
/* From uiverse.io by @satyamchaudharydev */
.card {
  --bg: #f7f7f8;
  --hover-bg:#2D2D2D;
  --hover-text: #B4B4B4;
  max-width: 23ch;
  text-align: center;
  background: var(--bg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 300px;
  height: 150px;
}



.card > :not(span) {
  transition: .3s cubic-bezier(.6,.4,0,1);
}

.card > strong {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -.035em;
}

.card span {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
}

.card:hover span {
  top: 0;
  font-size: 1.2em;
}

.card:hover {
  background: var(--hover-bg);
}

.card:hover>div,.card:hover>strong {
  opacity: 0;
}
</style>