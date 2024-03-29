import React from "react";
import { Section } from "./Section";
import { api } from "../../utils";
import { css } from "emotion";
import { notMobile } from "../Shared/mediaQueries";

export class ArticleGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        api.getData().then(response => response.json())
            .then(data => {
                let sections = data.data["data.aml"] ? data.data["data.aml"].sections : [];
                this.setState({
                    data: sections
                });
            });
    }

    render() {
        return (
            <div id="__article_grid" className={css`
                ${notMobile} {
                    display: flex; 
                    flex-direction: column;
                }
            `}>
                {this.state.data.length
                    ? this.state.data.map(section => (
                        <Section key={section.section} data={section} />
                    ))
                    : null}
            </div>
        );
    }
}