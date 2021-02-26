import React from "react"

function ProjSecurate(props) {
    return (
        <div className="proj-body">
            {/* <img src={Thumbnail} alt="a photo of me" className="project-photo" /> */}
            <h1>Securate</h1>
            {/* <h2>Overview</h2> */}
            <p className="larticle">
                In an age dominated by the internet, it is important to prevent our personal information from falling into the wrong hands. My team and I designed Securate to help smartphone users keep track of where their information is going, what it's being used for, and whether or not the process is secure.
            </p>
            <br />
            <h3>Problem</h3>
            <p>
               Most people agree to privacy policies without reading them. In other words, they are authorizing the collection and usage of their personal information without knowing what will be collected and how it'll be used. Furthermore, many applications send and store personal information insecurely, allowing malicious people to access the information with little to no effort.
            </p>
            <br />
            <h3>Team</h3>
            <p>
                I worked on Securate with three peers in my <i>Design Methods</i> class. I contributed to every phase of the project from conceptualization to prototyping.
            </p>
            <br />
            <h2>Research</h2>
            <p className="larticle">
                I read existing papers, sent out surveys, and conducted user interviews. 
            </p>
            <br />
            <p className="article">
                Because it takes less time to gather existing information, I always start off with literature review. Then, I used surveys and interviews to explore topics that were not covered by existing research. First, I use surveys to seeing the overall picture. Then, I dive into the specifics with interviews. Below are some key takeaways from my research.
            </p>
            <br />
            <p className="article">
                Over 90% of consumers accept privacy policies without reading them. What are the reasons behind this?
            </p>
            <br />
            <p className="article">
                All apps that collect information are required by law to have a privacy policy that states what information is collected, how information is used, and what information is shared. Sadly, no one reads these.
            </p>
            <br />
            <p className="article">
                Personal information is any information that can be used to identify an individual. Some forms of personal information are deemed to be more sensitive than others (race, ethnicity, religion, health concerns, etc.). Thus, when assessing an app, we must take into consideration what types of information it collects.
            </p>
            <br />
            <p className="article">
                Information privacy concerns are unaffected by gender and increase with age. Our userbase should mainly consist of adults.
            </p>
            <br />
            <p className="article">
                A surprising amount of apps do not encrypt personal information. This allows anyone with basic technical knowledge to access the data for free. Our app should detect whether or not apps are encrypting personal information properly.
            </p>
            <br />
            <p className="article">
                After learning as much as I could through existing papers, I sent out a survey. Below are the key takeaways.
            </p>
            <br />
            <p className="article">
                Around 90% of users are comfortable with apps collecting their personal information for basic app functionality.
            </p>
            <br />
            <p className="article">
                Around 50% of users are comfortable with apps collecting their personal information for developers to improve the app's performance.
            </p>
            <br />
            <p className="article">
                Around 20% of users are comfortable with apps collecting their personal information for revenue.
            </p>
            <br />
            <p className="article">
                “If the collection of information is for my benefit, then I'm OK with it. If it is for the company’s benefit, then I'm not OK with it.”
            </p>
            <br />
            <p className="article">
                Many users were unclear about the consequences of giving away their personal information.
            </p>
            <br />
            <h2>Design</h2>



            {/* <p className="article">
                I feel like surveys are great at collecting answers but not ideal for explaining those answers. To understand the reasoning behind the answers, I conducted user interviews.
            </p> */}
            
        </div>
    )
}

export default ProjSecurate;