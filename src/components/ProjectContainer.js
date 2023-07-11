import React, { useState, useEffect } from 'react';
import Project from "./Project";

function ProjectContainer () {

    const [projectPageData, setProjectPageData] = useState();
    const [projects, setProjects] = useState([]);
    const [selectedProjectData, SetSelectedProjectData] = useState();
    const [activeTab, setActiveTab] = useState(null);

    function handleTabClick(index, project) {
        SetSelectedProjectData(project);
        setActiveTab(index);
    }

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
          onClick={() => handleTabClick(index, project)}
          className={activeTab === index ? "px-2 py-3 m-2  shadow-gray-500 shadow-inner rounded-md" : "p-3 m-2 shadow-gray-500 shadow-lg rounded-md"}
        >
          <p>{project.title}</p>
        </button>
    ));

    return (
        <section id="projects" className='max-w-screen-lg shadow-gray-400 shadow-inner rounded-md p-2 px-4 pb-6 mt-2 mb-6 mx-auto'>
            {projectPageData && 
            <>
              <h2 className="m-auto block w-fit border-b-2 border-primary my-6 text-xl lg:desktop-header">{projectPageData.heading}</h2>
            </>}
            <div className='flex flex-wrap min-h-fit justify-evenly max-w-[44rem] mx-auto'>
                {projectButtons}
            </div>
                {selectedProjectData && <Project projectData={selectedProjectData} />}
        </section>
    );
}

export default ProjectContainer;