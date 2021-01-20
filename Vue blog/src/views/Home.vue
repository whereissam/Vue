<template>
  <div class="home">
  <h1>home</h1>
  <PostList v-if="showPosts" :posts="posts" />
  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="posts.pop()">delete a post </button>
  </div>
</template>

<script>
import { ref} from 'vue'

import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components:{ PostList},
  setup(){
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok){
          throw Error('no data available') //generates an exception
        }
        posts.value = await data.json() // pass data to json 
      }
      catch(err){
        error.value = err.message // pass exception to ref error
        console.log(error.value)
      }
    }
    load() // call it will response

   const showPosts = ref(true)
    return { posts , showPosts, error}
  }
}
</script>
