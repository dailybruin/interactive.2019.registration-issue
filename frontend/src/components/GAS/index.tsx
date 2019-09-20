import * as React from "react";
import StartScreen from "./Start";
import Scoreboard from "./Scoreboard";
import { css } from "emotion";
import { mobile, notMobile } from "../Shared/mediaQueries";

const Box = ({ children }) => (
    <div className={css`
    padding: 1em;
    background-color: #F4F4F4;
    ${mobile} {
        width: 90%;
    }
  `}>
        {children}
    </div>
);

export default class GameAndScoreboard extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className={css`
                display: flex;
                width: 100%;
                flex-flow: row wrap;
                
                ${mobile} {
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                ${notMobile} {
                    flex-direction: row;
                    justify-content: space-around;
                    width: 90%;
                }
            `}>
                <Box><StartScreen /></Box>
                <Box><Scoreboard /></Box>
            </div>
        )
    }
}