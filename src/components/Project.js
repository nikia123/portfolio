import CodeSnippet from "./CodeSnippet";
import { useState } from "react";

function Project({projectData}) {

  const [activeTab, setActiveTab] = useState('basic');

  return (
    <article>
      {projectData ? (
        <>
          <div id="button-container" className="flex justify-around m-2 shadow-gray-400 shadow-inner rounded-md max-w-[44rem] mx-auto">
            
            <button 
              className={activeTab === "basic" ? "p-3 m-2 shadow-gray-500 shadow-inner rounded-md" : "p-3 m-2 shadow-gray-500 shadow-lg rounded-md"} 
              onClick={() => setActiveTab('basic')}>Basic Info
            </button>

            <button 
              className={activeTab === "featured" ? "p-3 m-2 shadow-gray-500 shadow-inner rounded-md" : "p-3 m-2 shadow-gray-500 shadow-lg rounded-md"} 
              onClick={() => setActiveTab('featured')}>Featured Code
            </button>
          </div>

          <h4 
            className="m-auto block w-fit border-b-2 border-primary my-6 text-lg lg:desktop-header">
            {projectData.title}
          </h4>

          <div id="basic-info" className={activeTab === 'basic' ? 'block' : 'hidden'}>
            <p>Date: {projectData.date}</p>
            <p>Technologies: {projectData.technologies}</p>
            <p className="my-6">{projectData.description}</p>

            <img 
              className="border-2 border-solid border-gray-600 my-8" 
              src={projectData.image} alt="an Image of the website's front page" />

          </div>

          <div id="featured-code" 
            className={activeTab === 'featured' ? 'block shadow-inline' : 'hidden'}>

            <CodeSnippet projectData={projectData} />

            <p className="my-4 mt-6">{projectData.notes}</p>
          </div>

          

          <div id="external-links" className="flex justify-around">
              <a 
                className="p-3 m-2 shadow-secondary shadow-lg rounded-md" 
                href={projectData.link}
                target="_blank">Site Link

              </a>

              <a 
                className="p-3 m-2 shadow-primary shadow-lg rounded-md" 
                href={projectData.github}
                target="_blank">Github Link
              </a>
          </div>
        </>
      ) : (
      <p>Loading project data...</p>
      )}
    </article>
  );
      
}

export default Project;