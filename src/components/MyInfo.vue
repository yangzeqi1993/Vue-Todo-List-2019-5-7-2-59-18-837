<template>
    <div id="myinfo">
        <h1>个人资料</h1>
        <table class="input" align="center">
            <tr>
                <td>用户名:</td>
                <td class="myUserInfoShow">{{userName}} </td>
            </tr>
            <tr>
                <td>手机号:</td>
                <td class="myUserInfoShow">12345678901</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "MyInfo",
        data(){
           return{
               userName: this.$route.params.userName
           }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #myinfo{
        margin-top: -200px;
        text-align: center;
    }
    .myUserInfoShow{
        width: 100px;
        text-align: left;
        text-decoration: underline;
    }
</style>
