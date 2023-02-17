import ProjectCard from "../components/ProjectCard";
import useFetch from "../hooks/useFetch";

const Equipment = () => {
    const [data] = useFetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`);
    
    return (
        <main>
            {data.map((monster) => <ProjectCard key={monster.id} monster={monster}/>)}
        </main>
    )
}

export default Equipment;