const form = document.querySelector('form')
const email = document.getElementById('email')
const modal = document.getElementById('janela-modal')
const alarm = document.querySelector('small')
const input = document.querySelector('input')
const span = document.querySelector('span')
const tex = document.getElementById('tex')

form.addEventListener('submit',(e)=>{
	e.preventDefault()
	if(email.value == ''){
	    
		tex.innerHTML = "please fill"
		input.style.border ="1px solid red"

	}else {

		abrirModal()
	    fecharJanela()

	}

})

function abrirModal(){

	modal.classList.add('abrir')
	span.innerHTML = email.value 

}

function fecharJanela(){

	modal.addEventListener('click',(e)=>{

		if(e.target.id == 'fechar' || e.target.id=='janela-modal'){
			modal.classList.remove('abrir')
			window.location.href = 'index.html'
		}

	})
}

email.addEventListener('keyup',()=>{
	if(validateEmail(email.value) !== true){
		alarm.innerHTML = "Format ex:exemple@exemple.com"
		input.style.border ="1px solid red"
	}
})

function validateEmail(email){

	let pattern = /^[_a-z0-9]+(\.[a-z0-9-]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/
	return pattern.test(email)
}