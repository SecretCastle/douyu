<template>
    <div class="roomList">
        <li v-for="item in roomlist">
            <div class="pic">
                <img :src="item.room_src" alt="">
            </div>
            <div class="title">
                {{item.room_name}}
            </div>
        </li>
    </div>
</template>

<script>
export default {
  name: 'list',
  props: ['src'],
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

.roomList{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap:wrap;
    padding: 10px 0;

}

.roomList li{
    width: 49%;
    margin: 0.5%;
}
.roomList li img{
    width: 100%;
}
.roomList li .title{
    line-height: 30px;
    font-size: 12px;
    overflow: hidden;
    height: 30px;
}
</style>
