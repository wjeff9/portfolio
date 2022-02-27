import React from "react"
import Card from "./Card"
import Thumbnail from "./photos/thumbnail_template.jpg"
import NetflixTN from "./photos/netflix-rooms/netflix-rooms-tn.png"
import FoodieTN from "./photos/gastronaut/gastro2-tn.png"
import { Link } from 'react-router-dom';
import Portrait from "./photos/blue_flower.jpg"
import EscapeTN from "./photos/escape_tn.jpg"
 
function Work(props) {
        return (
            <div>
                    <a href="https://app.pitch.com/app/public/player/5769cfdf-cec6-4039-a0af-a3f9bb5e21a4" target="_blank" rel="noopener noreferrer" className="card">
                        <Card name="Gastronaut" desc="Designing an app for culinary enthusiasts." photo={FoodieTN} />
                    </a>
                    <a href="https://app.pitch.com/app/public/player/cd7c36bb-8840-489f-a99e-141b320bcb60" target="_blank" rel="noopener noreferrer" className="card">
                        <Card name="Netflix Rooms" desc="Designing Netflix features to promote social interactions between viewers. Work in progress." photo={NetflixTN} />
                    </a>
                    {/* <Link className="card" to="/work/escape+room">
                        <Card name="Escape Room" desc="Creating a virtual escape room. Work in progress." photo={EscapeTN} />
                    </Link> */}
                    {/* <Link className="card" to="/work/foodie">
                        <Card name="Foodie" desc="Designing an app for foodies. Work in progress." photo={FoodieTN} />
                    </Link>
                    <Link className="card" to="/work/this+website">
                        <Card name="Portfolio" desc="Designing and developing this website. Work in progress." photo={Portrait} />
                    </Link> */}

            </div>
        )
}
 
export default Work;