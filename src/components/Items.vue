<template>
    <li @click = "go()">
        <div class="pic">
            <img :src="message.room_src" alt="">
        </div>
        <div class="title">
            <span class="liveName">{{message.room_name}}</span>
            <span>主播:{{message.nickname}}</span>
            <span>在线人数:{{message.online}}</span>
            <span>主播ID:{{message.owner_uid}}</span>
        </div>
    </li>
</template>

<script>
import tools from "../utils/tools";
export default {
    props:{
        message:{
            type : Object,
            required: true
        }
    },
    methods:{
        go(){
            tools.dialog({
                title:"hello World"
            });
        }
    }
}
</script>

<style lang="css">
</style>
