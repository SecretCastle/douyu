<template lang="html">
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
    name : "room",
    data () {
      return {
        roomlist : {}
      }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'getData'
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            let typeURL = "/live/"+this.$route.params.type;
            this.$http.get(typeURL,{
                method : "GET",
                credentials : true
            }).then(function(res){
                if(res){
                    if(typeof res === "string"){
                        res = JSON.parse(res);
                    }
                    this.$set(this,"roomlist",res.data.data);
                }
            });
        },
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
    },

}
</script>

<style scoped>

</style>
