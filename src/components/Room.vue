<template lang="html">
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
        }
    },
    components:{
        'list-item' : Items
    }

}
</script>

<style scoped>

</style>
