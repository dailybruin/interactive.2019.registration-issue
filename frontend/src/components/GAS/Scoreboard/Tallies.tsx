import * as React from "react";
import { css } from "emotion";
import { mobile, notMobile } from "../../Shared/mediaQueries";
import { api } from "../../../utils";
import colors from "../../Shared/colors";

function sorter(a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
}

function noZeroes(x) {
    return x.score > 0;
}

export default class Tallies extends React.Component<{}, { scores: { username: string; score: number; }[] }> {
    state = {
        scores: []
    };

    componentDidMount() {
        api.scores().then(res => res.status === 200 ? res.json() : undefined).then(res => {
            const scores = res.filter(noZeroes).sort(sorter);
            this.setState({
                scores
            })
        })
    };

    render() {
        return (
            <div className={css`
                background-color: white;
                border: 1px inset rgba(0, 0, 0, 0.25);

                ${notMobile} {
                    max-height: 250px;
                }

                ${mobile} {
                    height: 150px;
                }

                overflow: scroll;
                margin: auto;
                padding: 0.4em;
            `}>
                {this.state.scores.map((x, idx) => (
                    <div key={idx} className={css`
                        display: flex;
                        justify-content: space-between;
                        padding: 0.3em 0;
                    `}>
                        <div className={css`
                            background-color: ${colors.red};
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