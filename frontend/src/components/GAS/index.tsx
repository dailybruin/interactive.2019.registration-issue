import * as React from "react";
import StartScreen from "./Start";
import Scoreboard from "./Scoreboard";
import { css } from "emotion";
import { mobile, notMobile } from "../Shared/mediaQueries";

export default class GameAndScoreboard extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className={css`
                display: flex;
                width: 100%;
                
                ${mobile} {
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                ${notMobile} {
                    flex-direction: row;
                    justify-content: space-around;
                }
            `}>
                <StartScreen />
                <Scoreboard />
            </div>
        )
    }
}