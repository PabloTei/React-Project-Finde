import './Home.css';

import { useContext } from 'react';

import { UserContext } from '../context/userContext';

const Home = () => {
  const { user } = useContext(UserContext);
  return <main className="home">
    <h1>Welcome to Hyrule, {user}.</h1>
    <figure>
      <img src='https://www.pngmart.com/files/22/The-Legend-Of-Zelda-Breath-Of-The-Wild-PNG-Transparent-Image.png' alt='image-link'/>
      <p> Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this open-air adventure. Explore the wilds of Hyrule any way you like - Climb up towers and mountain peaks in search of new destinations, then set your own path to get there and plunge into the wilderness. Along the way, you'll battle towering enemies, hunt wild beasts and gather ingredients for the food and elixirs you'll need to sustain you on your journey. More than 100 Shrines of Trials to discover and explore - Shrines dot the landscape, waiting to be discovered in any order you want. Search for them in various ways, and solve a variety of puzzles inside. Work your way through the traps and devices inside to earn special items and other rewards that will help you on your adventure. * Be prepared and properly equipped - With an entire world waiting to be explored, you'll need a variety of outfits and gear to reach every corner. You may need to bundle up with warmer clothes or change into something better suited to the desert heat. Some clothing even has special effects that, for example, can make you faster and stealthier. * Battling enemies requires strategy - The world is inhabited with enemies of all shapes and sizes. Each one has its own attack method and weaponry, so you must think quickly and develop the right strategies to defeat them. * amiibo compatibility - Tap the Wolf Link amiibo (sold separately) to make Wolf Link appear in game. Wolf Link will attack enemies on his own and help you find items you're searching for.</p>
    </figure>
  </main>;
};

export default Home;
