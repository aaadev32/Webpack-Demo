import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './dog.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.textContent = myName('rusterz');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());