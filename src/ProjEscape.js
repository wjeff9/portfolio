import React from "react"
import DrugsPic from "./photos/drugs.jpg"
import Testing from "./photos/escape_room/usability_testing.jpg"
import Puzzle1 from "./photos/escape_room/puzzle_1.jpg"
import Puzzle1B from "./photos/escape_room/puzzle_1_before.png"

function ProjEscape(props) {
    return (
        <div className="proj-body">
            {/* <img src={Thumbnail} alt="a photo of me" className="project-photo" /> */}
            {/* bio or work first?
            intended to only display a few works bc employers are busy
            dark background is easier on the eyes
            monotone color scheme emphasizes photos */}
            <img src={DrugsPic} alt="pharmacy wallpaper" className="proj-photo" />
            <p className="caption">
                pc <a href="https://unsplash.com/@theblowup" target="_blank" rel="noopener noreferrer">the blowup</a>
            </p>
            <h1 className="title1">Escape Room</h1>
            <p className="larticle">
                I am currently working with the <a href="https://gamer.ischool.uw.edu/" target="_blank" rel="noopener noreferrer">GAMER Group</a> to develop a virtual escape room to educate players about misinformation. In the game, players unravel dark secrets as they investigate a new drug called Euphorigen.
            </p>
            <br />
            <h2 className="title2">Problem</h2>
            <p className="article">
                The game is currently playable but not enjoyable. Puzzles are not user-friendly and lack immersion.
            </p>
            <br />
            <h2 className="title2">Team</h2>
            <p className="article">
                I'm working on this project with a few college friends. Andy Cahill and John Rosen are the developers, Darren Ma is the project manager, and I'm the UX designer. Chris Coward, the researcher behind the project, and Lindsay Morse, a game desinger, are our mentors.
            </p>
            <br />
            <h1 className="title1">Usability Testing</h1>
            <img src={Testing} alt="Miro board with usability testing notes" className="proj-photo" />
            <p className="article">
                Because an alpha version of the game already existed, I started off by running through testing sessions with groups of players from our target audience to discover which areas needed the most improvement. After noting down the players' pain points, I set out to redesign each puzzle.
            </p>
            <h1 className="title1">Redesign</h1>
            <h2 className="title2">Puzzle 1: Before</h2>
            <img src={Puzzle1B} alt="Mark Novo website template" className="proj-photo" />
            <p className="article">
                This is what the first puzzle previously looked like. The puzzle is solved by matching the correct gray star onto every gold star. The purple circles will then highlight certain letters that are used to form a password that unlocks the next puzzle.
            </p>
            <br />
            <p className="article">
                The original design was not super intuitive but in this context, it is actually not an issue. In a real escape room, the last thing your captor would do is give you clear instructions on how to escape. Not being absolutely clear makes the game more challenging and more rewarding to solve.
            </p>
            <br />
            <p className="article">
                The main problem with the first puzzle was immersion. The first puzzle was just thrown together with some text in a questionable font pairing on a default white background, which hurt to look at.
            </p>
            <br />
            <h2 className="title2">Puzzle 1: After</h2>
            <img src={Puzzle1} alt="Mark Novo website template" className="proj-photo" />
            <p className="article">
                This is my Figma redesign of the first puzzle. In real life, escape rooms use unsuspecting objects such as paintings and clocks on a wall to give players clues. To simulate the feeling of being in a real escape room, I decided use a skeuomorphic (neumorphic) theme. I played with gradients and drop-shadows to give the environement a 3D effect. I'm aware that the modern feel of this theme does not give off a creepy vibe like most escape rooms, but our mentor felt that making the game intense/scary would take away from its educational aspect (which is debatable).
            </p>
            <br />
            <p className="article">
                I transformed the cards with gray stars into post-it notes to emphasize that they were meant to be moved around. I might have been inspired by Miro after using it all quarter (see my usability testing notes). Next, I translated the gold stars into tacks and recolored the background tan to imitate a pin board. These represent where to place the post-it notes. The hardest item to redesign were the purple circles. Initially, I wanted to use highlighter marks, but in real life, they cannot transfer from the pin board onto the post-it notes. I settled on lasers, which shine over the pin board and the post-it notes so dragging the post-it notes around would interact realistically with the environment.
            </p>
            <br />
            <p className="article">
                By making the puzzle more immersive, I also unintentionally made it easier to solve, so to compensate, I altered the tacks and lasers to a similar size. With the previous version, players would often try to match the gray stars with the purple circles, so I tried to bring back this confusion with the similarly sized items.
            </p>
            <br />
            <p className="article">
                To be continued . . .
            </p>
        </div>
    )
}

export default ProjEscape;