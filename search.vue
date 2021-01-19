<template>
  <div class="home">
  <h1>home</h1>
  <input type="text" v-model="search">
  <p>Search: {{search}}</p>
  <div v-for="name in matchingName" :key='name'>{{name}}</div>
  </div>
</template>

<script>
import { computed,ref, watch, watchEffect} from 'vue'

export default {
  name: 'Home',
  setup(){
    const search = ref('')
    const names = ref(['mario','fdjasif', 'fdiao','ieo','jioe'])

    watch(search,()=>{
      console.log('watch function run')
    })

    watchEffect(()=>{
      console.log('watcheffect function run',search.value)
    }) //only watch one time
    const matchingName = computed(()=>{
      return names.value.filter((name) =>
        name.includes(search.value)
      )
    })

    return { names,search, matchingName }
  }
}
</script>
