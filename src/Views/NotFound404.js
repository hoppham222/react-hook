import { useHistory } from "react-router-dom";
const NotFound404 = () => {
  let history = useHistory()

  const handleClickbtn = () => {
   
    history.push('/Covid')
  }
  return(
  <div>
    <h4>This page Available</h4>
    <h5>the link may be broken</h5>
    <button onClick={handleClickbtn}>Go to Homme page</button>
    </div>
  )
}

export default NotFound404;