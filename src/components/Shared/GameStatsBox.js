import React from "react";

export default class GameStatsBox extends React.Component {
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
                    flex: "1",
                    fontSize: "1.2em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {this.props.body || "0"}
                </div>
            </div>
        )
    }
}