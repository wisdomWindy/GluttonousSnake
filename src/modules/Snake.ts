export default class Snake{
  // 蛇头
  head:HTMLElement;
  // 蛇的身体包括蛇头
  bodies:HTMLCollection;
  element:HTMLElement;
  constructor(){
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = document.getElementById('snake')!.children as HTMLCollection;
    this.init();
  }

  init(){
    this.X = 0;
    this.Y = 0;
  }

  get X(){
    console.log(this.head);
    return this.head.offsetLeft;
  }

  get Y(){
    return this.head.offsetTop;
  }

  set X(value:number){
    if(this.X === value){
      return;
    }
    if(value < 0 || value > 300){
      // 蛇撞墙了
      throw new Error('蛇撞墙了');
    }
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      if(value > this.X){
        value = this.X - 10;
      } else {
        value = this.X +10;
      }
    }
    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }

  set Y(value:number){
    if(this.Y === value){
      return;
    }
    // X值的合法范围0-290;
    if(value < 0 || value >300){
      // 蛇撞墙了
      throw new Error('蛇撞墙了');
    }
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }

  // 添加蛇的身体
  addBody(){
    let element = document.createElement('div') as HTMLElement;
    this.element.insertAdjacentElement('beforeend',element);
  }

  // 蛇的身体移动的方法
  moveBody(){
    // 把后面的身体的位置设置为前一个身体的位置
    for(let i = this.bodies.length - 1; i > 0; i--){
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 检查自己是否状态自己
  checkHeadBody(){
    for(let i = 1; i < this.bodies.length; i++){
      if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop){
        throw new Error('蛇撞到自己了');
      }
    }
  };
}