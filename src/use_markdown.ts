import { marked } from 'marked'
import { markedHighlight } from "marked-highlight"
import hljs from 'highlight.js'
// 注意引入样式，你可以前往 node_module 下查看更多的样式主题
import 'highlight.js/styles/base16/darcula.css'

// marked.use({
//     // 开启异步渲染
//     async: true,
//     pedantic: false,
//     gfm: true,
// })

// 高亮拓展
marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
        console.info(code, lang);
        const language = hljs.getLanguage(lang) ? lang : 'shell'
        return hljs.highlight(code, { language }).value
    }
}))

export function useMarkdown(markdown: string) {
    return marked.parse(markdown);
}