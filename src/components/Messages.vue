<template>
    <li class="massage">
        <label>
            <input name="done-todo"
                   type="checkbox"
                   class="done-todo"
                   v-model="status"
                   v-on:change="updateStatus">
        </label>
        <span contenteditable="true" class="done-todo">{{$store.getters.getListByIndex(index).message}}</span>
    </li>
</template>

<script>
    export default {
        name: 'Messages',
        props:{
            index: Number,
            message: String
        },
        data(){
            return{
                status: false
            }
        },
        methods:{
            updateStatus(){
                this.$store.dispatch('updateMessageStatusToDatabase',{
                    id: this.index,
                    message: this.$store.getters.getListByIndex(this.index).message,
                    status: this.status
                });
            }
        }
    }
</script>

<style>
    .done-todo{
        cursor:pointer;
        margin: 5px 2px 0;
    }
    li {
        border: 1px solid transparent;
        border-radius: 3px;
        display: inline;
        margin: 0 0 5px 0;
        padding: 8px;
        text-align: left;
    }
</style>
