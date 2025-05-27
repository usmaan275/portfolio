// src/pages/ProfileLanding.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import profilePic from '../profilepic.png'; // Your image
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const roles = ["Software Engineer", "Data Scientist", "AI Researcher", "Web Developer"];

  const getIsPortrait = () => window.matchMedia("(orientation: portrait)").matches;
  const [isPortrait, setIsPortrait] = useState(getIsPortrait());
  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    const handleChange = () => setIsPortrait(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true); // trigger fade-in
      }, 500); // match the CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className='profile-wrapper'>
        <div className="profile-background">
          <div className="profile">
            <img className="profile-pic" src={profilePic} alt="Usmaan Afzal" />
            <div className="latin-name">Usmaan Afzal</div>
            <div className="arabic-name">عثمان أفضل</div>
            <p>- BSc (Hons) Computer Science and Mathematics</p>
            <p className="fading-role">- Aspiring <span className={fade ? 'fade-in' : ''}>{roles[currentRoleIndex]}</span></p>
            <p>- Check out my experience and projects! {isPortrait ? "👇" : "👉"}</p>

            <div className="social-icons">
              <a href="mailto:usmaan.afzal789@gmail.com"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/usmaan-afzal/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/usmaan275" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-section">
        <div className="card-grid">
          <div className='glow-wrapper'>
            <div className="glow-card" onClick={() => navigate('/education')}>Education</div>
          </div>
          <div className='glow-wrapper'>
            <div className="glow-card" onClick={() => navigate('/projects')}>Projects</div>
          </div>
          <div className='glow-wrapper'>
            <div className="glow-card" onClick={() => navigate('/books')}>Books</div>
          </div>
          <div className='glow-wrapper'>
            <div className="glow-card">Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
