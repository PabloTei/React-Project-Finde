import useFetch from "../hooks/useFetch";

const Equipment = () => {
    const [data] = useFetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`);
    
    return (
        <main>Equipment</main>
    )
}

export default Equipment;