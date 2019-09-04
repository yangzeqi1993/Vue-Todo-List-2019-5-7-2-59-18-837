<template>
    <div id="main">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>欢迎访问，点击开始按钮进入</h1>
        <label><input type="text" v-model="inputName"/></label>
        <button v-on:click="begin">开始使用</button>
    </div>
</template>

<script>
export default {
    name: 'Main',
    props:{
        msg: String
    },
    data(){
        return{
            inputName:""
        }
    },
    methods:{
        begin(){
            let userName = this.inputName.replace(/[^\u4E00-\u9FA5\a-zA-Z0-9]/gi,'');
            if(userName !== ""){
                this.$router.push({name: 'Home', params: {userName: this.inputName}});
            }else {
                alert("请输入用户名！");
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
