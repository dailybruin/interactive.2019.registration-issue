import * as React from "react";
import { css } from "emotion";
import GameStatsBox from "../../Shared/GameStatsBox";
import { mobile } from "../../Shared/mediaQueries";
const NUM_SECS = 5;
const NUM_MS = NUM_SECS * 1000;

export default class Stats extends React.Component<{}, {
    moves: number;
    time: number;
    score: number;
}> {
    state = {
        moves: 0,
        time: 0,
        score: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => {
                return {
                    time: prevState.time + NUM_SECS
                };
            })
        }, NUM_MS)
    }

    render() {
        return (
            <div className={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: center;

                ${mobile} {
                    flex-direction: row;
                    width: 100%;
                }
            `}>
                <GameStatsBox title="moves" body={this.state.moves} />
                <GameStatsBox title="timer" body={this.state.time} />
                <GameStatsBox title="score" body={this.state.score} />
            </div>
        )
    }
}