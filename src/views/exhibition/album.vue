<template>
  <div class="container">
    <div class="content">
      <div class="box" v-for="(item,i) in list">
        <img :src="item.url" alt="">
      </div>
    </div>
    <div class="go-Back" @click="goBack">Go Back</div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, onBeforeMount } from "vue";
import { ElLoading } from "element-plus";
import { useRouter } from "vue-router";
import Evil1 from '@/assets/imgs/Evil1.jpg'
import Evil2 from '@/assets/imgs/Evil2.jpg'
import Evil3 from '@/assets/imgs/Evil3.jpg'
import Evil4 from '@/assets/imgs/Evil4.jpg'
import Evil5 from '@/assets/imgs/Evil5.jpg'
const router = useRouter();
const list = reactive([
  {url: Evil1},
  {url: Evil2},
  {url: Evil3},
  {url: Evil4},
  {url: Evil5}
])
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
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  perspective: 3200px;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  background-image: url(@/assets/background/bg.jpeg);
}
/*3d*/
.content {
  width: 280px;
  height: 400px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 200px;
  top: 0;
  margin: auto;
  transform-style: preserve-3d;
  animation: ani 25s linear infinite;
  transform: rotateY(90deg);
}
@keyframes ani {
  from {
    transform: rotateX(-10deg) rotateY(0deg);
  }
  to {
    transform: rotateX(-10deg) rotateY(360deg);
  }
}
.box {
  width: 280px;
  height: 400px;
  position: absolute;
  border: 2px solid wheat;
}
.box img {
  width: 100%;
  height: 100%;
  display: block;
}
.box:nth-child(1) {
  transform: rotateY(72deg) translateZ(600px);
}

.box:nth-child(2) {
  transform: rotateY(144deg) translateZ(600px);
}
.box:nth-child(3) {
  transform: rotateY(216deg) translateZ(600px);
}

.box:nth-child(4) {
  transform: rotateY(288deg) translateZ(600px);
}
.box:nth-child(5) {
  transform: rotateY(360deg) translateZ(600px);
}
.go-Back {
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
  border: solid 2px #eee;
  cursor: pointer;
}
</style>
