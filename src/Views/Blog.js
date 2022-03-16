import useFetch from "../Custom/Hookfetchdata";
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import  AddNewBlog  from "./AddNewBlock";


const Blog = () => {
  
  // console.log(dataBlogs);
  const [newData, setNewData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data: dataBlogs, loading, errMessage } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);



  // let newData = [];
  let history = useHistory();

  useEffect(()=>{
    if (dataBlogs && dataBlogs.length > 0) {
      let newData = dataBlogs.slice(40, 50);
      // console.log(newData);
      setNewData(newData);
    }
  },[dataBlogs])
  // const hendleAddnew = () => {
  //   history.push('/Add-new-blog');
  // }
  const hendleAddNew = (Blog) => {
    let data = newData;
    newData.unshift(Blog)

    setShow(false);
    setNewData(data);
  }

  const deletePost = (id) => {
    let data = newData;
    data = data.filter(item => item.id !== id)
    setNewData(data);
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>AddNewBlock</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddNewBlog hendleAddNew={hendleAddNew}/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      
      {/* <div className="add-block">
        <button onClick={hendleAddnew}> + Add new block</button>
      </div> */}
      {newData && newData.length > 0 && newData.map(item => {
        return (
          <div className="blog" key={item.id}>
            <div className="title">{item.title}<span onClick={() => deletePost(item.id)}>X</span></div>
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

