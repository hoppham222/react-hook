import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = (url, iscovitData) => {
  const [data, setData] = useState([]);
  const [loading, setloatding] = useState(true);
  const [errMessage, setErrMessage] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    async function fetchData() {
      try { 
        
          let res = await axios.get(url, {
            cancelToken:ourRequest.token,
          })
          let data = res && res.data ? res.data : [];
          if (data && data.length > 0 && iscovitData === true) {
            data.map(item => {
              item.Date = moment(item.Date).format('DD/MM/YYYY')
              return item;
            })
            data = data.reverse()
          }
          setData(data);
          setloatding(false);
          setErrMessage(false);
        
        
      
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log(e.message);
        } else {
          setErrMessage(true)
          setloatding(false);
        }
      }
      
    }
    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      ourRequest.cancel('test cancel')
    }
  }, [url]);

  return {
    data, loading, errMessage
  }

}

export default useFetch;