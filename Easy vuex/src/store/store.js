import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state:{
        products:[
            {name: 'Nangn', price: 20},
           {name: 'Jiaud', price: 30},
           {name: 'Ndiep', price: 20},
           {name: 'Ojdue', price: 20},
           {name: 'Sjdio', price: 20}
         ]
    },
    getters:{ //store and sent to another vue
        saleProduct: state =>{ 
        //saleProduct is a function and it take product to manipulate then return 
        var saleProduct = state.products.map((product) => {
        return {
          name: `** ${product.name} **`,
          price: `${product.price / 2}`
        }
      })
      return saleProduct
    }
   },
   mutations:{ 
       reducePrice: (state,payload) =>{
           state.products.forEach(product =>{
               product.price -= payload;
           })
       }
   },
   actions:{ //more easy to debug 
       reducePrice: (context,payload) => {
           setTimeout(function(){
            context.commit('reducePrice',payload)
           },2000)
       }
   }
})