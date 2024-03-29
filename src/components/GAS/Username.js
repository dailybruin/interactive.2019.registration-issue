import React from "react";
import { css } from "emotion";
import { api } from "../../utils";
import colors from "../Shared/colors";

class Username extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            taken: false,
            banned: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        api.setUsername(this.state.username).then(res => res === "ok" ? this.props.onSubmit() : res === "banned" ? this.setState({ banned: true }) : this.setState({ taken: true }));
    }

    increaseScore(e) {
        e.preventDefault();
        api.score();
    }

    render() {
        return <div className={css`
            background-color: ${colors.cleargray};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
            text-align: center;
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
            {this.state.banned ? <p className={css`color: ${colors.red}`}>That username contains banned words!</p> : null}
            {this.state.taken ? <p className={css`color: ${colors.red}`}>Username taken!</p> : null}
        </div>
    }
}

export default Username;