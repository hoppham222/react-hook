import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setloatding] = useState(true);
  useEffect(async () => {
    setTimeout(async () => {
    let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-01-01T00:00:00Z&to=2022-03-01T00:00:00Z')
    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      data.map(item => {
        item.Date = moment(item.Date).format('DD/MM/YYYY')
        return item;
      })
      data = data.reverse()
    }
      setDataCovid(data);
      setloatding(false);
    },1000)
  }, [])
  return (
    <table>
      {/* { console.log(dataCovid)} */}
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        { loading === false && dataCovid && dataCovid.length > 0 && 
          dataCovid.map(item => {
            return (
              <tr key={item.ID}>
                <th>{item.Date}</th>
                <th>{item.Confirmed}</th>
                <th>{item.Active}</th>
                <th>{item.Deaths}</th>
                <th>{item.Recovered}</th>
              </tr>
            )
          })
        }

        {loading === true &&
          
          <tr>
            <th>loading...</th>
          </tr>
        }
        
      </tbody>
    </table>
  )
}
export default Covid;