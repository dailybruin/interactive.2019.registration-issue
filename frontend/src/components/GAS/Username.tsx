import * as React from "react";
import { css } from "emotion";
import { UsernameProps, UsernameState } from "../../types";
import { api } from "../../utils";

class Username extends React.Component<UsernameProps, UsernameState> {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
    }

    state: UsernameState = {
        username: "",
        taken: false
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("HANDLE SUBMIT")
        api.setUsername(this.state.username).then(res => res.status === 200 ? this.props.onSubmit() : this.setState({ taken: true }));
    }

    increaseScore(e) {
        e.preventDefault();
        api.score();
    }

    render() {
        return <div className={css`
            background-color: blue;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
        `}><form className={css`
            margin: 0;
            padding: 0;
            text-align: center;
            display: flex;
            flex-direction: column;
        `} onSubmit={this.handleSubmit}>
                <label htmlFor="username_form">Username</label>
                <input name="username_form" type="text" onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
            </form>
            {this.state.taken ? <p>Username taken!</p> : null}
        </div>
    }
}

export default Username;