const Octokit = require("@octokit/rest");
const octokit = new Octokit();
let owner = 'liweili50';
let repo = 'blog-resource'
octokit.repos.getContents({
    owner,
    repo,
    path:'2018-12-11'
  }).then(res=>{
      console.log(res)
  })