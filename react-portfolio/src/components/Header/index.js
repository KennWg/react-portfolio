import React from "react";
import Nav from "../Nav";

function Header() {
    return(
        <header className="d-flex flex-row px-3 py-3">
            <div className="d-flex col-3">
                <h1>Kenneth Wong</h1>
            </div>
            <div className="d-flex col-9">
                <Nav></Nav>
            </div>
        </header>
    );
};

export default Header;