import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
import Food from "./Food";

export default class GameController {
  // 定义属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  // 创建属性，存储蛇的方向
  direction = '';
  // 游戏是否结束
  isLive = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  // 游戏的初始化方法
  init() {
    // this.snake.init();
    // this.scorePanel.init();
    this.direction = 'Right';
    this.run();
    document.addEventListener('keydown', this.keydownhandler.bind(this));
  }

  // 创建键盘按下事件的响应函数
  keydownhandler(e: KeyboardEvent) {
    console.log(e);
    // 检查方向，检查用户是否按了正确的按键
    this.direction = e.key;
  }

  run() {
    // 根据方向，使蛇的位置改变
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case "ArrowDown":
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case "Left":
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
    }
    console.log(X,Y)
    this.checkExt(X,Y);
    try{
      this.snake.X = X;
      this.snake.Y = Y;
    }catch(err){
      // 将isLive设置为false
      this.isLive = false;
      // this.gameOver();
      // this.init();
    }
    
  //  this.isLive && requestAnimationFrame(this.run.bind(this))
    this.isLive && setTimeout(this.run.bind(this), 300 -(this.scorePanel.level-1)*10);
  }

  // 定义一个方法，用来检查是否吃到食物
  checkExt(X:number, Y:number){
    if (X === this.food.X && this.food.Y === Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }

  // 游戏结束提示
  gameOver(){
    alert('Game Over');
  }
}