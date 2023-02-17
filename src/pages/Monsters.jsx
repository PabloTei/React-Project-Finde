import useFetch from "../hooks/useFetch";

const Monsters = () => {
    const [data] = useFetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`);
    console.log(data)
    
    return (
        <main>
            {data.map((monster) => <h2 key={monster.id}>{monster.name}</h2>)}
        </main>
    )
}

export default Monsters;