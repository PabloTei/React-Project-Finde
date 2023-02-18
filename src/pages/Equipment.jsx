import axios from 'axios';
import { useEffect, useState } from 'react';

import ProjectCard from '../components/ProjectCard';

const Equipment = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    axios
      .get('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
      .then((res) => {
        setData(res.data.data);
        setFilter(res.data.data);
      });
  }, []);

  const filterEquipment = (value) => {
    const type = data.filter(
      (object) => object.name.includes(value) || object.description.includes(value),
    );
    setFilter(type);
  };

  return (
    <main>
      <button onClick={() => filterEquipment('sword')}>Swords</button>
      <button onClick={() => filterEquipment('axe')}>Axes</button>
      <button onClick={() => filterEquipment('club')}>Club</button>
      <button onClick={() => filterEquipment('spear')}>Spears</button>
      <button onClick={() => filterEquipment('shield')}>Shields</button>
      {filter.map((monster) => (
        <ProjectCard key={monster.id} monster={monster} />
      ))}
    </main>
  );
};

export default Equipment;
