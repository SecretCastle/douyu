<template lang="html">
    {{roomlist}}
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
                    console.log(res.data.data);
                    this.$set(this,"roomlist",res.data.data);
                }
            });
        }
    }
}
</script>

<style lang="css">
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
    list-style: none;
}
.roomList li img{
    width: 100%;
}
.roomList li .title{
    line-height: 30px;
    font-size: 12px;
    overflow: hidden;
    height: 30px;
    text-align: center;
}
</style>
