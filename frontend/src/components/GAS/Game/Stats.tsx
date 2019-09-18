import * as React from "react";
import GameStatsBox from "../../Shared/GameStatsBox";

export default class Stats extends React.PureComponent<{
    moves: string;
    time: string;
    score: string;
}, {}> {
    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center"
            }}>
                <GameStatsBox title="moves" body={this.props.moves || ""} />
                <GameStatsBox title="timer" body={this.props.time || ""} />
                <GameStatsBox title="score" body={this.props.score || ""} />
            </div>
        )
    }
}