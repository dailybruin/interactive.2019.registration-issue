import * as React from "react";
import { GameState, GameProps } from "../../../types";
import config from "../../../config";
import Board from "./Board";
import Stats from "./Stats";

const NUM_LEVELS = config.images.length;

class Game extends React.PureComponent<GameProps, GameState> {
    constructor(props) {
        super(props);
        this.onSubmitUsername = this.onSubmitUsername.bind(this);
    }

    state: GameState = {
        verified: false,
        level: 0,
        complete: false
    }

    onSubmitUsername() {
        this.setState({
            verified: true
        })
    }

    onLevelDone() {
        const { level: old } = this.state;
        if (old + 1 >= NUM_LEVELS) {
            this.setState({
                level: NUM_LEVELS,
                complete: true
            })
        } else {
            this.setState({
                level: old + 1
            })
        }
    }

    render() {
        return <div id="game_comp" style={{
            display: "flex"
        }}>
            <Board image={config.images[this.state.level]} />
            <Stats />
        </div>;
    }
}

export default Game;