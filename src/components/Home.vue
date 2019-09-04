<template>
    <div id="home">
        <div>
            <span id="userName">用户名：{{userName}}</span>
            <button id="backButton" v-on:click="back">返回</button>
        </div>

        <br/><br/><br/><br/><br/><br/><br/>

        <div>
            <router-link :to="{name:'MyInfo', params:{userName:userName}}" class="navigation">我的资料</router-link>
            <br/><br/><br/><br/><br/><br/>
            <router-link to="/home/list" class="navigation">List列表</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data(){
            return{
                userName: this.$route.params.userName
            }
        },
        methods:{
            back(){
                this.$router.push("/");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #backButton{
        float: left;
    }
    #userName {
        float: right;
        color: deeppink;
    }
    .navigation{
        float: left;
        color: green;
    }
</style>
