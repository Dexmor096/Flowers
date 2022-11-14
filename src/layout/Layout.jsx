import React from "react";
import {Parallax} from "react-parallax"
import Flower from "../img/layout/buket-v-stile-loft.jpg"
import {Main} from "../components/Main";

function Layout() {
    return <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Flower}
        strength={300}
    >
        <div className="content">
            <div className="text-content">
                <Main />
            </div>
        </div>
    </Parallax>
}
export {Layout}