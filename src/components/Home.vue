<template lang="html">
    <div class="roomList">
        <li v-for="item in typeList">
            <div class="pic">
                <img :src="item.game_src" alt="">
            </div>
            <div class="title">
                {{item.game_name}}
            </div>
        </li>
    </div>
</template>

<script>
export default {
    name : 'home',
    data(){
        return {
            typeList : {}
        }
    },
    created(){
        this.$http.get("/game",{
            method : "GET",
            credentials : true
        }).then(function(res){
            if(res){
                if(typeof res === "string"){
                    res = JSON.parse(res);
                }
            }
            this.$set(this,'typeList',res.data.data);
        });
    }
}
</script>

<style lang="css" scoped>
.roomList{
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap:wrap;
    padding: 10px 0
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
    text-align: center;
}
</style>
