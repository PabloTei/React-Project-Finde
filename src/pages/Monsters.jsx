import useFetch from "../hooks/useFetch";
import ProjectCard from "../components/ProjectCard";

const Monsters = () => {
    const [data] = useFetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`);
    
    return (
        <main>
            {data.map((monster) => <ProjectCard key={monster.id} monster={monster}/>)}
        </main>
    )
}

export default Monsters;