import React, { useState } from 'react';
import '../App.css'; // If you're using external styles
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="education-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/home')}>Back</button>

      {/* Title */}
      <h1 className="education-title">Education</h1>

      <div className="education-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Secular Studies</h3>
          <button onClick={() => setActiveSection('gcse')} className={activeSection === 'gcse' ? 'active' : ''}>GCSE's</button>
          <button onClick={() => setActiveSection('alevels')} className={activeSection === 'alevels' ? 'active' : ''}>A-Levels</button>
          <button onClick={() => setActiveSection('uni')} className={activeSection === 'uni' ? 'active' : ''}>University</button>

          <h3>Islamic Studies</h3>
          <button onClick={() => setActiveSection('hifz')} className={activeSection === 'hifz' ? 'active' : ''}>Hifz</button>
          <button onClick={() => setActiveSection('qiraat')} className={activeSection === 'qiraat' ? 'active' : ''}>Qiraat</button>
          <button onClick={() => setActiveSection('alim')} className={activeSection === 'alim' ? 'active' : ''}>Alimiyyah</button>

          <h3>Training Courses</h3>
          <button onClick={() => setActiveSection('fire')} className={activeSection === 'fire' ? 'active' : ''}>Fire Marshall</button>
          <button onClick={() => setActiveSection('firstaid')} className={activeSection === 'firstaid' ? 'active' : ''}>First Aid</button>
          <button onClick={() => setActiveSection('safeguarding')} className={activeSection === 'safeguarding' ? 'active' : ''}>Safeguarding</button>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {activeSection === '' && <p>Please select a category from the sidebar.</p>}

          {activeSection === 'gcse' && (
            <div className='description'>
              <h2>GCSEs</h2>
              <h3>Overview</h3>
              <p>I completed my GCSEs with a strong focus on mathematics, science, and technology, achieving top grades across key subjects.</p>
              <h3>Core Subjects</h3>
              <p>Maths (<strong>9</strong>), English (<strong>8</strong>), Science (<strong>7</strong>)</p>
              <h3>Other Key Subjects</h3>
              <p>Computer Science (<strong>8</strong>)</p>
            </div>
          )}

          {activeSection === 'alevels' && (
            <div className='description'>
              <h2>A-Levels</h2>
              <h3>Overview</h3>
              <p>I studied advanced subjects including Mathematics, Computer Science, and Accounting, further developing my analytical and technical skills.</p>
              <h3>Subjects and Grades</h3>
              <p>Mathematics (<strong>A*</strong>), Computer Science (<strong>A</strong>), Accounting (<strong>A</strong>)</p>
              <h3>Personal Reflection</h3>
              <p>This period was particularly challenging for me due to personal circumstances. Despite receiving an <strong>E</strong> in my February Maths mock exam, I stayed determined and focused, and ended up achieving top grades in my final assessments.</p>
            </div>
          )}

          {activeSection === 'uni' && (
            <div className='description'>
              <h2>University</h2>
              <h3>Queen Mary's University of London</h3>
              <p>
              I currently attend Queen Mary's University of London, where I'm pursuing a BSc (Hons) in Computer Science and Mathematics — a joint honours degree. I've learnt a lot throughout this journey. From the wide range of modules I studied, I’ve gained skills in problem-solving, programming, data analysis, mathematical reasoning, algorithm design, software development and much more.
              </p>

              <p>
              I am currently working towards achieving a <strong>First-Class Honours.</strong>
              </p>

              <h3>Year 1 Modules (Achieved: First – 85%)</h3>
              <ul>
                <li>Automata and Formal Languages</li>
                <li>Calculus I</li>
                <li>Calculus II</li>
                <li>Numbers, Sets and Functions</li>
                <li>Object-Oriented Programming</li>
                <li>Procedural Programming</li>
                <li>Professional and Research Practice</li>
                <li>Vectors and Matrices</li>
              </ul>

              <h3>Year 2 Modules (Achieved: First – 78%)</h3>
              <ul>
                <li>Algorithms and Data Structures</li>
                <li>Graphical User Interfaces</li>
                <li>Linear Algebra I</li>
                <li>Linear Programming and Games</li>
                <li>Probability and Statistics</li>
                <li>Software Engineering</li>
                <li>Software Engineering Project</li>
              </ul>

              <h3>Year 3 Modules (Current Average after First Semester: 83%, awaiting final results)</h3>
              <ul>
                <li>Big Data Processing</li>
                <li>Compilers</li>
                <li>Computer Graphics</li>
                <li>Computability, Complexity and Algorithms</li>
                <li>Final Year Project</li>
                <li>Image Processing</li>
                <li>Neural Networks and Deep Learning</li>
              </ul>
            </div>
          )}

          {activeSection === 'hifz' && (
            <div>
              <h2>Hifz</h2>
              <p>Completed memorisation of the Quran under qualified scholars with rigorous review and recitation assessments.</p>
            </div>
          )}

          {activeSection === 'qiraat' && (
            <div>
              <h2>Fiqh</h2>
              <p>Studied Islamic Jurisprudence across all major schools with focus on legal reasoning, methodology, and modern applications.</p>
            </div>
          )}

          {activeSection === 'alim' && (
            <div>
              <h2>Hadith</h2>
              <p>Covered texts on the sayings and practices of the Prophet (S.A.W.) and his companions, including contextual study and chain authentication.</p>
            </div>
          )}

          {activeSection === 'fire' && (
            <div>
              <h2>Fire Marshall Training</h2>
              <p>Certified in fire safety, risk assessment, and emergency response procedures to maintain workplace safety standards.</p>
            </div>
          )}

          {activeSection === 'firstaid' && (
            <div>
              <h2>First Aid Training</h2>
              <p>Trained in first response techniques including CPR, wound management, and emergency care.</p>
            </div>
          )}

          {activeSection === 'safeguarding' && (
            <div>
              <h2>Safeguarding Training</h2>
              <p>Completed safeguarding certification with emphasis on protecting vulnerable individuals and ensuring safe environments.</p>
            </div>
          )}

          {activeSection && (
            <p className="disclaimer">References and certifications available upon request.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
