import './style.css'

async function component() {
  const element = document.createElement('div');
	const {default: _} = await import('lodash')
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	const moment = await import('moment')
	element.innerHTML += moment().format('YYYY-MM-DD')
	return element
}

component().then(com => {
	document.body.appendChild(com)
})

