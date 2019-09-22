import React from "react";
import Username from "../Username";
import Game from "../Game";
import { css } from "emotion";
import { mobile, notMobile } from "../../Shared/mediaQueries";
import { api } from "../../../utils";

class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitUsername = this.onSubmitUsername.bind(this);
    }

    componentDidMount() {
        api.getMe().then(({ data, status }) => status === 200 ? data : undefined).then(res => this.setState({
            verified: res ? true : false
        })).catch(e => this.setState({
            verified: false
        }))
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
