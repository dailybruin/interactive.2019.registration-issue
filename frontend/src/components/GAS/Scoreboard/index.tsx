import * as React from "react";
import { css } from "emotion";
import { mobile, notMobile } from "../../Shared/mediaQueries";

export default class Scoreboard extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className={css`
                ${notMobile} {
                    flex-grow: 1;
                    flex-basis: 0px;
                }
            `}>
                Hi
            </div>
        )
    }
}