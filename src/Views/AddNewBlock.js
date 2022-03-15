import { useHistory } from "react-router-dom";
import { useState } from "react";
const AddNewBlog = () => {
  let history = useHistory();
  const handlebackdata = () => {
    history.push('/blog');
  }
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      alert('lỗi title');
      return;
    } 
    if (!content) {
      alert('lỗi content');
      return;
    }

  }
  return (
    <>
      <div> <span onClick={handlebackdata}>&#60;-- Back</span></div>
      
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