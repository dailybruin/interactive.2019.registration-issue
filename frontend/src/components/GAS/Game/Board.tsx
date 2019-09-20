import * as React from "react";
import { BoardProps, BoardState } from "../../../types";
const MIN_NUM_TILES = 3;

function distance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

class Board extends React.PureComponent<BoardProps, BoardState> {
    canvas: React.RefObject<HTMLCanvasElement>;
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.drawTiles = this.drawTiles.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.loadedImage = this.loadedImage.bind(this);
    }

    state: BoardState = {
        image: null,
        clicked: {
            x: 0,
            y: 0
        },
        empty: {
            x: 0,
            y: 0
        },
        scaling: {
            width: 0,
            height: 0
        },
        solved: false,
        tileSize: 0,
        board: {},
        numVertTiles: 0,
        numHorTiles: 0
    }

    componentDidMount() {
        const image = new Image();
        image.addEventListener("load", e => this.loadedImage(e, image), false);
        image.src = this.props.image.url;
    }

    loadedImage(e, image) {
        // The natural sizes of the image
        const imageWidth = e.target.width;
        const imageHeight = e.target.height;
        console.log("image width: " + imageWidth + ". image height: " + imageHeight)

        const smallestSide = imageHeight < imageWidth ? imageHeight : imageWidth;
        // We take the smallest dimension and divide it by the minimum number
        // of tiles we want
        const tileSize = smallestSide / MIN_NUM_TILES;

        const numVertTiles = Math.floor(imageHeight / tileSize);
        const numHorTiles = Math.floor(imageWidth / tileSize);

        let board = new Object();
        for (let i = 0; i < numHorTiles; i++) {
            board[i] = new Object();
            for (let j = 0; j < numVertTiles; j++) {
                board[i][j] = new Object();
                board[i][j].x = (numHorTiles - 1) - i;
                board[i][j].y = (numVertTiles - 1) - j;
            }
        }
        const empty = { x: 0, y: 0 };
        empty.x = board[numHorTiles - 1][numVertTiles - 1].x;
        empty.y = board[numHorTiles - 1][numVertTiles - 1].y;
        console.log("this.canvas.current.width: " + this.canvas.current.width + ". this.canvas.current.height: " + this.canvas.current.height)
        const scaleWidth = this.canvas.current.width / imageWidth;
        const scaleHeight = this.canvas.current.height / imageHeight;
        console.log("scale width is " + scaleWidth)
        console.log("scale height is " + scaleHeight)
        const context = this.canvas.current.getContext("2d");
        context.scale(scaleWidth, scaleHeight);

        this.setState({
            image,
            tileSize,
            numVertTiles,
            numHorTiles,
            empty,
            board,
            solved: false,
            scaling: {
                width: scaleWidth,
                height: scaleHeight
            }
        }, this.drawTiles)
    }

    drawTiles() {
        const { image, board, empty, solved, tileSize, numHorTiles, numVertTiles, scaling } = this.state;

        const context = this.canvas.current.getContext("2d");
        for (let i = 0; i < numHorTiles; i++) {
            for (let j = 0; j < numVertTiles; j++) {
                let x = board[i][j].x;
                let y = board[i][j].y;

                if ((i != empty.x || j != empty.y) || solved == true) {
                    console.log("i" + i + "j" + j);
                    context.drawImage(image, x * tileSize, y * tileSize, tileSize, tileSize,
                        i * tileSize, j * tileSize, tileSize, tileSize);

                } else {
                    context.beginPath();
                    context.fillRect(i * tileSize, j * tileSize, tileSize, tileSize);
                    context.fill();
                    context.stroke();
                }
            }
        }
    }

    handleClick(e) {
        const canvas = this.canvas.current;
        const { tileSize, scaling, board, numHorTiles, numVertTiles, empty: { x: ex, y: ey } } = this.state;

        const x = Math.floor((e.pageX - canvas.offsetLeft) / tileSize / scaling.width);
        const y = Math.floor((e.pageY - canvas.offsetTop) / tileSize / scaling.height);


        if (distance(x, y, ex, ey) == 1) {
            board[ex][ey].x = board[x][y].x;
            board[ex][ey].y = board[x][y].y;
            board[x][y].x = numHorTiles - 1;
            board[x][y].y = numVertTiles - 1;
            const nex = x;
            const ney = y;

            let flag = true;
            for (let i = 0; i < numHorTiles; i++) {
                for (let j = 0; j < numVertTiles; j++) {
                    if (board[i][j].x != i || board[i][j].y != j) {
                        flag = false;
                    }
                }
            }

            this.setState({
                clicked: {
                    x,
                    y
                },
                empty: {
                    x: nex,
                    y: ney
                },
                board,
                solved: flag
            }, this.drawTiles);
        }
    }

    render() {
        return <canvas width="auto" height="auto" ref={this.canvas} onClick={this.handleClick} />;
    }
}

export default Board;
