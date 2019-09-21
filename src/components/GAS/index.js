import React from "react";
import StartScreen from "./Start";
import Scoreboard from "./Scoreboard";
import { css } from "emotion";
import { mobile, notMobile } from "../Shared/mediaQueries";

const Box = ({ children }) => (
    <div className={css`
        padding: 1em;
        background-color: #F4F4F4;
        border-radius: 4%;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(0, 0, 0, 0.05);

        ${mobile} {
            width: 90%;
        }
    `}>
        {children}
    </div>
);

export default class GameAndScoreboard extends React.Component {
    render() {
        return (
            <div className={css`
                display: flex;
                ${mobile} {
                    text-align: center;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                ${notMobile} {
                    flex-direction: row;
                    justify-content: space-around;
                    width: 90%;
                    flex-flow: row wrap;
                }
            `}>
                <Box><StartScreen /></Box>
                <Box><Scoreboard /></Box>
            </div>
        )
    }
}