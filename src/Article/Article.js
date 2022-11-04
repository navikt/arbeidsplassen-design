import React from "react";
import joinClassNames from "../joinClassNames";
import "./Article.css";

export const ArticlePullOutside = ({ children }) => (
    <div className="dsa-article-pull-outside">{children}</div>
);

export const ArticleImage = ({ children, caption, className }) => (
    <figure className={joinClassNames("dsa-article-image", className)}>
        {children}
        <figcaption>{caption}</figcaption>
    </figure>
);
