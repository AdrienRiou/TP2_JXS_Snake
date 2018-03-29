export class SnakePart {

    x : number;
    y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    draw(ctx : CanvasRenderingContext2D, gridWidth : number, gridHeight : number) {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, gridWidth, gridHeight);
        ctx.stroke();
    }
}
