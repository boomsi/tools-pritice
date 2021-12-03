 import { cube } from './math.js';

  function component() {
   const element = document.createElement('pre');
	console.log(process.env.NODE_ENV, ??)
   element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());
