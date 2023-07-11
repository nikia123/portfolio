import CodeSnippet from "./CodeSnippet";
import { useState } from "react";

function Project({projectData}) {

  const [activeTab, setActiveTab] = useState('basic');

  return (
    <article>
      {projectData ? (
        <>
          <div className="flex justify-around m-2 shadow-gray-400 shadow-inner rounded-md">
            <button className={activeTab === "basic" ? "p-3 m-2 shadow-gray-500 shadow-inner rounded-md" : "p-3 m-2 shadow-gray-500 shadow-lg rounded-md"} onClick={() => setActiveTab('basic')}>Basic Info</button>
            <button className={activeTab === "featured" ? "p-3 m-2 shadow-gray-500 shadow-inner rounded-md" : "p-3 m-2 shadow-gray-500 shadow-lg rounded-md"} onClick={() => setActiveTab('featured')}>Featured Code</button>
          </div>

          <h4 className="m-auto block w-fit border-b-2 border-primary my-6 text-lg">{projectData.title}</h4>

          <div id="basic-info" className={activeTab === 'basic' ? 'block' : 'hidden'}>
            <p>Date: {projectData.date}</p>
            <p>Technologies: {projectData.technologies}</p>
            <p className="my-6">{projectData.description}</p>
          </div>

          <div id="featured-code" className={activeTab === 'featured' ? 'block' : 'hidden'}>
            <CodeSnippet projectData={projectData} />
            <p className="my-4">{projectData.notes}</p>
          </div>

          <div className="flex justify-around">
              <a className="p-3 m-2 shadow-secondary shadow-lg rounded-md" href={projectData.link}>Site Link</a>
              <a className="p-3 m-2 shadow-primary shadow-lg rounded-md" href={projectData.github}>Github Link</a>
            </div>
        </>
      ) : (
      <p>Loading project data...</p>
      )}
    </article>
  );
      
}

export default Project;