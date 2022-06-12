import myName from './myName';


function component() {
  const element = document.createElement('div');

  element.textContent = myName('rusterz');
  return element;
}

document.body.appendChild(component());