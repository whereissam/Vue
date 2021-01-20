import {ref} from 'vue'

const getPost = (id) =>{
        const post = ref([])
        const error = ref(null)
        
        const load = async () => {
          try{
            let data = await fetch('http://localhost:3000/posts/' + id)
            // console.log(data)
            if(!data.ok){
              throw Error('that post not available') //generates an exception
            }
            post.value = await data.json() // pass data to json 
            // console.log(posts.value)
          }
          catch(err){
            error.value = err.message // pass exception to ref error
            console.log(error.value)
          }
        }
        return {post,error, load} // pass value to Home.vue
}
export default getPost