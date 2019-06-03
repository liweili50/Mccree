import React, { Component } from "react";
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import "github-markdown-css/github-markdown.css";
import "./index.css";

import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

let arr = [
  {
    createTime: "2018 - 12 - 12",
    updataTime: "2018 - 12 - 12",
    content:
      '<p>当你使用React，在单一时间点你可以考虑render()函数作为创建React元素的树。在下一次状态或属性更新，render()函数将返回一个不同的React元素的树。React需要算出如何高效更新UI以匹配最新的树。</p>\n<p>有一些解决将一棵树转换为另一棵树的最小操作数算法问题的通用方案。然而，树中元素个数为n，最先进的算法 的时间复杂度为O(n3) 。</p>\n<p>若我们在React中使用，展示1000个元素则需要进行10亿次的比较。这操作太过昂贵，相反，React基于两点假设，实现了一个启发的O(n)算法：</p>\n<p>两个不同类型的元素将产生不同的树。\n通过渲染器附带key属性，开发者可以示意哪些子元素可能是稳定的。\n实践中，上述假设适用于大部分应用场景。</p>\n<p>对比算法\n当对比两棵树时，React首先比较两个根节点。根节点的type不同，其行为也不同。</p>\n<p>不同类型的元素\n每当根元素有不同类型，React将卸载旧树并重新构建新树。从<code>&lt;a&gt;</code>到<code>&lt;img&gt;</code>或从<code>&lt;Article&gt;</code>到<code>&lt;Comment&gt;</code>，或从<code>&lt;Button&gt;</code> 到 <code>&lt;div&gt;</code>，任何的调整都会导致全部重建。</p>\n<p>当树被卸载，旧的DOM节点将被销毁。组件实例会调用componentWillUnmount()。当构建一棵新树，新的DOM节点被插入到DOM中。组件实例将依次调用componentWillMount()和componentDidMount()。任何与旧树有关的状态都将丢弃。</p>\n<p>这个根节点下所有的组件都将会被卸载，同时他们的状态将被销毁。 例如，以下节点对比之后：</p>\n<pre><code class="javascript language-javascript">&lt;div&gt;\n  &lt;Counter /&gt;\n&lt;/div&gt;\n\n&lt;span&gt;\n  &lt;Counter /&gt;\n&lt;/span&gt;\n</code></pre>\n<p>这将会销毁旧的Counter并重装新的Counter。</p>\n<p>相同类型的DOM元素\n当比较两个相同类型的React DOM元素时，React则会观察二者的属性，保持相同的底层DOM节点，并仅更新变化的属性。例如：</p>\n<pre><code class="javascript language-javascript">&lt;div className="before" title="stuff" /&gt;\n\n&lt;div className="after" title="stuff" /&gt;\n</code></pre>\n<p>通过比较两个元素，React知道仅更改底层DOM元素的className。</p>\n<p>当更新style时，React同样知道仅更新变更的属性。例如：</p>\n<pre><code class="javascript language-javascript">&lt;div style={{color: \'red\', fontWeight: \'bold\'}} /&gt;\n\n&lt;div style={{color: \'green\', fontWeight: \'bold\'}} /&gt;\n</code></pre>\n<p>当在调整两个元素时，React知道仅改变color样式而不是fontWeight。</p>\n<p>在处理完DOM元素后，React递归其子元素。</p>\n<p>相同类型的组件元素\n当组件更新时，实例仍保持一致，以让状态能够在渲染之间保留。React通过更新底层组件实例的props来产生新元素，并在底层实例上依次调用componentWillReceiveProps() 和 componentWillUpdate() 方法。</p>\n<p>接下来，render()方法被调用，同时对比算法会递归处理之前的结果和新的结果。</p>\n<p>递归子节点\n默认时。当递归DOM节点的子节点，React仅在同一时间点递归两个子节点列表，并在有不同时产生一个变更。</p>\n<p>例如，当在子节点末尾增加一个元素，两棵树的转换效果很好：</p>\n<pre><code class="javascript language-javascript">&lt;ul&gt;\n  &lt;li&gt;first&lt;/li&gt;\n  &lt;li&gt;second&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;ul&gt;\n  &lt;li&gt;first&lt;/li&gt;\n  &lt;li&gt;second&lt;/li&gt;\n  &lt;li&gt;third&lt;/li&gt;\n&lt;/ul&gt;\n</code></pre>\n<p>React将会匹配两棵树的<code>&lt;li&gt;first&lt;/li&gt;</code>，并匹配两棵树的<code>&lt;li&gt;second&lt;/li&gt;</code> 节点，并插入<code>&lt;li&gt;third&lt;/li&gt;</code>节点树。</p>\n<p>若原生实现，在开始插入元素会使得性能更棘手。例如，两棵树的转换效果则比较糟糕：</p>\n<pre><code>&lt;ul&gt;\n  &lt;li&gt;Duke&lt;/li&gt;\n  &lt;li&gt;Villanova&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;ul&gt;\n  &lt;li&gt;Connecticut&lt;/li&gt;\n  &lt;li&gt;Duke&lt;/li&gt;\n  &lt;li&gt;Villanova&lt;/li&gt;\n&lt;/ul&gt;\n</code></pre>\n<p>React会调整每个子节点，而非意识到可以完整保留<code>&lt;li&gt;Duke&lt;/li&gt;</code> 和 <code>&lt;li&gt;Villanova&lt;/li&gt;</code>子树。低效成了一个问题。</p>\n<p>Keys\n为解决该问题，React支持了一个key属性。当子节点有key时，React使用key来匹配原本树的子节点和新树的子节点。例如，增加一个key在之前效率不高的样例中能让树的转换变得高效：</p>\n<pre><code class="javascript language-javascript">&lt;ul&gt;\n  &lt;li key="2015"&gt;Duke&lt;/li&gt;\n  &lt;li key="2016"&gt;Villanova&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;ul&gt;\n  &lt;li key="2014"&gt;Connecticut&lt;/li&gt;\n  &lt;li key="2015"&gt;Duke&lt;/li&gt;\n  &lt;li key="2016"&gt;Villanova&lt;/li&gt;\n&lt;/ul&gt;\n</code></pre>\n<p>现在React知道带有\'2014\'的key的元素是新的，并仅移动带有\'2015\'和\'2016\'的key的元素。</p>\n<p>实践中，发现key通常不难。你将展示的元素可能已经带有一个唯一的ID，因此key可以来自于你的数据中：</p>\n<pre><code class="javascript language-javascript">&lt;li key={item.id}&gt;{item.name}&lt;/li&gt;\n</code></pre>\n<p>当这已不再是问题，你可以给你的数据增加一个新的ID属性，或根据数据的某些内容创建一个哈希值来作为key。key必须在其兄弟节点中是唯一的，而非全局唯一。</p>\n<p>万不得已，你可以传递他们在数组中的索引作为key。若元素没有重排，该方法效果不错，但重排会使得其变慢。</p>\n<p>当索引用作key时，组件状态在重新排序时也会有问题。组件实例基于key进行更新和重用。如果key是索引，则item的顺序变化会改变key值。这将导致非受控组件的状态可能会以意想不到的方式混淆和更新。</p>\n<p>这里是在CodePen上使用索引作为键可能导致的问题的一个例子，这里是同一个例子的更新版本，展示了如何不使用索引作为键将解决这些reordering, sorting, 和 prepending的问题。</p>\n<p>权衡\n牢记协调算法的实现细节非常重要。React可能会在每次操作时渲染整个应用；而结果仍是相同的。为保证大多数场景效率能更快，我们通常提炼启发式的算法。</p>\n<p>在目前实现中，可以表明一个事实，即子树在其兄弟节点中移动，但你无法告知其移动到哪。该算法会重渲整个子树。</p>\n<p>由于React依赖于该启发式算法，若其背后的假设没得到满足，则其性能将会受到影响：</p>\n<p>算法无法尝试匹配不同组件类型的子元素。若你发现两个输出非常相似的组件类型交替出现，你可能希望使其成为相同类型。实践中，我们并非发现这是一个问题。</p>\n<p>Keys应该是稳定的，可预测的，且唯一的。不稳定的key（类似由Math.random()生成的）将使得大量组件实例和DOM节点进行不必要的重建，使得性能下降并丢失子组件的状态。</p>'
  },
  {
    createTime: "2018 - 12 - 11",
    updataTime: "2018 - 12 - 11",
    content:
      '<h1 id="">单线程模型</h1>\n<p>单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。</p>\n<p>注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。</p>\n<p>JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。</p>\n<p>这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段 JavaScript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。JavaScript 语言本身并不慢，慢的是读写外部数据，比如等待 Ajax 请求返回结果。这个时候，如果对方服务器迟迟没有响应，或者网络不通畅，就会导致脚本的长时间停滞。</p>\n<p>如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 IO 操作（输入输出）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。JavaScript 语言的设计者意识到，这时 CPU 完全可以不管 IO 操作，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 操作返回了结果，再回过头，把挂起的任务继续执行下去。这种机制就是 JavaScript 内部采用的“事件循环”机制（Event Loop）。</p>\n<p>单线程模型虽然对 JavaScript 构成了很大的限制，但也因此使它具备了其他语言不具备的优势。如果用得好，JavaScript 程序是不会出现堵塞的，这就是为什么 Node 可以用很少的资源，应付大流量访问的原因。</p>\n<p>为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。</p>\n<h1 id="-1">同步任务和异步任务</h1>\n<p>程序里面所有的任务，可以分成两类：同步任务（synchronous）和异步任务（asynchronous）。</p>\n<p>同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。</p>\n<p>异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行，也就是说，异步任务不具有”堵塞“效应。</p>\n<p>举例来说，Ajax 操作可以当作同步任务处理，也可以当作异步任务处理，由开发者决定。如果是同步任务，主线程就等着 Ajax 操作返回结果，再往下执行；如果是异步任务，主线程在发出 Ajax 请求以后，就直接往下执行，等到 Ajax 操作有了结果，主线程再执行对应的回调函数。</p>\n<h1 id="-2">任务队列和事件循环</h1>\n<p>JavaScript 运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。（实际上，根据异步任务的类型，存在多个任务队列。为了方便理解，这里假设只存在一个队列。）</p>\n<p>首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。</p>\n<p>异步任务的写法通常是回调函数。一旦异步任务重新进入主线程，就会执行对应的回调函数。如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作。</p>\n<p>JavaScript 引擎怎么知道异步任务有没有结果，能不能进入主线程呢？答案就是引擎在不停地检查，一遍又一遍，只要同步任务执行完了，引擎就会去检查那些挂起来的异步任务，是不是可以进入主线程了。这种循环检查的机制，就叫做事件循环（Event Loop）。维基百科的定义是：“事件循环是一个程序结构，用于等待和发送消息和事件（a programming construct that waits for and dispatches events or messages in a program）”。</p>\n<h1 id="-3">定时器运行机制</h1>\n<p>JavaScript 提供定时执行代码的功能，叫做定时器（timer），主要由<code>setTimeout()</code>和<code>setInterval()</code>这两个函数来完成。它们向任务队列添加定时任务。\nsetTimeout和setInterval的运行机制，是将指定的代码移出本轮事件循环，等到下一轮事件循环，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就继续等待。</p>\n<p>这意味着，setTimeout和setInterval指定的回调函数，必须等到本轮事件循环的所有同步任务都执行完，才会开始执行。由于前面的任务到底需要多少时间执行完，是不确定的，所以没有办法保证，setTimeout和setInterval指定的任务，一定会按照预定时间执行。</p>\n<p>setTimeout的作用是将代码推迟到指定时间执行，如果指定时间为0，即<code>setTimeout(f, 0)</code>，那么会立刻执行吗？</p>\n<p>答案是不会。因为上面说过，必须要等到当前脚本的同步任务，全部处理完以后，才会执行setTimeout指定的回调函数f。也就是说，<code>setTimeout(f, 0)</code>会在下一轮事件循环一开始就执行。</p>\n<pre><code class="javascript language-javascript">setTimeout(function () {\n  console.log(1);\n}, 0);\nconsole.log(2);\n// 2\n// 1\n</code></pre>\n<p>上面代码先输出2，再输出1。因为2是同步任务，在本轮事件循环执行，而1是下一轮事件循环执行。</p>\n<p>总之，<code>setTimeout(f, 0)</code>这种写法的目的是，尽可能早地执行f，但是并不能保证立刻就执行f。</p>\n<p>实际上，<code>setTimeout(f, 0)</code>不会真的在0毫秒之后运行，不同的浏览器有不同的实现。以 Edge 浏览器为例，会等到4毫秒之后运行。如果电脑正在使用电池供电，会等到16毫秒之后运行；如果网页不在当前 Tab 页，会推迟到1000毫秒（1秒）之后运行。这样是为了节省系统资源。</p>'
  },
  {
    createTime: "2019 - 01 - 14",
    updataTime: "2019 - 01 - 14",
    content:
      '<h1 id="">两数之和</h1>\n<p>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</p>\n<p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p>\n<p>示例:\n给定 nums = [2, 7, 11, 15], target = 9</p>\n<p>因为 nums[0] + nums[1] = 2 + 7 = 9\n所以返回 [0, 1]</p>\n<h2 id="-1">答案一：</h2>\n<pre><code class="javascript language-javascript">/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\n\nfunction twoSum(nums, target) {\n    for (let i = 0; i &lt; nums.length; i++) {\n        for (let j = i + 1; j &lt; nums.length; j++) {\n            if (nums[j] == target - nums[i]) {\n                return [i, j]\n            }\n        }\n    }\n    throw new error("No two sum solution");\n}\n</code></pre>\n<h3 id="-2">复杂度分析：</h3>\n<ul>\n<li><p>时间复杂度：O(n^2)， 对于每个元素，我们试图通过遍历数组的其余部分来寻找它所对应的目标元素，这将耗费 O(n) 的时间。因此时间复杂度为 O(n^2)</p></li>\n<li><p>空间复杂度：O(1)</p></li>\n</ul>\n<h2 id="-3">答案二：</h2>\n<pre><code class="javascript language-javascript">/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\n\nvar twoSum = function(nums, target) {\n    let obj = {};\n    let arr = [];\n    for (let i = 0; i &lt; nums.length; i++) {\n        let element = target - nums[i];\n        if (nums[i] in obj) {\n            arr.push(obj[nums[i]]);\n            arr.push(i);\n            return arr;\n        } else {\n            obj[element] = i;\n        }\n    }\n};\n</code></pre>\n<h3 id="-4">复杂度分析：</h3>\n<ul>\n<li><p>时间复杂度：O(n)， 我们只遍历了包含有 n 个元素的列表一次。在表中进行的每次查找只花费 O(1)的时间。</p></li>\n<li><p>空间复杂度：O(n)， 所需的额外空间取决于哈希表中存储的元素数量，该表最多需要存储 n 个元素</p></li>\n</ul>'
  }
];

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      imgUrl: ""
    };
    this.show = this.show.bind(this);
  }
  componentDidMount() {
    const gitalk = new Gitalk({
      clientID: '455057ff16e070218483',
      clientSecret: '1dcb080f82e4958655c4feb5bebf11310ca6face',
      repo: 'blog-resource',
      owner: 'liweili50',
      admin: ['liweili50'],
      id: this.props.match.params.id,      // Ensure uniqueness and length less than 50
      distractionFreeMode: true  // Facebook-like distraction free mode
    })

    gitalk.render('comments')
    document.getElementById("content").addEventListener("click", this.show);
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.getElementById("content").removeEventListener("click", this.show);
  }
  show(event) {
    if (event.target.tagName === "IMG") {
      var image = new Image();
      image.src = event.target.src;
      // var galley = document.getElementById('content');
      var viewer = new Viewer(image, {
        movable: false,
        zoomable: false,
        title: false,
        navbar: false,
        hidden: function () {
          viewer.destroy();
        }
      });
      viewer.show();
    }
  }
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="article-container has-background-white">
            <h1 className="subtitle is-2">重新认识构造函数、原型和原型链</h1>
            <div className="media-content">
              <p>2019年05月09日 阅读 25316</p>
            </div>
            <div
              id="content"
              className="markdown-body"
              dangerouslySetInnerHTML={{
                __html: arr[this.props.match.params.id - 1].content
              }}
            />
            <hr />
            <div id="comments" />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
