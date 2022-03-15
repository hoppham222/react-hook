import { useParams, useHistory } from "react-router-dom";
import useFetch from "../Custom/Hookfetchdata";
const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const handlebackdata = () => {
    history.push('/blog');
  }
  const { data: dataBlogsDetail, loading, errMessage } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`,false)
  console.log(dataBlogsDetail);
  return (
    <>
      <div> <span onClick={handlebackdata}>&#60;-- Back</span></div>
      <div className="blog-detail">
        {dataBlogsDetail &&
          <>
          <div className="title">
            {loading === true ? 'Loading data ...' : dataBlogsDetail.title }
          </div>
          <div className="content">
            {dataBlogsDetail.body}
          </div>
          </>
        }

      </div>
      
    </>
    

    
  )
}
export default DetailBlog;