const {createApp} = Vue;

createApp({
	data(){
		return{
            email: '',
            emailList: 
            [
                'uno@gmail.com', 
                'due@gmail.com', 
                'tre@gmail.com', 
                'quattro@gmail.com', 
                'cinque@gmail.com', 
                'sei@gmail.com',
                'sette@gmail.com',
                'otto@gmail.com',
                'nove@gmail.com',
                'dieci@gmail.com'
            ]
		}
	},
	
    methods:{
        callEmail(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.emailList = result.data.response
                })
                
            }
        }
    }).mount('#app')
            
