import React from 'react';
import rehypeReact from 'rehype-react';
import Blockquote from './Blog/Md/Blockquote';
import Paragraph from './Blog/Md/Paragraph';
import Subtitle from './Blog/Md/Subtitle';
import Code from './Blog/Md/Code';


class Content extends React.Component {
    render() {
        const { id, className, content } = this.props;

        const renderAst = new rehypeReact({
            createElement: React.createElement,
            components: {
                blockquote: Blockquote,
                p: Paragraph,
                h2: Subtitle,
                code: Code
            },
        }).Compiler;

        return (
            <div id={id} className={className}>{renderAst(content)}</div>
        )
    }
}

export default Content;