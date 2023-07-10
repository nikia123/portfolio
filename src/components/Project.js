
function Project({projectData}) {

  return (
    <article>
      {projectData ? (
        <>
          <h4>{projectData.title}</h4>
          <p>{projectData.date}</p>
          <p>{projectData.technologies}</p>
          <a href={projectData.link}>Site Link</a>
          <a href={projectData.github}>Github Link</a>
          <p>{projectData.description}</p>
        </>
      ) : (
      <p>Loading project data...</p>
      )}
    </article>
  );
      
}

export default Project;