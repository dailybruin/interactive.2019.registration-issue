import * as React from "react";
import { css } from "emotion";
import { BoardProps, BoardState } from "../../../types";
import { mobile, notMobile } from "../../Shared/mediaQueries";
const N = 3;
const N2 = N * N;
const MOVE_DIRECTIONS = ['up', 'down', 'left', 'right'];

function distance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function rand(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function Tile({ index, pos, onClick, url }) {
    const top = pos[0] * 100 + 5;
    const left = pos[1] * 100 + 5;
    const bgLeft = (index % 4) * 100 + 5;
    const bgTop = Math.floor(index / 4) * 100 + 5;

    return <div
        className='tile'
        onClick={onClick}
        style={{ top, left, backgroundPosition: `-${bgLeft}px -${bgTop}px`, backgroundImage: `url(${url})` }}
    />;
}

class Board extends React.PureComponent<BoardProps, BoardState> {
    canvas: React.RefObject<HTMLCanvasElement>;
    constructor(props) {
        super(props);
        this.canMoveTile = this.canMoveTile.bind(this);
        this.moveInDirection = this.moveInDirection.bind(this);
        this.moveTile = this.moveTile.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    state: BoardState = {
        image: null,
        shuffling: true,
        clicked: {
            x: 0,
            y: 0
        },
        emptyIndex: 0,
        scaling: {
            width: 0,
            height: 0
        },
        solved: false,
        tileSize: 0,
        board: [],
        numVertTiles: 0,
        numHorTiles: 0
    }

    componentWillMount() {
        let board = Array(N2).fill({ x: 0, y: 0 }).map((x, index) => ({
            x: Math.floor(index / N),
            y: index % N
        }));
        console.log(board);
        this.setState({
            board
        }, this.shuffle);
    }

    shuffle() {
        this.setState({
            shuffling: true
        })
        let shuffleMoves = rand(5, 10);
        while (shuffleMoves-- > 0) {
            this.moveInDirection(MOVE_DIRECTIONS[rand(0, 3)]);
        }
        this.setState({
            shuffling: false
        })
    }

    canMoveTile(index) {
        if (index < 0 || index >= N2) {
            return false;
        }

        const { board, emptyIndex } = this.state;
        // get the current position of the tile and the empty tile
        const tilePos = board[index];
        const { x: ex, y: ey } = board[emptyIndex];

        // if they are in the same row, then difference in their 
        // column indices must be 1 
        if (tilePos.x === ex) {
            return Math.abs(tilePos.y - ey) === 1;
        }

        // if they are in the same column, then difference in their
        // row indices must be 1
        else if (tilePos.y === ey) {
            return Math.abs(tilePos.x - ex) === 1;
        } else {
            // otherwise they are not adjacent
            return false;
        }
    }

    moveTile(index) {
        const { solved, board, emptyIndex, shuffling } = this.state;

        if (!shuffling && solved) {
            return false;
        }

        // if the tile can not be moved in the first place ...
        if (!this.canMoveTile(index)) {
            return false;
        }

        // Get the positions of the tile and the empty tile
        const emptyPosition = board[emptyIndex];
        const tilePosition = board[index];

        // copy the current board and swap the positions
        let boardAfterMove = [...board];
        boardAfterMove[emptyIndex] = tilePosition;
        boardAfterMove[index] = emptyPosition;

        // update the board, moves counter and the stack
        this.setState({
            board: boardAfterMove,
        })

        return true;
    }

    moveInDirection(dir) {
        const { board, emptyIndex } = this.state;
        const epos = board[emptyIndex];
        const posToMove = dir === 'up' ? { x: epos.x + 1, y: epos.y }
            : dir === 'down' ? { x: epos.x - 1, y: epos.y }
                : dir === 'left' ? { x: epos.x, y: epos.y + 1 }
                    : dir === 'right' ? { x: epos.x, y: epos.y - 1 }
                        : epos;
        let tileToMove = emptyIndex;
        for (let i = 0; i < N; i++) {
            if (board[i].x === posToMove.x && board[i].y === posToMove.y) {
                tileToMove = i;
                break;
            }
        }
        this.moveTile(tileToMove);
    }

    render() {
        const { board } = this.state;
        return board.slice(0, -1).map((pos, index) => (
            <Tile index={index} pos={pos} onClick={this.moveTile(index)} url={this.props.image.url} />
        ));
    }
}

export default Board;
