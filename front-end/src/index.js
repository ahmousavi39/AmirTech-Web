import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home, Articles, Podcasts, Courses, OpenSourceProjects, PostPage } from './routes';
import { NavbarCom, FooterCom } from './component';
import { getData } from './API';


const Routing = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getData();
      setData(allData.allPosts);
    };
    fetchData();
  });

  const getLocation = (data) => {
    setLocation(data);
    console.log(location);
  };


  return (
    <Router>
      <header className="custom-container"><NavbarCom getLocation={e => getLocation(e)} /></header>
      <PostPage data={data}/>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} timeout={300} classNames="alert">
          <Routes location={location}>
            <Route exact path="/" element={<Home data={data} />} />
            <Route path="/articles" element={<Articles data={data} />} />
            <Route path="/podcasts" element={<Podcasts data={data} />} />
            <Route path="/courses" element={<Courses data={data} />} />
            <Route path="/open-source-projects" element={<OpenSourceProjects data={data} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <footer className="custom-container"><FooterCom /></footer>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
