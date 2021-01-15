// import axios from 'axios';
new Vue({
    el: '#app',
    data(){
        return{
             message: 'Hello Vue!',
             "citiesname":[
                {"firstName":"John", "lastName":"Doe"},
                {"firstName":"Anna", "lastName":"Smith"},
                {"firstName":"Peter", "lastName":"Jones"}
            ],
            updates:''
        }
    },
    methods:{
        create(){
            this.citiesname.push({
                firstName: this.message
            })
        },
        Update(index){
            this.citiesname.index
        },
        Delete(index){
            this.citiesname.splice(index,1);
        }
    },
    mounted () {
        axios
            .get('http://localhost:3000/citiesname')
            .then((res)=>{console.log(res)})
    }
    
  })