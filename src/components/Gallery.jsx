import React from "react";
import {Card} from "./Card";

import Tulip from "../img/card/icon-5316.png"
import Purple from "../img/card/icon-6690.png"
import Yellow from "../img/card/icon-5186.png"
import Red from "../img/card/icon-5185.png"
import White from "../img/card/icon-2720.png"
import Rose from "../img/card/icon-1440.png"

function Gallery() {
    return <>
        <div className="gallery">
                <Card img={Purple}/>
                <Card img={Tulip}/>
                <Card img={Yellow}/>
                <Card img={Red}/>
                <Card img={White}/>
                <Card img={Rose}/>
        </div>
    </>
}

export {Gallery}