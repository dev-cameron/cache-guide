type mdx_style = string;

interface mdx_styles {
  [key:string]: mdx_style;
}

const MarkdownStyles: mdx_styles = {
  prose_styling: 'w-full prose prose-custom prose-quoteless dark:prose-invert'
}


export default MarkdownStyles;
