<template>
  <div id="app">
   <product-list-one></product-list-one>
   <product-list-two></product-list-two>
  </div>
</template>

<script>

import ProductListOne from './components/productListone.vue';
import ProductListTwo from './components/productListtwo.vue';


export default {
  components:{
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  },
  name: 'app',
  data () {
    return {
    
     
    }
  }
}
</script>



<style>
body{
  font-family: Ubuntu;
  color: #555
}

</style>
