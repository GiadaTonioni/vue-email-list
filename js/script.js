const {createApp} = Vue;

createApp({
	data(){
		return{
            emailList: []
		}
	},
    mounted(){
        this.generateRandomEmailsGroup();
    },
    methods:{
        generateRandomEmailsGroup(){
            for(let i=0; i<= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                this.emailList.push(result.data.response)
                })
                }
            }
        }
    }).mount('#app')
                
            
