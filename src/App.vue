<template>
  <div id="app">
    <mt-header fixed title="啦啦啦"></mt-header>
    
    <router-view></router-view>

    <mt-tabbar>
      <mt-tab-item >
        <router-link to="/takeout">外卖</router-link>
      </mt-tab-item>

      <mt-tab-item >
        <router-link to="/order">订单</router-link>
      </mt-tab-item>

      <mt-tab-item >
        <router-link to="/find">发现</router-link>
      </mt-tab-item>

      <mt-tab-item >
        <router-link to="/mine">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
 
     
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
  text-decoration: none;
  color:#000;
}
</style>
