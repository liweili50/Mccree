import React, { useEffect } from "react";
import Post from "./post";
import Card from "../../components/card/card";
import { getPostsList } from "../../api/post";

import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";

const Home = (props) => {
  let keyword = new URLSearchParams(props.location.search).get("keyword");
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "posts",
    async (data) => {
      let pageParam = data.pageParam ?? 1;
      const res = await getPostsList({
        pageNum: pageParam,
        pageSize: 5,
        keyword,
      });
      return res.data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (
          !lastPage ||
          lastPage.pageSize * lastPage.pageNum >= lastPage.total
        ) {
          return;
        }
        return lastPage.pageNum + 1;
      },
    }
  );
  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  return (
    <div className="columns is-gapless">
      {status === "loading" ? (
        <div className="column">Loading...</div>
      ) : status === "error" ? (
        <div className="column">{error.message}</div>
      ) : (
        <div className="column">
          {data.pages.map((page) => (
            <React.Fragment key={page.pageNum}>
              {page.list.map((post) => (
                <Post key={post._id} post={post} />
              ))}
            </React.Fragment>
          ))}

          {/* <div
            className="has-text-centered has-text-grey-light is-size-7 mx-4"
            ref={ref}
          >
            {isFetchingNextPage
              ? "加载中..."
              : hasNextPage
              ? "Load More"
              : "没有更多了"}
          </div> */}
        </div>
      )}
      <div className="column ml-4 is-narrow is-hidden-touch">
        <Card />
      </div>
    </div>
  );
};
// eslint-disable-next-line
export default (props) => <Home {...props} key={props.location.search} />;
