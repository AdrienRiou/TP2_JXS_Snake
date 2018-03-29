export class Game {

    canvasContext : CanvasRenderingContext2D;
    gridWidth : number;
    gridHeight : number;
    initialSnake : Snake;

    constructor(public canvas : HTMLCanvasElement, public speed : number, public gridSize : number = 5) {
        this.gridWidth = canvas.width / gridSize;
        this.gridHeight = canvas.height / gridSize;
        this.canvasContext = canvas.getContext("2d");
        this.initialSnake = new Snake(3);

        // TODO : listen to user interaction
    }

    /**
     * Start game
     */
    start() {
        // TODO : initialize game
        this.draw();
        this.animate(); // Start animation
    }

    animate() {
        let fps = this.speed;
        let now;
        let then = Date.now();
        let interval = 1000/fps;
        let delta;

        let animationLoop = (function () {
            if (!this.isGameOver) {
                requestAnimationFrame(animationLoop);
            }

            now = Date.now();
            delta = now - then;

            if (delta > interval) {
                then = now - (delta % interval);
                this.update();
            }

        }).bind(this);

        animationLoop();
    }

    /**
     * Update status of game and view
     */
    update() {
        // TODO
        console.log("update")
    }

    draw() {
        this.initialSnake.draw(this.canvasContext);
    }

}

class SnakePart {
    x : number;
    y : number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rec(this.x, this.y, 5, 5);
        ctx.stroke();
    }
}

class Snake {
    tabPart;
    size : number;
    constructor(size) {
        this.tabPart = new Array();
        this.size = size;
    }

    getSnakeSize() {
        return this.size;
    }

    addSnakePart(part) {
        this.tabPart.push(part);
    }

    draw(ctx) {
        this.tabPart.forEach(element => {
            element.draw(ctx);
        });
    }
}