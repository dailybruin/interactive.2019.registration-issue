import * as React from "react";
import { css } from "emotion";
import { GameState, GameProps } from "../../../types";
import config from "../../../config";
import Board from "./Board";
import Stats from "./Stats";
import { api } from "../../../utils";
import { mobile } from "../../Shared/mediaQueries";
import Complete from "./Complete";

const NUM_LEVELS = config.images.length;
const NUM_SECS = 5;
const NUM_MS = NUM_SECS * 1000;

class Game extends React.Component<GameProps, GameState> {
    timer: any;
    constructor(props) {
        super(props);
        this.onSubmitUsername = this.onSubmitUsername.bind(this);
        this.onLevelDone = this.onLevelDone.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.incMoves = this.incMoves.bind(this);
    }

    state: GameState = {
        verified: false,
        level: 0,
        complete: false,
        moves: 0,
        time: 0,
        score: 0
    }

    componentDidMount() {
        this.setTimer()
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    setTimer() {
        this.timer = setInterval(() => {
            this.setState(prevState => {
                return {
                    time: prevState.time + NUM_SECS
                };
            })
        }, NUM_MS);
    }

    clearTimer() {
        clearInterval(this.timer);
    }

    incMoves() {
        this.setState(prevState => ({
            moves: prevState.moves + 1
        }))
    }

    onSubmitUsername() {
        this.setState({
            verified: true
        })
    }

    onLevelDone() {
        console.log("OnLEVELDONE")
        const { level: old } = this.state;
        console.log("old level is " + old);
        api.score();
        if (old + 1 >= NUM_LEVELS) {
            this.setState({
                level: NUM_LEVELS,
                complete: true,
                time: 0,
                moves: 0
            }, this.clearTimer)
        } else {
            this.setState({
                level: old + 1,
                time: 0,
                moves: 0
            }, () => {
                this.clearTimer();
                this.setTimer();
            })
        }
    }

    render() {
        return <div id="game_comp" className={css`
            display: flex;
            flex-flow: row wrap;
            ${mobile} {
                justify-content: center;
            }
        `}>
            {this.state.complete ? <Complete /> : <>
                <Board imageObj={config.images[this.state.level]} onComplete={this.onLevelDone} incMoves={this.incMoves} />
                <Stats moves={this.state.moves} time={this.state.time} score={this.state.score} />
            </>}
        </div>;
    }
}

export default Game;
