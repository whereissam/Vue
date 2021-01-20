<template>
<div v-if="error">{{ error}}</div>
<div v-if="post" class="post">
  {{ post.title}}
  <p class="pre">{{post.body}} </p> 
  </div>
</template>

<script>
import getPost from '../composable/getPost'
import getPosts from '../composable/getPosts'

export default {
  props:['id'],
  setup(props){
    const { post, error, load} = getPost(props.id)
    load()

    return {post, error}
  }
}
</script>

<style>
.post{
  max-width: 1200px;
  margin: 0 auto;
}
.post p{
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre{
  white-space: pre-wrap;
}
</style>