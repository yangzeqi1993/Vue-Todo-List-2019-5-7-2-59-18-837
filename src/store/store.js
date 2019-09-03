import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const initState = {
    messages: [],
    buttons: []
};

const store = new Vuex.Store({
    state: initState,
    getters: {
        getMessages(state){
            return function () {
                return state.messages;
            };
        },
        getMessagesByIndex: function (state) {
            return function (index) {
                return state.messages[index - 1];
            };
        },
        getButtonsByIndex: function (state) {
            return function (index) {
                return state.buttons[index - 1];
            };
        }
    },
    mutations:{
        pushMessages(state,message){
            state.messages.push(message);
        },
        clearMessages(state){
            state.messages = [];
        },

        updateButtonsByIndex(state,data){
            let oldButtons = state.buttons;
            oldButtons[data.index - 1] = data.value;
            state.buttons = [];
            for(let i=0; i<oldButtons.length; i++){
                state.buttons.push(oldButtons[i]);
            }
        },
        pushButtons(state,button){
            state.buttons.push(button);
        },
        clearButtons(state){
            state.buttons = [];
        }
    }
}) ;

export default store;
