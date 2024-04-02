import React from "react"
import Portrait from "./photos/portrait.png"

function About(props) {
    return (
        <div className="about-row">
            <div className="about-col1">            
                <img  src={Portrait} alt="me" className="portrait" />
            </div>
            <div className="about-col2">
                <h2 className="intro-head">
                    Hello, <br />
                    I’m Jeffrey, <br />
                    a Product Designer.
                </h2>
                <br /><br />
                <p className="intro">
                    I study informatics with a focus in human-computer interaction at the University of Washington. 
                    I strive to produce interfaces that are elegant, intuitive, and accessible to everyone. I hope to spend my career creating innovative solutions that leave a lasting impact on society.
                    {/* I chose this career because I enjoy sketching, being creative, and interacting with others.  */}
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