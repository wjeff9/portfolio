import React from "react"
import Card from "./Card"
import Thumbnail from "./photos/thumbnail_template.jpg"
import FoodieTN from "./photos/sushi_tn.jpg"
import { Link } from 'react-router-dom';
import Portrait from "./photos/blue_flower.jpg"
import EscapeTN from "./photos/escape_tn.jpg"
 
function Work(props) {
        return (
            <div>
                    <Link className="card" to="/work/escape+room">
                        <Card name="Escape Room" desc="Creating a virtual escape room. Work in progress." photo={EscapeTN} />
                        {/* This explains the design and development process of this website. */}
                    </Link>
                    <Link className="card" to="/work/foodie">
                        <Card name="Foodie" desc="Designing an app for foodies. Work in progress." photo={FoodieTN} />
                    </Link>
                    {/* <Link to="/work/securate">
                        <Card name="Securate" desc="I designed an app that determines the how intrusive other apps are. Product design." photo={Thumbnail} />
                    </Link> */}
                    <Link className="card" to="/work/this+website">
                        <Card name="Portfolio" desc="Designing and developing this website. Work in progress." photo={Portrait} />
                        {/* This explains the design and development process of this website. */}
                    </Link>
            </div>
        )
}
 
export default Work;