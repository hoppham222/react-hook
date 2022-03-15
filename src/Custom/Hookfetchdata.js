import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setloatding] = useState(true);
  const [errMessage, setErrMessage] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(url)
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map(item => {
            item.Date = moment(item.Date).format('DD/MM/YYYY')
            return item;
          })
          data = data.reverse()
        }
        setData(data);
        setloatding(false);
        setErrMessage(false);
      }
      fetchData();
     
    } catch (e) {
      setErrMessage(true)
      setloatding(false);
      // console.log(e.message)
    }
  }, [])

  return {
    data, loading, errMessage
  }

}

export default useFetch;