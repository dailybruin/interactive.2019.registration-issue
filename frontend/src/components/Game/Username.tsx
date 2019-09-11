import * as React from "react";
import { api } from "../../utils";

class Username extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        api.setUsername(this.state.username);
    }

    increaseScore(e) {
        e.preventDefault();
        api.score();
    }

    render() {
        return <div><form onSubmit={this.handleSubmit}>
            <input type="text" onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
            <button type="submit">Submit</button>
        </form>
            <button onClick={e => this.increaseScore(e)}>Increase</button>
        </div>
    }
}

export default Username;