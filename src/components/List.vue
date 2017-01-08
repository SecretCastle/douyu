<template>
    <div class="roomList">
        <li v-for="item in roomlist" @click = "go()">
            <div class="pic">
                <img :src="item.room_src" alt="">
            </div>
            <div class="title">
                <span class="liveName">{{item.room_name}}</span>
                <span>主播:{{item.nickname}}</span>
                <span>在线人数:{{item.online}}</span>
            </div>
        </li>
    </div>
</template>

<script>
import tools from "../utils/tools";

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
  },
  methods:{

      go(param){
          if(param){
              //code later
          }else{
              // in this method we define dialog wrap
              tools.dialog({
                  title:'提示',
                  content:'还在二维空间徘徊～～',
                  button:['cancel','ok']
              },function(res){
                  console.log(res);
              });
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
