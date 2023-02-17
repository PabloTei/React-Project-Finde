import useFetch from "../hooks/useFetch";

const Monsters = () => {
    const [data] = useFetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`);
    console.log(data);
    return (
        <main>Monsters</main>
    )
}

export default Monsters;