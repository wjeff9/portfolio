import React from "react"

function Card(props) {
    return (
        <div className="card-row">
            <div className="card-col1">
                <img src={props.photo} alt="a cup of coffee" className="thumbnail"/>
            </div>
            <div className="card-col2" >
                <h1 className="card-name">{props.name} </h1>
                <p className="card-desc">
                    <br/> {props.desc} 
                </p>
            </div>
        </div>
    )
}

export default Card;