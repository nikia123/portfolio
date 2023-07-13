import React, { useState, useEffect } from "react";
import StickyNav from "./StickyNavigation";
import ProjectContainer from "./ProjectContainer";
import ImageSlider from "./ImageSlider";

export default function Home() {

    //theme handling
    const lightLogo = "/images/logo/logo-white.png";
    const darkLogo = "/images/logo/logo-black.png";
    const sun = "/images/icons/light.png";
    const moon = "/images/icons/dark.png";
    const [theme, setTheme] = useState("light");
    const [logo, setLogo] = useState(darkLogo);
    const [modeIcon, setModeIcon] = useState(sun);


    //data handling
    const [homePageData, setHomePageData] = useState();
    const [aboutPageData, setAboutPageData] = useState();
    const [photosToggle, setPhotosToggle] = useState(false);


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

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme, logo, modeIcon]);

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setLogo(logo === darkLogo ? lightLogo : darkLogo);
        setModeIcon(modeIcon === sun ? moon : sun);
    };


    return (
    <div id="site-wrapper" 
        className="dark:bg-[#1c1c1c] dark:text-gray-300 dark:shadow-gray-100 dark:shadow-sm font-[Roboto] tracking-wider font-semibold bg-gray-100 text-base/7 px-4 py-2 lg:desktop-text">

        <StickyNav />
        
        <section id="home" 
            className="h-screen max-w-screen-lg shadow-gray-400 shadow-inner rounded-md p-2 px-4 mt-2 mb-6 mx-auto">

            {homePageData ? (
                <>
                    <div id="logo-and-name" className="flex justify-center py-2">
                        <img id="logo" className="h-24 block" src={logo} 
                            alt="The logo for my website, the letters N and S overlayed one another."/>
                        <h1 className="px-4 text-2xl font-bold">Nikia Shaw <br/> Web Developer</h1>
                    </div>

                    <button id="theme-handler" onClick={handleThemeChange}>
                        <img 
                            id="mode" 
                            className="h-8 fixed right-6 top-6 rounded-full p-1 shadow-md shadow-orange-400 bg-gray-100 dark:bg-gray-300 dark:shadow-primary dark:shadow-md" 
                            src={modeIcon}
                            alt="An image of the sun/moon to signify the current light or dark theme."/>
                    </button>

                    <div id="intro" className="flex flex-col justify-center h-[80%]">
                        <h2 className="pb-4 text-xl w-fit mx-4 lg:desktop-header">
                            {homePageData.heading}
                        </h2>
                        <p className="pb-24 mx-4">{homePageData.text}</p>
                    </div>

                </>
            ) : (
                <p className="animate-pulse">Loading home page data...</p>
            )}        
        </section>


        <ProjectContainer />


        <section id="about" 
            className="max-w-screen-lg shadow-gray-400 shadow-inner rounded-md p-2 mt-2 mb-20 px-4  mx-auto" >

            { aboutPageData ? (
                <>
                    <h2 
                        className="m-auto block w-fit border-b-2 border-primary my-6 text-xl lg:desktop-header">{aboutPageData.heading}
                    </h2>

                    <p className="my-6 mx-4">{aboutPageData["previous-work-history"]}</p>

                    <div id="astro-photo-container">
                        <button 
                            onClick={() =>setPhotosToggle(!photosToggle)} 
                            className={photosToggle ? 
                                "block px-2 my-6 py-3 m-2 mx-auto  shadow-gray-500 shadow-inner rounded-md dark:bg-[1c1c1c] dark:text-gray-300 dark:shadow-gray-100 dark:shadow-sm" : 
                            
                                "bg-gray-100 px-2 my-6 py-3 m-2 border-x-4 border-gray-300 rounded-md shadow-md shadow-gray-600 block mx-auto dark:bg-[#1c1c1c] dark:text-gray-300 dark:shadow-gray-100 dark:shadow-sm dark:border-gray-400"}>
                                View My Photos
                        </button>

                        {photosToggle && <ImageSlider images={aboutPageData["astro-images"]} />}

                    </div>

                    <p className="mt-4 mx-4">{aboutPageData.text}</p>
                </>
            ) : (
                <p className="animate-pulse">Loading about page data...</p>
            )}

        </section>

    </div>
    );
}