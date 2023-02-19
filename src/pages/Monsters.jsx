import './Monsters.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Loading from '../components/Loading';
import ProjectCard from '../components/ProjectCard';
import useDebounce from '../hooks/useDebounce';

const Monsters = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const debounceValue = useDebounce(filter, 1000);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
      .then((res) => {
        setData(res.data.data);
        setFilter(res.data.data);
        setLoaded(true);
      });
  }, []);

  const filterFunction = (value) => {
    const arrayFilter = data.filter((monster) => monster.name.includes(value));
    setFilter(arrayFilter);
  };

  return (
    <main className="monsters">
      <audio autoPlay={true} className="audio">
        <source
          src="https://res.cloudinary.com/depifliz3/video/upload/v1676844904/samples/landscapes/navi_hey_listen_k9rftq.mp3"
          type="audio/mp3"
        ></source>
      </audio>
      <input
        type="text"
        placeholder="Search monster"
        onChange={(ev) => {
          filterFunction(ev.target.value.toLowerCase());
        }}
      />
      <div className="grid">
        {loaded ? (
          debounceValue.map((monster) => (
            <ProjectCard key={monster.id} monster={monster} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};

export default Monsters;
