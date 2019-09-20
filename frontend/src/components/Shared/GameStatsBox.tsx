import * as React from "react";
import { GameStatsProps } from "../../types";

export default class GameStatsBox extends React.Component<GameStatsProps, {}> {
    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                border: "4px solid black",
                flex: "1"
            }}>
                <div style={{
                    backgroundColor: "black",
                    color: "white",
                    flex: "1"
                }}>
                    {this.props.title}
                </div>
                <div style={{
                    backgroundColor: "white",
                    flex: "1"
                }}>
                    {this.props.body}
                </div>
            </div>
        )
    }
}