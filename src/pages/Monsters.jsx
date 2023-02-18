import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import axios from "axios"


const Monsters = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        axios.get("https://botw-compendium.herokuapp.com/api/v2/category/monsters").then((res) => {
          setData(res.data.data);
          setFilter(res.data.data)
        });
      }, []);
    
  const filterFunction = (value) => {
    const arrayFilter = data.filter((monster) => monster.name.includes(value));
    setFilter(arrayFilter);
  }

  return (
    <main>
        <input
        type="text"
        onChange={(ev) => {
            filterFunction(ev.target.value)
        }}
        />
      {filter.map((monster) => (
        <ProjectCard key={monster.id} monster={monster} />
      ))}
    </main>
  );
};

export default Monsters;
