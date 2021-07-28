import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";
import Image from "next/image";

export default {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={theme}
        showLineNumbers={true}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  p: (paragraph) => {
    const { node } = paragraph;
    const child = node.children[0];

    if (child.tagName === "img") {
      const metaWidth = child.properties.alt.match(/{([^}]+)x/);
      const metaHeight = child.properties.alt.match(/x([^}]+)}/);

      if (metaWidth && metaHeight) {
        const width = metaWidth[1];
        const height = metaHeight[1];

        return (
          <div
            className="relative my-8 max-w-full"
            style={{ width: `${width}px` }}
          >
            <Image
              src={child.properties.src}
              alt={child.properties.alt}
              width={width}
              height={height}
              layout="responsive"
            />
          </div>
        );
      }
    }

    return <p>{paragraph.children}</p>;
  },
};
