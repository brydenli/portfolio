import React from 'react';
import './project3.css';

function Project3() {
  return (
    <div>
      <div className="title">
        <h1 className="title-font">Project: reddit-scraper</h1>
        <div className="github-div">
          <a
            className="github-link"
            href="https://github.com/brydenli/reddit-scraper"
            target="_blank"
            rel="noreferrer"
          >
            Click to view code on Github
          </a>
        </div>
      </div>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/F3vYzs30F8Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          width="1700"
          height="800"
          title="Project 3 Video"
        />
      </div>

      <div className="container-div">
        <h3>
          Project Goal: Scrape top posts from up to 5 different subreddits using
          headless browser control via Puppeteer!
        </h3>
        <h3>Tech Stack: JavaScript, React, Node.js, Express.js</h3>
      </div>
    </div>
  );
}

export default Project3;
