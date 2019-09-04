<template>
    <li class="massage">
        <label>
            <input name="done-todo" type="checkbox" class="done-todo" v-model="$store.state.list[index-1].status">
        </label>
        <span contenteditable="true" class="done-todo">{{$store.getters.getListByIndex(index).message}}</span>
    </li>
</template>

<script>
    export default {
        name: 'Messages',
        props:{
            index: Number
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
    .massage{

    }
</style>
