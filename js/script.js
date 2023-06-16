const {createApp} = Vue;

createApp({
	data(){
		return{
            randomEmail: '',
            emailList: []
		}
	},
    mounted(){
        this.callRandomEmail()
    },
    methods:{
        callRandomEmail(){
                this.randomEmail = Math.random().toString(36).slice(2)
            },
            generateRandomEmailsGroup(){
                for(let i=0; i<= 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.emailList.push(result.data.response)
                    })
                }
            }
        }
    }).mount('#app')
                
            
