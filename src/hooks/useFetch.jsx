import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);


  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.data);
      setFilter(res.data.data)
    });
  }, [url]);

  return [data, filter];
};

export default useFetch;
