import React from "react";

function Card(props) {
    const {img}= props;
    return <div className="card large">
                <div className="card-image">
                    <img src={img} alt="item"/>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                </div>
                <div className="card-action">
                    <a href="!#">This is a link</a>
                </div>
            </div>
}
export {Card}