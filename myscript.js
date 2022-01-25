const app = new Vue({
    el: "#app",
    data: {
        email:[]
    },
    mounted: function(){
        axios.catch((error) => {
            console.log(error);
        })
    },
    
    methods: {
        generateEmail: function(){
            for(let i=0; i<10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) =>{
                        console.log(response.data.response)
                        this.email.push(response.data.response)

                    })
                    
            }                 
        }
    }
})