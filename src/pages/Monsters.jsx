import './Monsters.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import ProjectCard from '../components/ProjectCard';
import useDebounce from '../hooks/useDebounce';

const Monsters = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const debounceValue = useDebounce(filter, 1000);

  useEffect(() => {
    axios
      .get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
      .then((res) => {
        setData(res.data.data);
        setFilter(res.data.data);
      });
  }, []);

  const filterFunction = (value) => {
    const arrayFilter = data.filter((monster) => monster.name.includes(value));
    setFilter(arrayFilter);
  };

  return (
    <main className='monsters'>
      <input
        type="text"
        onChange={(ev) => {
          filterFunction(ev.target.value);
        }}
      />
      <div className='grid'>
      {debounceValue.map((monster) => (
        <ProjectCard key={monster.id} monster={monster} />
      ))}
      </div>
    </main>
  );
};

export default Monsters;
