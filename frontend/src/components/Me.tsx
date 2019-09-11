import * as React from "react";
import { api } from "../utils";

class Me extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        const data = await api.getMe();
        this.setState({
            data
        });
    }

    render() {
        return <p>{JSON.stringify(this.state.data)}</p>
    }
}

export default Me;