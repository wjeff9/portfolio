import React from "react"
import Portrait from "./photos/portfolio-portrait.jpg"

function About(props) {
    return (
        <div className="about-row">
            <div className="about-col1">            
                <img  src={Portrait} alt="me" className="portrait" />
            </div>
            <div className="about-col2">
                <h2 className="intro-head">
                    Hello, <br />
                    I’m Jeffrey. <br />
                </h2>
                <p className="intro">
                    <br />
                    I uncover insights from complex data to solve impactful, real-world problems. <br />
                </p>
                <p className='intro'>
                    <br />
                    As an analytics master’s student at Georgia Tech, I am proficient in statistical modeling, data wrangling, and data visualization.
                    My interests include generative AI, business intelligence, and product analytics.
                    Feel free to explore my projects!
                </p>

                {/* <br /> */}
                {/* <p className="intro">
                    Compared to my peers, I have a strong technical background. Half of my classes are design related and the other half are coding.
                </p> */}
                {/* <p className="intro">
                <br />
                   My methodology is fairly standard and can be summarized in 3 steps. First, I <b>discover</b> the situation by doing research. Next, I <b>define</b> the problems that need to be addressed. With clear goals written out, I <b>design</b> a new solution—but it doesn't end there. The new solution becomes a prototype that needs to go through usability testing, which takes me back to the <b>discover</b> phase. The cycle repeats until the outcome is satisfactory to me and approved by my users.
                </p> */}
                {/* <p className="intro">
                <br />
                   Some of my hobbies include drawing, basketball, and karaoke. Recently, <i>Attack on Titan</i> and <i>The Mandalorian</i> have been two of my favorite shows.
                </p> */}
                {/* If you're familiar with <a href="https://www.16personalities.com/personality-types">personality types</a> . . . */}
            </div>
            
        </div>
    )
}

export default About;