import React from "react";
import { useQueries } from "react-query";
import { getBingDailyImage, getJonasEmotion } from "../../api/sundry";
import "balloon-css";

const Card = () => {
  const [res1, res2] = useQueries([
    { queryKey: "bingDailyImage", queryFn: getBingDailyImage },
    { queryKey: "jonasEmotion", queryFn: getJonasEmotion },
  ]);
  const list = [
    {
      href: "https://github.com/liweili50",
      icon: "czs-github-logo",
      label: "Github 🎈",
    },
    {
      href: "https://www.zhihu.com/people/li-wei-Jonas/activities",
      icon: "czs-zhihu",
      label: "知乎",
    },
    {
      href: "https://weibo.com/liuyifeiofficial",
      icon: "czs-weibo",
      label: "❤️",
    },
    // {
    //   href: "mailto:liweili50@163.com",
    //   icon: "czs-message-l",
    //   label: "Email Me",
    // },
  ];
  const handleClick = () => {
    window.open("http://www.bing.com");
  };
  return (
    <div className="card">
      <div onClick={handleClick} className="card-image has-cursor-pointer">
        {res1.isSuccess && (
          <figure className="image is-3by2">
            <img
              src={res1.data.data.url}
              title={res1.data.data.copyright.split("(")[0]}
              alt="必应每日图片"
            />
          </figure>
        )}
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://avatars2.githubusercontent.com/u/19683924?s=460&v=4"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Jonas</p>
            <p className="subtitle is-6">
              <i className="czs-location-l"></i>Shanghai China
            </p>
          </div>
        </div>
        <div style={{ minWidth: 200 + "px" }} className="content is-size-07">
          {res2.isSuccess &&
            res2.data.data.emotion.split(",").map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            {list.map((item) => (
              <a
                key={item.icon}
                className="level-item"
                rel="noopener noreferrer"
                target="_blank"
                href={item.href}
                aria-label={item.label}
                data-balloon-pos="up"
              >
                <span className="icon has-text-dark">
                  <i className={item.icon} aria-hidden="true"></i>
                </span>
              </a>
            ))}
            <a
              className="level-item has-text-dark"
              href="mailto:liweili50@163.com"
              rel="noopener noreferrer"
              aria-label="Email Me"
              data-balloon-pos="up"
            >
              <span className="icon">
                <i className="czs-message-l" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Card;
