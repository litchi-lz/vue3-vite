<template>
  <div class="container">
    <div class="shell">
      <template v-for="(item, i) in imgList">
        <div class="box">
          <img :src="item.url" />
          <span>{{ item.desc }}</span>
        </div>
      </template>
    </div>
    <div class="go-Back" @click="goBack">Go  Back</div>
  </div>
</template>
<script lang="ts" setup>
import { ElLoading } from "element-plus";
import { useRouter } from "vue-router";
import accordion1 from '@/assets/imgs/accordion1.jpg'
import accordion2 from '@/assets/imgs/accordion2.jpg'
import accordion3 from '@/assets/imgs/accordion3.jpg'
import accordion4 from '@/assets/imgs/accordion4.jpg'
import accordion5 from '@/assets/imgs/accordion5.jpg'
const router = useRouter();
const imgList = reactive([
  { url: accordion1, desc: "Image" },
  { url: accordion2, desc: "Video" },
  { url: accordion3, desc: "File" },
  { url: accordion4, desc: "Music" },
  { url: accordion5, desc: "Lyric" },
]);
onBeforeMount(() => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 500);
});
const goBack = () => {
  router.go(-1);

};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(243, 230, 241);
  background-image: url("~@/assets/imgs/accordion5.jpg");
}
.shell {
  width: 90%;
  height: 700px;
  display: flex;
}
.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 10px solid #fff;
  background-color: #fff;
}
.box > img {
  width: 200%;
  height: 85%;
  object-fit: cover;
  transition: 0.5s;
}
.box > span {
  font: 200 45px "优设标题黑";
  text-align: center;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box:hover {
  flex-basis: 40%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}
.go-Back{
    position: absolute;
    left: 50%;
    bottom: 40px;
    margin-left: -100px;
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    border-radius: 30px;
    border: solid 1px  #eee;
    cursor: pointer;
}
</style>
