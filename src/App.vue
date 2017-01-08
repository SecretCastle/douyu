<template>
  <div id="app">
      <div class="aui-content">
          <header class="aui-bar aui-bar-nav">Douyu</header>
          <div class="showArea">
            <router-view></router-view>
          </div>
          <div class="aui-tab" id="tab" v-if="showTabBottom">
              <router-link class="aui-tab-item" to="/list">全部</router-link>
              <router-link class="aui-tab-item" to="/home">分类</router-link>
              <router-link class="aui-tab-item" to="/find">发现</router-link>
              <router-link class="aui-tab-item" to="/me">我</router-link>
          </div>
      </div>
  </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                showTabBottom : true
            }
        }
    }
</script>
<style>
@import './assets/aui.2.0.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

.router-link-active{
    border-bottom: 2px solid #999;
}
.aui-tab{
    position: fixed;
    bottom: 0;
    height: 44px;
    left: 0;
    width: 100%;
    z-index: 999;
}
.aui-bar-nav{
    position: fixed;
}
.showArea{
    margin:45px 0 30px 0;
}
</style>
