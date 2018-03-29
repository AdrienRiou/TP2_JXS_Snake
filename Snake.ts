import { SnakePart } from './SnakePart'

export class Snake {
    tabPart : SnakePart[] = new Array();
    size : number;

    constructor(size : number) {
        this.tabPart = [];
        for(let i = 0; i<size; i++){
            this.tabPart[i] = new SnakePart(i,0);
        }
        this.size = size;
    }

    getSnakeSize() {
        return this.size;
    }

    addSnakePart(part : SnakePart) {
        this.tabPart.push(part);
    }

    draw(ctx : CanvasRenderingContext2D, gridWidth : number, gridHeight : number) {
        this.tabPart.forEach((element) => {
            console.log(element);
            element.draw(ctx, gridWidth, gridHeight);
        })
    }
}