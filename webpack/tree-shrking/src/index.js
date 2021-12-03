// import _ from 'lodash'
import {t1, t2} from './tool.js'

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	 element.innerHTML = '222'
  element.classList.add('hello');

   return element;
 }

function test() {
	const list  = {name: 1, age: 2, sex: 1}

	const res = _.get(list, 'name')
	console.log(res)
}

t1(1, 3)
t2(1, 1)
document.body.appendChild(component());
// test()

