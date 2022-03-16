import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const AddNewBlog =   (props) => {
  let history = useHistory();
  const handlebackdata = () => {
    history.push('/blog');
  }
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title) {
      alert('lỗi title');
      return;
    } 
    if (!content) {
      alert('lỗi content');
      return;
    }
    let data = {
      title: title,
      body: content,
      userId:1,
    }
    let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
    console.log(res)
    if (res && res.data) {
      let newBlog = res.data;
      props.hendleAddNew(newBlog);
    }
  }
  return (
    <>
      {/* <div> <span onClick={handlebackdata}>&#60;-- Back</span></div> */}
      
      <div>
        Thêm mới block
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type='text' value={title}
            onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label>content:</label>
          <input type='text'value={content}
            onChange={(e) => setContent(e.target.value)}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
  

}

export default AddNewBlog;