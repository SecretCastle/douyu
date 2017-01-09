<template>
    <div class="roomList">
        <list-item v-for="item in roomlist" :message = "item" ></list-item>
    </div>
</template>

<script>

import Items from "./Items";
export default {
  data () {
    return {
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
  components:{
     'list-item' : Items
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
