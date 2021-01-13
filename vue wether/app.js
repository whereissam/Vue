new Vue({
    el: '#app',
    data(){
        return{
            api_key: 'a6fe7afc90f9d853749caf705ac36e37',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query:'',
            weather:{}
        }
    },
    methods: {
        fetchWeather(e){
            if(e.key === 'Enter'){
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                    .then(res=>{
                        return res.json();
                    }).then(this.setResults);
            }
        },
        setResults(results){
            this.weather = results;
            },
        }
})