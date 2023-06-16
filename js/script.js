const {createApp} = Vue;

createApp({
	data(){
		return{
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
	mounted(){
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
			this.randomNumber = result.data.response
		}
    )}
}).mount('#app')
