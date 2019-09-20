import * as React from "react";
import { css } from "emotion";
import { mobile, notMobile } from "../../Shared/mediaQueries";
import Tallies from "./Tallies";

export default class Scoreboard extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className={css`
                ${notMobile} {
                    flex-grow: 1;
                    flex-basis: 0px;
                }
            `}>
                <h1>Leaderboard</h1>
                <Tallies />
            </div>
        )
    }
}