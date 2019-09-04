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
        },
        updateList(state,listItem){
            let oldList = state.list;
            oldList[listItem.id-1] = listItem;
            state.list = [];
            for(let i=0; i<oldList.length; i++){
                state.list.push(oldList[i]);
            }
        }
    },
    actions: {
        addMessageToDatabase(context,listItem){
            axios.post('http://localhost:5000/list',listItem)
                .then(function (response) {
                    //context.commit('pushList',response.data);
                    store.dispatch('addListFromDatabase',response.data.id);
                })
                .catch(function (error) {
                    // handle error
                    window.console.log(error);
                });
        },
        addListFromDatabase(context,id){
            axios.get('http://localhost:5000/list/'+id)
                .then(function (response) {
                    context.commit('pushList',response.data);
                })
                .catch(function (error) {
                    // handle error
                    window.console.log(error);
                });
        },
        updateMessageStatusToDatabase(context,listItem){
            axios.put('http://localhost:5000/list/'+listItem.id,listItem)
                .then(function (response) {
                    store.dispatch('updateMessageStatusFromDatabase',response.data);
                })
                .catch(function (error) {
                    // handle error
                    window.console.log(error);
                });
        },
        updateMessageStatusFromDatabase(context,listItem){
            axios.put('http://localhost:5000/list/'+listItem.id,listItem)
                .then(function (response) {
                    context.commit('updateList',response.data);
                })
                .catch(function (error) {
                    // handle error
                    window.console.log(error);
                });
        }

    }
}) ;

export default store;
