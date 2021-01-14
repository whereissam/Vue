<template>
<div>
  <h1>hwwwwol</h1>
  <ul>
        <li v-for="name in names" :key='name'>
         {{name}}
        </li>
  </ul>
</div>

</template>

<script>
export default {
  data () {
    return {
     names: ['Uou','siw','woa']
    }
  }
}
</script>

<style scoped>

h1{
  color: purple
}


</style>
