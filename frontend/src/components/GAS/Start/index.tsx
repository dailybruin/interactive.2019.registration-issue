import * as React from "react";
import Username from "../Username";
import Game from "../Game";
import { css } from "emotion";
import { mobile, notMobile } from "../../Shared/mediaQueries";

class StartScreen extends React.PureComponent<{}, {}> {
    constructor(props) {
        super(props);
        this.onSubmitUsername = this.onSubmitUsername.bind(this);
    }

    state = {
        verified: false,
    }

    onSubmitUsername() {
        this.setState({
            verified: true
        })
    }

    render() {
        return <div className={css`
            display: flex;
            justify-content: center;
            position: relative;
            align-items: center;

            ${notMobile} {
                flex-grow: 2;
                flex-basis: 0px;
            }`
        }>
            {this.state.verified === false
                ? <div className={css`
                    transform: translate(-50%, -50%);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                `}>
                    <Username onSubmit={this.onSubmitUsername} />
                </div>
                : null}
            <Game />
        </div>
    }
}

export default StartScreen;
