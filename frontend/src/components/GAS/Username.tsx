import * as React from "react";
import { css } from "emotion";
import { UsernameProps, UsernameState } from "../../types";
import { api } from "../../utils";

class Username extends React.PureComponent<UsernameProps, UsernameState> {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
    }

    state: UsernameState = {
        username: ""
    }

    handleSubmit(event) {
        event.preventDefault();
        api.setUsername(this.state.username).then(() => this.props.onSubmit());
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
        `} onSubmit={this.handleSubmit}>
                <input type="text" onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                <button type="submit">Submit</button>
            </form>
        </div>
    }
}

export default Username;