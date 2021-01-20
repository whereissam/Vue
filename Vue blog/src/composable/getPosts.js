import { ref} from 'vue'
const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)
    
    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        // console.log(data)
        if(!data.ok){
          throw Error('no data available') //generates an exception
        }
        posts.value = await data.json() // pass data to json 
        console.log(posts.value)
      }
      catch(err){
        error.value = err.message // pass exception to ref error
        console.log(error.value)
      }
    }
    return {posts,error, load} // pass value to Home.vue
    // load() // call it will response
}
export default getPosts