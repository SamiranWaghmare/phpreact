import React from "react";

function Footer() {
    return (
        <footer className="bg-warning">
            <div className="container">
                <div className="row">
                    <p>Copyright @{new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
