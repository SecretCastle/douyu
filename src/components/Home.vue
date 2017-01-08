<template lang="html">
    <div class="typeList">
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

<style scoped>


</style>
