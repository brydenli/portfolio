import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Projects from '../components/projects';
import Project1 from '../components/projects/project1/project1';
import Project2 from '../components/projects/project2/project2';
import Project3 from '../components/projects/project3/project3';
import Project4 from '../components/projects/project4/project4';
import Project5 from '../components/projects/project5/project5';
import Project6 from '../components/projects/project6/project6';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Main} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/01" component={Project1} />
          <Route path="/projects/02" component={Project2} />
          <Route path="/projects/03" component={Project3} />
          <Route path="/projects/04" component={Project4} />
          <Route path="/projects/05" component={Project5} />
          <Route path="/projects/06" component={Project6} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
