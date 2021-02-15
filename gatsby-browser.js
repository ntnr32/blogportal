import './src/styles/global.css';
import './src/styles/markdown.css';

import React from 'react';
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import Table from './src/components/utility/Table';
import "./src/styles/language-tab.css"
import Code from './src/components/utility/Code';

const components = {
    table: Table,
    pre: preProps => {
        const props = preToCodeBlock(preProps)

        if (props) {
            return <Code {...props} />
        }

        return <pre {...preProps} />
    },
    wrapper: ({ children }) => <>{children}</>
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        {element}
    </MDXProvider>
)