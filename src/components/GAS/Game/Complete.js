import React from "react";
import { css } from "emotion";

function Complete() {
    return (
        <div className={css`text-align: center`}>
            <h1>Congrats!</h1>
            <h2>You've uncovered all the clues.</h2>
            <p>Now head over to <a href="https://apply.uclastudentmedia.com/publications/daily-bruin/" target="_blank" rel="noopener noreferrer">the Daily Bruin application site</a>!</p>
            <p>Applications are due October 7th, 2019 at noon.</p>
        </div>
    )
}

export default Complete;