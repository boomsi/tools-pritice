import _ from 'lodash'
import moment from 'moment'
import './style.css'
import Icon from './icon.png'
import printMe from './print.js'

function component() {
  const element = document.createElement('div');
	const btn  = document.createElement('button')

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add(`hello-${moment().format('YYYY-MM-DD HH:mm:ss')}`);
	btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
//	const myIcon = new Image()
//	myIcon.src = Icon
	

  return element;
}

document.body.appendChild(component());
