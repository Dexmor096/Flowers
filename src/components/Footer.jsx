import React from "react";

function Footer() {
    return <footer className="page-footer white">
            <div className="footer-copyright grey-text text-darken-4">
                <div className="container">
                    © Copyright
                    {new Date().getFullYear()}
                </div>
        </div>
    </footer>
}

export {Footer}