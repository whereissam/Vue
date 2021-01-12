new Vue ({
    el:'#app',
    data:{
        previous: null,
        show: '-10',
        operator: null,
        operatorClick: false,
        run: false,
    },
    methods:{
        clear(){
            return this.show = '0'
        },
        addmin(){
           this.show = this.show.charAt(0) === '-' ? this.show.slice(1) : `-${this.show}`;
        },
        percent(){
            this.show = `${parseFloat(this.show) / 100}`
        },
        append(number){
            if(this.operatorClick == true){
                this.show = '';
                this.operatorClick = false;
            }
            this.show = this.show == '0' ? this.show = `${number}` : `${this.show}${number}`
        },
        dot(){
            if(this.show.indexOf('.') === -1){
                this.append('.')
        }
        },
        setPrevious(){
            this.previous = this.show;
            this.operatorClick = true;
            this.run = true
        },
            div(){
                this.operator = (a,b) => a / b
                this.setPrevious()
            },
            minus(){
                this.operator = (a,b) => a - b
                this.setPrevious()
            },
            plus(){
                this.operator = (a,b) => a + b
                this.setPrevious()
            },
            times(){
                this.operator = (a,b) => a * b
                this.setPrevious()
            },
            equal(){
                if(this.run == true){
                    this.show = `${this.operator(
                    parseFloat(this.show),
                    parseFloat(this.previous)
                )}`;
                this.previous = null;
                }else{
                    return this.show 
                }
                
            }
        },
    computed:{

    }
})