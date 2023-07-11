const codeSnippet = () => {
    return (
        <>
        {`@use "slick";
@use "slick-theme";
@use "variables" as *;


//parent slick container
.hero-container {
    margin: 0 auto;
    position: relative;
    width: 100%;

}

.inner-text-hero {
    p {
        font-family: $titleFont;
    }
}

.hero-slider {

    //fade transition
    transition-property: opacity;
    transition-duration: 2s;
    width: 100%;
    height: fit-content;

    img {
        width: 100%;
        
    }
    

    //arrow repositioning
    button.slick-arrow.slick-next {
        position: absolute;
        right: 0;
    }

    button.slick-arrow.slick-prev {
        position: absolute;
        left: 0;
    }

    //slider dots
    ul.slick-dots{

        bottom: 15px;
    
        li {
            background-color: $accentOrange;
            padding: .5rem;
            margin: .5rem;
            border-radius: 50%;
        }
    
        .slick-active {
            @extend li;
            background-color: $accentOrange;
            opacity: .5;
    
            button:before {
                color: $transparent;
            }
        }
    
        button:before {
            color: $transparent;
        }
    
    
    }


}`}
        </>
    );
}

export default codeSnippet;