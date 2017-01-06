<template lang="html">
    <div class="roomList">
        <li v-for="item in typeList">
            <div @click = "toSup(item.cate_id)">
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
    },
    methods:{
        toSup (param){
            this.$router.push({name : 'room' , params :{ type : param}});
        }
    }
}
</script>

<style lang="css" scoped>
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
