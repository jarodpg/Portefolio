import React from 'react';

function HeaderContact () {
    return(
        <div id="contact" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div id="experiences" className="projects-title" style={{
                marginTop: "1vh", 
                display: 'flex', 
                justifyContent: "center", 
                width: "100%"
            }}>
                <h1 style={{ textAlign: "center", margin: 0 }}>
                    Contact <span className="highlight-red">Me</span>
                </h1>
            </div>

            <h3 style={{
                color: "#d1d5db", 
                fontFamily: "Satoshi", 
                fontSize: "3vh", 
                textAlign: "center", 
                maxWidth: "70vh", 
                width: "90%",
                margin: "3vh auto", 
                lineHeight: "1.4"
            }}>
                Have something to discuss? Send me a message, and I'll get back to you soon.
            </h3>
        </div>
    )
}

export default HeaderContact;