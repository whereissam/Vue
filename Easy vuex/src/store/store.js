import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products:[
            {name: 'Nangn', price: 20},
           {name: 'Jiaud', price: 30},
           {name: 'Ndiep', price: 20},
           {name: 'Ojdue', price: 20},
           {name: 'Sjdio', price: 20}
         ]
    }
})