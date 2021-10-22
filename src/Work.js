import React from "react"
import Card from "./Card"
import Thumbnail from "./photos/thumbnail_template.jpg"
import FoodieTN from "./photos/super-crowds-gastronaut.png"
import { Link } from 'react-router-dom';
import Portrait from "./photos/blue_flower.jpg"
import EscapeTN from "./photos/escape_tn.jpg"
 
function Work(props) {
        return (
            <div>
                    <a href="https://app.pitch.com/app/public/player/5769cfdf-cec6-4039-a0af-a3f9bb5e21a4" target="_blank" rel="noopener noreferrer" className="card">
                        <Card name="Gastronaut" desc="Designing an app for culinary enthusiasts. Work in Progress." photo={FoodieTN} />
                    </a>
                    <Link className="card" to="/work/escape+room">
                        <Card name="Escape Room" desc="Creating a virtual escape room. Work in progress." photo={EscapeTN} />
                    </Link>
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