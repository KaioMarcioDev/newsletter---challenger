const form = document.querySelector('form')
const email = document.getElementById('email')
const modal = document.querySelector('dialog')

form.addEventListener('submit',(e)=>{
	e.preventDefault()
	if(email.value ==''){
		modal.showModal()
	}

})