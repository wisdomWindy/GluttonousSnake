export default class ScorePanel{
  score = 0;
  level = 1;
  scoreEle:HTMLElement;
  levelEle:HTMLElement;
  // 设置变量限制等级
  maxLevel:number;

  // 升级标准
  scoreUp:number;
  constructor(maxLevel=10, scoreUp = 10){
    this.scoreEle = document.getElementById('score') as HTMLElement;
    this.levelEle = document.getElementById('level') as HTMLElement;
    this.maxLevel = maxLevel;
    this.scoreUp = scoreUp;
  }

  init(){
    
  }

  // 设置一个加分的方法
  addScore(){
    // 分数自增
    this.scoreEle.innerHTML = ++this.score +'';
    // 升级条件
    if(this.score % this.scoreUp === 0){
      this.levelUp();
    }
  }

  // 提升等级的方法
  levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}