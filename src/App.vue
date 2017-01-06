<template>
  <div id="app">
      <div class="aui-content">
          <div class="aui-tab" id="tab">
              <router-link class="aui-tab-item" to="/list">全部</router-link>
              <router-link class="aui-tab-item" to="/home">分类</router-link>
          </div>
      </div>

    <router-view></router-view>
  </div>
</template>
<style>
@import './assets/aui.2.0.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-active{
    border-bottom: 2px solid #999;
}
</style>
