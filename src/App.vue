<template>
  <div id="app">
      <div class="aui-content">
          <header class="aui-bar aui-bar-nav">Douyu</header>
          <div class="showArea">
            <router-view></router-view>
          </div>
          <footer class="aui-bar aui-bar-tab" id="footer">
              <router-link class="aui-bar-tab-item" to="/list">
                  <i class="aui-iconfont aui-icon-home"></i>
                  <div class="aui-bar-tab-label">全部</div>
              </router-link>
              <router-link class="aui-bar-tab-item" to="/home">
                  <i class="aui-iconfont aui-icon-menu"></i>
                  <div class="aui-bar-tab-label">分类</div>
              </router-link>
              <router-link class="aui-bar-tab-item" to="/find">
                  <i class="aui-iconfont aui-icon-map"></i>
                  <div class="aui-bar-tab-label">发现</div>
              </router-link>
              <router-link class="aui-bar-tab-item" to="/me">
                  <i class="aui-iconfont aui-icon-my"></i>
                  <div class="aui-bar-tab-label">我</div>
              </router-link>
        </footer>
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
@import './assets/common.css';
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

.aui-bar-nav{
    position: fixed;
}

.showArea{
    margin:2.25rem 0;
    background: #ccc;
}
</style>
