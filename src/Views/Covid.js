import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import useFetch from "../Custom/Hookfetchdata";

const Covid = () => {

  // const today = new Date(new Date().setHours(0, 0, 0, 0));
  // const priorDate = moment().subtract(30, 'days');
  const today = moment().startOf('day').toISOString(true);
  const priorDate =  moment().startOf('day').subtract(30, 'days').toISOString(true);

  // const{ data:dataCovid , loading, errMessage} = useFetch('https://api.covid19api.com/country/vietnam?from=2022-01-01T00:00:00Z&to=2022-03-01T00:00:00Z')
  const { data: dataCovid, loading, errMessage } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,true)
  
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
        { errMessage ===false && loading === false && dataCovid && dataCovid.length > 0 && 
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

        {errMessage === true &&       
          <tr>
            <th>Something wrong...</th>
          </tr>
        }
        
      </tbody>
    </table>
  )
}
export default Covid;