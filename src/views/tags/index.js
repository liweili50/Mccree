import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getTagList } from "../../api/post";

function Tags() {
  const { data, isLoading } = useQuery("tags", getTagList);
  return (
    isLoading === false && (
      <div className="block p-5 has-background-white">
        <h4 className="title is-4 has-text-weight-normal has-text-centered">
          目前共计 {data.data.length} 个标签
        </h4>
        <div className="tags are-medium">
          {data.data.map((tag) => (
            <Link to={"/tag/" + tag._id} key={tag._id} className="tag mr-2">
              {tag._id}
            </Link>
          ))}
        </div>
      </div>
    )
  );
}

export default Tags;
