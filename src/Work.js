import React from "react"
import Card from "./Card"
import Thumbnail from "./photos/thumbnail_template.jpg"
import FoodieTN from "./photos/sushi_tn.jpg"
import { Link } from 'react-router-dom';
import Portrait from "./photos/blue_flower.jpg"
 
function Work(props) {
        return (
            <div>
                    <Link to="/work/foodie">
                        <Card name="Foodie" desc="I designed an app for foodies." photo={FoodieTN} />
                    </Link>
                    {/* <Link to="/work/securate">
                        <Card name="Securate" desc="I designed an app that determines the how intrusive other apps are. Product design." photo={Thumbnail} />
                    </Link> */}
                    <Link to="/work/this+website">
                        <Card name="Portfolio" desc="This is a work in progress." photo={Portrait} />
                        {/* This explains the design and development process of this website. */}
                    </Link>
            </div>
        )
}
 
export default Work;