import React, { useState, useEffect } from "react";
import StickyNav from "./StickyNavigation";
import ProjectContainer from "./ProjectContainer";
import ImageSlider from "./ImageSlider";

export default function Home() {


    const [homePageData, setHomePageData] = useState();
    const [aboutPageData, setAboutPageData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/data/data.json`);
                const jsonData = await response.json();
                setHomePageData(jsonData["pages"]["page-home"]);
                setAboutPageData(jsonData["pages"]["page-about"]);
            } catch (error) {
                console.log('There was an error fetching data:', error);
            }
        }
        fetchData();
    }, []);


    return (
    <div className="font-sans-serif font-semibold bg-slate-100 text-base/7 px-4 py-2">
        <StickyNav />
        
        <section id="home" className="h-screen shadow-gray-400 shadow-inner rounded-md p-2 mt-2 mb-6">
            {homePageData ? (
                <>
                    <div className="flex justify-center py-2">
                        <img className="h-24 block" src='/images/logo/logo-black.png' />
                        <h1 className="px-4 text-xl/9">Nikia Shaw <br/> Web Devloper</h1>
                    </div>
                    <img className="h-8 fixed right-6 top-6" src="/images/icons/light.png"/>
                    <div className="flex flex-col justify-center h-[80%]">
                        <h2 className="pb-4 text-xl">{homePageData.heading}</h2>
                        <p className="pb-24">{homePageData.text}</p>
                    </div>
                </>
            ) : (
                <p>Loading home page data...</p>
            )}        
        </section>


        <ProjectContainer />


        <section className="shadow-gray-400 shadow-inner rounded-md p-2 mt-2 mb-6" id="about">
            { aboutPageData ? (
                <>
                    <h2 className="m-auto block w-fit border-b-2 border-primary my-6 text-xl">{aboutPageData.heading}</h2>
                    <p>{aboutPageData["previous-work-history"]}</p>
                    <div>
                        <button>View My Photos</button>
                        <ImageSlider images={aboutPageData["astro-images"]} />
                    </div>
                    <p>{aboutPageData.text}</p>
                </>
            ) : (
                <p>Loading about page data...</p>
            )}

        </section>

    </div>
    );
}