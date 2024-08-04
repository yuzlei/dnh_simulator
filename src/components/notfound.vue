<template>
  <div>
    <h1>404 页面不存在</h1>
    <p>您访问的页面不存在，请返回 <router-link to="/home/2/1">首页</router-link></p>
  </div>
</template>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans";

  > h1 {
    margin-bottom: 1.2vw;
    font-size: 2vw;
  }

  > p {
    font-size: 1vw;
  }
}
</style>