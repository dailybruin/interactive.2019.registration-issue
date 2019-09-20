import * as React from 'react';
import { css } from 'emotion';
import dbsvg from "../../images/db.svg";
import titlesvg from "../../images/title.svg";
import { mobile, notMobile } from '../Shared/mediaQueries';

export default class Header extends React.PureComponent<{}, {}> {
    render() {
        return (<div className={css`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${notMobile} {
                width: 30%;
            }

            ${mobile} {
                width: 80%;
            }
            margin-top: 1em;
        `}>
            <img className={css`
                ${mobile} {
                    width: 50%;
                    margin-bottom: 5px;
                }

                ${notMobile} {
                    width: 30%;
                    min-width: 150px;
                    margin-bottom: 15px;
                }
            `} src={dbsvg} alt="The Daily Bruin" />
            <img className={css`
                margin: 0;
                ${notMobile} {
                    width: 100%;
                    min-width: 300px;
                }
                ${mobile} {
                    max-width: 100%;
                }
            `} src={titlesvg} alt="Registration Issue" />
            <h2 className={css`
                letter-spacing: 0.2em;
                ${notMobile} {
                    font-size: 1.6em;
                }

                ${mobile} {
                    font-size: 1.2em;
                }
                margin: 0;
            `}>2019</h2>
        </div>)
    }
}