import * as React from "react";
import { css } from "emotion";

export default function ArticleCard({ article }) {
    return (
        <article
            className={css`
                border: 6px solid black;
                background-color: white;
                padding: 0.7em;
            `}
        >
            <a
                href={article.link}
                className={css`
                    color: gray;
                    text-decoration: none;
                    width: 100%;
                `}
            >
                <img
                    src={article.image}
                    className={css`
                        object-fit: cover;
                        width: 100%;
                        height: 250px;
                    `}
                />
                <h3 className="headline">
                    {article.italics ? (
                        <em>{article.headline}</em>
                    ) : (
                            article.headline
                        )}
                </h3>
                {article.author ? (
                    <div
                        className={css`
                            text-transform: uppercase;
                        `}
                    >
                        By {article.author}
                    </div>
                ) : null}
            </a>
        </article>
    );
}