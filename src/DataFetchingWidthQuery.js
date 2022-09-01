import { useQuery } from "react-query";
import axios from "axios";

const DataFetchingQuery = () => {
  const { isloading, data } = useQuery("posts", () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts/");
  });
  if (isloading) return <div>...</div>;

  return (
    <ul>
      {data?.data.map((post) => {
        console.log(post);
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
};

export default DataFetchingQuery;
