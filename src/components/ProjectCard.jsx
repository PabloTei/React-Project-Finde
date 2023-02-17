const ProjectCard = ({ monster }) => {
  return (
    <figure>
      <img src={monster.image} alt={monster.name} />
      <h2>{monster.name}</h2>
      <p>{monster.description}</p>
    </figure>
  );
};

export default ProjectCard;
