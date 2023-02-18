const ProjectCard = ({ monster }) => {
  return (
    <figure>
      <img src={monster.image} alt={monster.name} />
      <h2>{monster.name.toUpperCase()}</h2>
    </figure>
  );
};

export default ProjectCard;
