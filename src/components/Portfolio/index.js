import React from "react";

function Portfolio() {
    return (
        <div className="w-100">
            <h2 className="mx-5 my-2 mt-3">Portfolio</h2>
            <div className="d-flex flex-wrap mx-5 py-2 flex-row project-container">
                <a href="https://kennwg.github.io/no-fraud/" target="_blank" rel="noreferrer noopener" className="projectcard project1 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>No Fraud</h3>
                            <h4>HTML/CSS/Javascript</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This was a collaborative project done with basic HTML, Javascript and CSS and involved API calls to a server-side API to see if a phone number was valid. </p>
                <a href="https://github.com/KennWg/no-fraud" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://sheltered-oasis-41495.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project2 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Pet Buddies</h3>
                            <h4>Node.js, Express.js, MySQL, Handlebars.js</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This was another collaborative project, the aim of which was to create a simple site where pet owners could create events for their pets to socialize.  It used Handlebars.js to help template, and stored user and post data using MySQL.</p>
                <a href="https://github.com/KennWg/run-buddy" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://whispering-brook-73444.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project3 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Note Taker</h3>
                            <h4>Express.js</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This project used Express.js to take notes and save them for future reference.  It used Express.js to create API routes to create, read and delete notes.</p>
                <a href="https://github.com/KennWg/note-taker" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://fathomless-headland-58560.herokuapp.com" target="_blank" rel="noreferrer noopener" className="projectcard project4 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Budget Tracker</h3>
                            <h4>PWA, Service Workers, MongoDB</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">This project incorporated some offline capabilities into an app and converted it to a PWA.  It uses a service worker to cache the relevant files, and it saves transactions when offline and waits for connection to push it to the online database.</p>
                <a href="https://github.com/KennWg/budget-tracker" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://watch.screencastify.com/v/9aIhkYNdYq6I50G9hyJv" target="_blank" rel="noreferrer noopener" className="projectcard project5 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Social Media Backend</h3>
                            <h4>MongoDB</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">Here I was able to set up a mock social media backend using Mongoose  I didn't make a front end for this project, so I have a video demonstrating the API routes I did instead.  It allows for users to post thoughts and add friends.</p>
                <a href="https://github.com/KennWg/social-media-backend" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
            <div className="d-flex flex-wrap mx-5 py-4 flex-row project-container">
                <a href="https://glacial-lake-35403.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="projectcard project6 w-75">
                    <article>
                        <div className="projectbox w-25">
                            <h3>Tech Blog</h3>
                            <h4>MySQL, Express.js, Handlebars.js</h4>
                        </div>
                    </article>
                </a>
                <p className="w-25 px-3">I made a mock tech blog here, with a homepage that shows various posts that were made.  The project was good practice in following model-view-controller guidelines.</p>
                <a href="https://github.com/KennWg/tech_blog" target="_blank" rel="noreferrer noopener" className="mx-3 mt-2">Click here for Github repo!</a>
            </div>
        </div>
    );
};

export default Portfolio;