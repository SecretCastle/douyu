<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <div class="">
        {{roomlist}}
    </div>
  </div>
</template>

<script>
const reqURL = "http://open.douyucdn.cn/api/RoomApi/live";

export default {
  name: 'hello',
  data () {
    return {
      msg: "hello world",
      roomlist : {}
    }
  },
  created(){
      this.$http.get("/live",{
          method : "GET",
          credentials : true
      }).then(function(res){
          if(res){
              if(typeof res === "string"){
                  res = JSON.parse(res);
              }
          }
          this.$set(this,"roomlist",res.data.data);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
