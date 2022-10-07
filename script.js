const buttonShare = document.querySelector('button')
const social = document.querySelector('.social')

buttonShare.addEventListener('click', displaySocial)
window.addEventListener('keydown', handleEsc)

function displaySocial() {
	social.classList.toggle('active')
	buttonShare.classList.toggle('active')
}

function handleEsc(event) {
	if(event.key === 'Escape') {
		social.classList.remove('active')
		buttonShare.classList.remove('active')
	}
}