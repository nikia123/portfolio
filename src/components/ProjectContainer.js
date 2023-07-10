import React, { useState, useEffect } from 'react';
import Project from "./Project";

function ProjectContainer () {

    const [projectPageData, setProjectPageData] = useState();
    const [projects, setProjects] = useState([]);
    const [selectedProjectData, SetSelectedProjectData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/data/data.json`);
                const jsonData = await response.json();

                let projectData = jsonData["pages"]["page-projects"]["featured-projects"];
                let pageData = jsonData["pages"]["page-projects"];
                setProjectPageData(pageData);
                setProjects(Object.values(projectData));
            } catch (error) {
                console.log('There was an error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const projectButtons = projects.map((project, index) => (
        <button
          key={index}
          onClick={() => SetSelectedProjectData(project)}
        >
          <p>{project.title}</p>
        </button>
    ));

    return (
        <section id="projects">
            {projectPageData && 
            <>
              <h2>{projectPageData.title}</h2>
              <h3>{projectPageData.heading}</h3>
            </>}
            {projectButtons}
            {selectedProjectData && <Project projectData={selectedProjectData} />}
        </section>
    );
}

export default ProjectContainer;