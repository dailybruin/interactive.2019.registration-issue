import * as React from "react";
import { css } from "emotion";
import GameStatsBox from "../../Shared/GameStatsBox";
import { mobile } from "../../Shared/mediaQueries";
const NUM_SECS = 5;
const NUM_MS = NUM_SECS * 1000;

export default class Stats extends React.Component<{
    moves: number;
    time: number;
    score: number;
}, {}> {
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
                <GameStatsBox title="moves" body={this.props.moves} />
                <GameStatsBox title="timer" body={this.props.time} />
                <GameStatsBox title="score" body={this.props.score} />
            </div>
        )
    }
}