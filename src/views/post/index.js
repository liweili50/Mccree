import React, { Component } from "react";
import Gitalk from "gitalk";
import DocumentTitle from "react-document-title";
import Markdown from "markdown-to-jsx";
import dayjs from "dayjs";
import { getPostById } from "../../api/post";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "gitalk/dist/gitalk.css";
import "github-markdown-css/github-markdown.css";

const Image = ({ children, ...props }) => {
  let { src, alt, folderName, ...rest } = props;
  let url = `https://github.com/liweili50/liweili50.github.io/blob/master/content/blog${folderName}${src}?raw=true`;
  return <img src={url} alt={alt} {...rest} />;
};

const Code = ({ className, children }) => {
  if (className) {
    const language = className.replace("lang-", "");
    return (
      <SyntaxHighlighter language={language} style={github}>
        {children}
      </SyntaxHighlighter>
    );
  } else {
    return <code>{children}</code>;
  }
};

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      time: "",
      title: "",
      folderName: "",
    };
    this.handleGetArticle = this.handleGetArticle.bind(this);
    this.handleGitalkInit = this.handleGitalkInit.bind(this)
  }
  componentDidMount() {
    this.handleGetArticle();
    window.scrollTo(0, 0);
  }
  handleGitalkInit() {
    const gitalk = new Gitalk({
      clientID: "455057ff16e070218483",
      clientSecret: "1dcb080f82e4958655c4feb5bebf11310ca6face",
      repo: "liweili50.github.io",
      owner: "liweili50",
      admin: ["liweili50"],
      title: this.state.title,
      id: this.props.match.params.id, // Ensure uniqueness and length less than 50
      distractionFreeMode: true, // Facebook-like distraction free mode
    });
    gitalk.render("comments");
  }
  handleGetArticle() {
    getPostById(this.props.match.params.id).then((res) => {
      let { title, folderName, content, createTime } = res.data;
      this.setState({
        title,
        content,
        folderName,
        time: dayjs(createTime).format("YYYY-MM-DD HH:mm:ss"),
      });
      this.handleGitalkInit()
    });
  }
  render() {
    return (
      <DocumentTitle title={this.state.title}>
        <div className="has-background-white px-6 py-5 has-padding-20-mobile">
          <h1 className="title pb-2"> {this.state.title}</h1>
          <h2 className="subtitle has-text-weight-normal is-size-6">
            {this.state.time}
          </h2>
          <Markdown
            className="markdown-body"
            options={{
              forceBlock: true,
              overrides: {
                img: {
                  component: Image,
                  props: {
                    folderName: this.state.folderName,
                  },
                },
                code: {
                  component: Code,
                },
              },
            }}
          >
            {this.state.content}
          </Markdown>
          <hr />
          <div id="comments" />
        </div>
      </DocumentTitle>
    );
  }
}

export default Article;
