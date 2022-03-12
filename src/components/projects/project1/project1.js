import React from 'react';
import './project1.css';

function Project1() {
  return (
    <div>
      <div className="title">
        <h1 className="title-font">Project: logbook</h1>
        <div className="github-div">
          <a
            className="github-link"
            href="https://github.com/brydenli/logbook"
            target="_blank"
            rel="noreferrer"
          >
            Click to view code on Github
          </a>
        </div>
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/-pXauE4g2YM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          width="1700"
          height="800"
          title="Project 1 Video"
        />
      </div>
      <div className="container-div">
        <h3>
          Project Goal: Utilize an Express.js backend API to perform CRUD
          operations on a task-list, as well as generate and archive task-lists
          as snapshots.
        </h3>

        <h3>
          Tech Stack: JavaScript, React, Node.js, Express.js, MongoDB Atlas
        </h3>
      </div>
    </div>
  );
}

export default Project1;
