import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameController {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isAlive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    init() {
        // document.addEventListener('keydown', this.keydownHandler.bind(this));
        document.addEventListener('keydown', (e) => this.keydownHandler(e));
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        if (!this.isReverseDirection(event.key)) {
            this.direction = event.key
        }
    }

    private isReverseDirection(direction: string) {
        return this.direction === 'ArrowUp' && direction === 'ArrowDown' ||
            this.direction === 'ArrowDown' && direction === 'ArrowUp' ||
            this.direction === 'ArrowLeft' && direction === 'ArrowRight' ||
            this.direction === 'ArrowRight' && direction === 'ArrowLeft';
    }

    run() {
        // 根据direction改变蛇的位置
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        if (this.checkEat(X, Y)) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
        this.snake.moveBody()

        try {
            this.snake.X = X;
            this.snake.Y = Y;
            this.snake.checkHeadBody()
        } catch (e) {
            alert("游戏结束")
            this.isAlive = false
        }
        this.isAlive && setTimeout(() => this.run(), 300 - (this.scorePanel.level - 1) * 30);
    }


    private checkEat(X: number, Y: number) {
        return this.snake.X === this.food.X && this.snake.Y === this.food.Y
    }
}

export default GameController;