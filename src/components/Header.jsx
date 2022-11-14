import React from "react";

function Header() {
    return <nav className="header">
        <div className="nav-wrapper white">
            <a href="!#" className="brand-logo grey-text text-darken-4">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="!#" className="grey-text text-darken-4">Components</a></li>
            </ul>
        </div>
    </nav>
}
export {Header};