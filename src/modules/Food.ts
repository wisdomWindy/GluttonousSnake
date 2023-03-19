export default class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('food') as HTMLElement;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    // 生成随机位置
    // 事物的位置最小是0，最大是290
    // 蛇每次移动一格，一格就是10，所以要求食物的位置必须是10的倍数
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}
