import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const initState = {
    list:[]
};

const store = new Vuex.Store({
    state: initState,
    getters: {
        getList(state){
            return function () {
                return state.list;
            };
        },
        getListByIndex: function (state) {
            return function (index) {
                return state.list[index - 1];
            };
        }
    },
    mutations:{
        pushList(state,listItem){
            state.list.push(listItem);
        }
    },
    actions: {
        addMessage(context,listItem){
            axios.post('http://localhost:5000/list',listItem)
                .then(function (response) {
                    context.commit('pushList',response.data);
                })
                .catch(function (error) {
                    // handle error
                    context.commit('setMessages',{msg1:"fail...",msg2:"fail..."});
                    window.console.log(error);
                    window.console.log("is catch");
                })
                .finally(function () {
                    window.console.log("is finally");
                });
        }
    }
}) ;

export default store;
