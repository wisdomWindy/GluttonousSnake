import './styles/reset.less';

class Food{
  element:HTMLElement;

  constructor(){
    this.element = document.getElementById('food');
  }

  get X(){
    return this.element.offsetLeft;
  }

  get Y(){
    return this.element.offsetTop;
  }
}