import React from "react"
import SushiPhoto from "./photos/sushi.jpg"
import HoursPhoto from "./photos/foodie_research/hours_daily.png"
import KnownPhoto from "./photos/foodie_research/features_known.png"
import SortPhoto from "./photos/foodie_research/foodie_card_sort.png"
// import FormDesign from "./photos/form_design.jpg"
import PersonaPhoto from "./photos/foodie_persona.jpg"
import RecipeIA from "./photos/foodie_ia/recipe_ia.png"
import CommunityIA from "./photos/foodie_ia/community_ia.png"
import AccountIA from "./photos/foodie_ia/account_ia.png"
import ProtoPhoto from "./photos/foodie_figma.png"


function ProjEscape(props) {
    return (
        <div className="proj-body">
            {/* <img src={Photo1} alt="a cup of coffee" className="project-photo" /> */}
            <img src={SushiPhoto} alt="salmon nigiri" className="cover-photo" />
            <p className="caption">
                pc <a href="https://unsplash.com/@cathsmithphoto" target="_blank" rel="noopener noreferrer">Cath Smith</a>
            </p>
            
            <h1 className="title1">Foodie</h1>
            
            <p className="larticle">
                For the final project in my information architecture class, I redesigned Foodie, a fictitious app for all things food-related. Popular features include its recipe collection, online cookware shop, and a social media platform where cooking enthusiasts can share their creations and connect.
            </p>
            <br />
            <h2 className="title2">Problem</h2>
            <p className="article">
                Unfortunately, with all the information and services Foodie offer, users found the app to be overwhelming and difficult to navigate through. When discovering something they liked, they were unable to find related content and products. Many promising features were hidden under parts of the app no one visited, so they were never exposed to users.
            </p>
            <br />
            <h2 className="title2">Team</h2>
            <p className="article">
                I worked on Foodie with three peers in my information architecture class; nevertheless, everything discussed below are my original thoughts.
            </p>
            <br />
            {/* <h2 className="title2">Overview</h2>
            <p className="article">
                Being an information architecture course, the ultimate goal of this project was to improve Foodie's information architecture. Throughout the process, I surveyed users for design insights, . . .
                
                Smaller objectives included linking related content together, exposing previously unknown features, and completing wireframes.

                Complete this part after finishing the rest.
            </p> */}
            
            <h1 className="title1">Research</h1>
            
            <p className="larticle">
                The professor gave us documents containing user data, Foodie's vision and objectives, labels and hierarchies used in the original Foodie app, etc. These documents helped us outline the issues described under "Problem." However, these documents did not provide us with everything we needed.
            </p>
            <br />
            <h2 className="title2">Survey</h2>
            <p className="article">
                To design the app's information architecture, I needed to know the importance of each of Foodie's features; naturally, I wanted important features to be easier to access. To gather this information, I sent out a short survey. The survey consisted of two parts.
            </p>
            <br />
            <p className="article">
                The first part intends to understand the participant’s food background so I could group users under different categories. 
            </p>
            <img src={HoursPhoto} alt="survey question about hours spent making food daily" className="proj-photo" />
            <p className="sarticle">
                To give you an idea, one of the questions asks how many hours the participant spends making food on a daily basis. This question gives me a quantitative understanding of the participant's involvement with food. At first, I used the term “cooking” instead of “making food,” but I realized that some people might not associate the term “cooking” with actions such as baking cookies (baking) or preparing sushi (uncooked). When designing an online survey, I am especially clear with my wording because minute details can completely change a question’s meaning. Because it's online, participants are unable to clear up their misunderstandings because there are no researchers present to answer their questions.
            </p>
            <br />
            <p className="article">
                The second part asks for the participant's opinion on Foodie’s different features. Again, my purpose was to understand which services the users valued the most. I was searching for features that defined Foodie as well as hidden features no one knew about. 
            </p>
            <img src={KnownPhoto} alt="survey question about Foodie features the participant knows about" className="proj-photo" />
            <p className="sarticle">
                Simply asking, "Which features do you use the most?" would have been insufficient because many promising features were hidden from users in the orignial app; users would have probably enjoyed these services if they knew of their existence. Thus, I had to ask the participant about features they would potentially use, assuming they were oblivious. Likewise, I was curious about features the participant did not care for. Unpopular features would either be relegated to a deeper layer or removed completely.
            </p>
            {/* <br />
            <h2 className="title2">Attention Check</h2>
            <img src={SurveyPhoto} alt="survey question about making food" className="proj-photo" />
            <p className="sarticle">
                The assignment required us to ask every question in a multiple-choice format. Sadly, multiple-choice questions allow apathetic participants (who are in it for the gift card) to cruise through the survey by selecting random answers. To counter this, I threw in a question to verify that participants were paying attention. Additionally, I only asked succint questions. With fewer words to read, impatient participants would be more likely to read through my survey.
            </p> */}
            {/* <img src={FormDesign} alt="form design tip I followed" className="proj-photo" />
            <p className="sarticle">
                In class, we learned ways to optimize the user experience for survey participants. For example, I used radio buttons and checkboxes instead of dropdown menus; being able to see every option by default allows the participant to quickly scan through the form with minimal action. 
            </p> */}
            <br />
            <p className="article">
                It is important to note Foodie is not a real app so no one actually participated in the survey. Nevertheless, I  crafted it meticulously, as if it were to be used. Additionally, if we were seriously conducting user research, it would have been more effective to ask qualitative questions in a user interview.
            </p>
            <p className="article"><br /></p>
            <h2 className="title2">Persona</h2>
            <p className="article">
                We created personas with the provided documents to visualize our users. Here is a persona I made.
            </p>
            <img src={PersonaPhoto} alt="persona I created" className="proj-photo" />
            <p className="sarticle">
                I am particularly proud of her quote, which may have been inspired by an anime I watched called <i>Food Wars!</i>. Jokes aside, I wanted her quote to feel like something a real person would say. If someone cooks for a living, I figured there was probably more to it than "I like to eat food."
            </p>
            
            <p className="article"><br /></p>
            <h2 className="title2">Card Sort</h2>
            <p className="article">
                Card sorts were another tool that helped us determine Foodie's information architecture. They showed us how others would potentially navigate through our app. Unlike the previous survey, the card sorts were actually doable with real participants.
            </p>
            <img src={SortPhoto} alt="card sort for Foodie's IA" className="proj-photo" />
            <p className="sarticle">
                To start, we made a card for every feature offered by Foodie. Then, we asked participants to group the related cards, labelling different groups as they went. The groups and labels the participants created helped us determine the actual labels users would click on when navigating to each feature. 
            </p>
            
            <h1 className="title1">Information Architecture</h1>

            <p className="larticle">
                {/* Now that I had an understanding of the way different features were perceived by the users, I was comfortable with redesigning the app’s information architecture; I now knew which services should be quickly accessible from the home page and which services should be in more niche locations. */}
                With research, we discovered valuable input on how to structure Foodie's information. With my survey, we would have understood which features to prioritize on the navigation bar. Additionally, with the card sort, we observed which labels others would have clicked on to navigate to each service.
            </p>
            <br />
            <h2 className="title2">Site Map</h2>
            <p className="article">
                We started with a top-down approach, beginning with labels that would be accessible from the home page. My group estimated that the three most important features of Foodie were the recipe database, shop, and social media platform (we would have discovered this with the survey). Because these were the main features, navigation to these pages should be instantaneous. Thus, the first two labels we decided on were “Recipe Book” and “Shop,” with the social media platform being the home page.
            </p>
            <img src={RecipeIA} alt="information architecture for the 'recipe' label" className="proj-photo" />
            <br />
            <p className="article">
                I wanted to make the social media newsfeed our home page because I saw it as a bridge that connected the app’s other features. For example, when a user posts a photo of some fish tacos he made, he could link the recipe he used to make the tacos (from the recipe book) and the griddle he bought to fry the tacos (from the shope). Not only does this feature help users find related content (fixing an issue with the original app), it also seamlessly connects the rest of the app like an ecosystem.
            </p>
            <br />
            <p className="article">
                We decided that all the other services on Foodie could be grouped under a label called “Community” because they were not as important.
            </p>
            <img src={CommunityIA} alt="information architecture for the 'community' label" className="proj-photo" />
            <p className="sarticle">
                This included less popular features like the forum, local event database and user database. Initially, I thought about about including the private messaging feature under here as well; however, messaging is heavily used in other social media apps so in the end, I decided to make it accessible from the home page.
            </p>
            <br />
            <p className="article">
                Last but not least, on the first layer of our information architecture, we included an “Account” label which includes the standard “Profile” and “Settings” pages. As a result, our first layer consisted of "Recipe Book," "Shop," "Community," and "Account."
            </p>
            <img src={AccountIA} alt="information architecture for the 'account' label" className="proj-photo" />
            <p className="article">
                A significant change I made to our information architecture was deciding to combine the “Video Tutorial” and “Recipe Book” sections. The old app had separate search pages for finding recipes and videos; however, because Foodie’s videos and recipes both serve a similar purpose of teaching the user how to cook certain dishes, this made the app unnecessarily complex. Instead, we decided to include videos on the same page as their corresponding recipes. If a video did not have a related recipe page, we could process the video into a written recipe with speech recognition. Additionally, this adds accessibility for deaf people who would prefer something written over audio instructions. 
                
                {/* It also solves the problem of being unable to find related content; previously, the video and recipe for the same dish were not guaranteed to be linked together. */}
            </p>
            
            <p className="article"><br /></p>
            <h2 className="title2">Tree Test</h2>
            <p className="article">
                Throughout the process, we conducted tree tests with our site map to confirm that navigation was as intuitive as possible. In other words, we would ask participants to find a target page (by picking through labels on the spreadsheet), observing their thought process as well as any troubles they run into.
            </p>

            
            <h1 className="title1">Design</h1>
            <img src={ProtoPhoto} alt="high fidelity prototype I created for Foodie" className="proj-photo" />
            <p className="article">
                To be continued . . .
            {/* For our wireframes, I had the opportunity to work on the home page. Although we were only required to complete wireframes, I upgraded my part into a high-fidelity prototype with Figma so I could show it off here. */}
            </p>
            {/* <p className="article">
            For the main color of the app, I used salmon pink because the color is named after food. I used a font called "Lobster" for a similar reason.
            </p>
            <br />
            <p className="article">
            The bottom nav is our main nav bar, which contains, from left to right, “home,” “recipe book,” “shop,” “community,” and “account.” On the top nav, we have notifications and private messages, which are standard for social media platforms. Once a user taps into a post, the notification button changes into a back button and the bottom nav turns into a comment-entry bar.
            </p>
            <br />
            <p className="article">
            On the surface, my home page looks similar to Instagram but there are some key differences. First, I did not want to replicate Instagram’s liking mechanism, which is double tapping, because that would be stealing. Moreover, it would not flow well because unlike Instagram, tapping on a post in Foodie expands its contents. Instead, I increased the size of the like and comment buttons to make them easier to tap. I placed the buttons in a location where users would feel comfortable reaching them while operating a phone with one hand. Furthermore, upon hearing user feedback, there will be an option in the settings to switch the like and comment buttons to the left side of the screen for left-handed users. Similarly, I did not replicate Instagram’s private messaging icon, which is a paper plane, because before using Instagram, I do not think many people related paper planes with messages. Instead, I chose a mail icon to represent an inbox, which in Foodie’s context would mean private messages. I couldn’t use the speech bubble icon because it was already being used for comments.
            </p>
            <br />
            <p className="article">
            Like I explained before, when a post is expanded, the user will be able to scroll through cards to explore related content and products mentioned in the post. Here you can see the recipe and griddle used to make the fish tacos.
            </p>
            
            <h1 className="title1">Epilogue</h1>
            
            <p className="article">
            If you made it to the end, thanks for reading! This came out a lot longer than I expected! I noticed there was plenty of nitpicking due to my detail-oriented nature so I'll work on shortening my explanations next time! I realized it is quite wordy but it felt unethical to cut parts out due to the amount of thought I had put into this project.
            </p> */}

        </div>
    )
}

export default ProjEscape;