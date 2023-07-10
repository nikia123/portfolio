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
    <div className="site-wrapper">
        <StickyNav />
        
        <section id="home">
            {homePageData ? (
                <>
                    <h1>{homePageData.title}</h1>
                    <h2>{homePageData.heading}</h2>
                    <p>{homePageData.text}</p>
                </>
            ) : (
                <p>Loading home page data...</p>
            )}        
        </section>


        <ProjectContainer />


        <section id="about">
            { aboutPageData ? (
                <>
                    <h2>{aboutPageData.title}</h2>
                    <h3>{aboutPageData.heading}</h3>
                    <p>{aboutPageData.text}</p>
                    <ImageSlider images={aboutPageData["astro-images"]} />
                </>
            ) : (
                <p>Loading about page data...</p>
            )}

        </section>

    </div>
    );
}