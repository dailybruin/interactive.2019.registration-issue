import * as React from "react";
import { css } from "emotion";
import { mobile, notMobile } from "../../Shared/mediaQueries";
import { api } from "../../../utils";

export default class Tallies extends React.Component<{}, { scores: { username: string; score: number; }[] }> {
    state = {
        scores: []
    };

    componentDidMount() {
        api.scores().then(res => res.status === 200 ? res.json() : undefined).then(scores => {
            this.setState({
                scores
            })
        })
    };

    render() {
        return (
            <div className={css`
                background-color: white;
                width: 80%;

                ${notMobile} {
                    height: 300px;
                }

                ${mobile} {
                    height: 150px;
                }

                overflow: scroll;
                margin: 0px;
            `}>
                {this.state.scores.map((x, idx) => (
                    <div key={idx} className={css`
                        display: flex;
                        justify-content: space-between;
                    `}>
                        <div className={css`
                            background-color: #D16259;
                            color: white;
                            border-radius: 50%;
                            height: 28px;
                            width: 28px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        `}>{idx + 1}</div>
                        <span className={css`
                            font-size: 1.2em;
                        `}>{x.username}</span>
                        <span className={css`
                            font-size: 1.2em;
                        `}>{x.score}</span>
                    </div>
                ))}
            </div>
        )
    }
}