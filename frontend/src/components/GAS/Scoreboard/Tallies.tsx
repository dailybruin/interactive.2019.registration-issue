import * as React from "react";
import { css } from "emotion";
import { mobile, notMobile } from "../../Shared/mediaQueries";

export default class Tallies extends React.PureComponent<{}, {}> {
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
            </div>
        )
    }
}