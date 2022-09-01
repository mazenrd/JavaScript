import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [post, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [entreredId, setEntreredId] = useState(1);
  const handleClick = () => {
    setEntreredId(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${entreredId}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [entreredId]);
  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>fetch</button>
      <p>{post.title}</p>
    </div>
  );
};

export default DataFetching;
