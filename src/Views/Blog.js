import useFetch from "../Custom/Hookfetchdata";
import { Link, useHistory } from "react-router-dom";
const Blog = () => {
  const { data: dataBlogs, loading, errMessage } = useFetch(`https://jsonplaceholder.typicode.com/posts`,false)
  console.log(dataBlogs);
  let newData = [];
  let history = useHistory();

  if (dataBlogs && dataBlogs.length > 0) {
      newData = dataBlogs.slice(40, 50);
      console.log(newData);
  }
  const hendleAddnew = () => {
    history.push('/Add-new-blog');
  }
  return (
    <>
      <div className="add-block">
        <button onClick={hendleAddnew}> + Add new block</button>
      </div>
      {newData && newData.length > 0 && newData.map(item => {
        return (
          <div className="blog" key={item.id}>
            <div className="title">{item.title}</div>
            <div className="body">{item.body}</div>
            <button><Link to={`/blog/${item.id}`}>View detail</Link></button>
            <hr/>
          </div>
        )
        })
      }
      {loading === true && 
        <div>
          <div>loading...</div>
        </div>
      }
    </> 
  )
}

export default Blog;