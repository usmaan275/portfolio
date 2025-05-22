import React, { useState } from 'react';
import '../App.css'; // If you're using external styles

function Education() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="education-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => window.history.back()}>← Back</button>

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
          <button onClick={() => setActiveSection('fiqh')} className={activeSection === 'fiqh' ? 'active' : ''}>Fiqh</button>
          <button onClick={() => setActiveSection('hadith')} className={activeSection === 'hadith' ? 'active' : ''}>Hadith</button>
          <button onClick={() => setActiveSection('nahw')} className={activeSection === 'nahw' ? 'active' : ''}>Nahw & Sarf</button>
          <button onClick={() => setActiveSection('balaghah')} className={activeSection === 'balaghah' ? 'active' : ''}>Balaghah</button>

          <h3>Training Courses</h3>
          <button onClick={() => setActiveSection('fire')} className={activeSection === 'fire' ? 'active' : ''}>Fire Marshall</button>
          <button onClick={() => setActiveSection('firstaid')} className={activeSection === 'firstaid' ? 'active' : ''}>First Aid</button>
          <button onClick={() => setActiveSection('safeguarding')} className={activeSection === 'safeguarding' ? 'active' : ''}>Safeguarding</button>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {activeSection === '' && <p>Please select a category from the sidebar.</p>}

          {activeSection === 'gcse' && (
            <div>
              <h2>GCSEs</h2>
              <p>I completed my GCSEs with a strong focus on mathematics and sciences, achieving top grades in core subjects.</p>
            </div>
          )}

          {activeSection === 'alevels' && (
            <div>
              <h2>A-Levels</h2>
              <p>Studied advanced subjects including Mathematics, Physics, and Computer Science, refining analytical and technical skills.</p>
            </div>
          )}

          {activeSection === 'uni' && (
            <div>
              <h2>University</h2>
              <p>Pursued undergraduate education with a concentration in computing and technology, involving research, collaboration, and real-world applications.</p>
            </div>
          )}

          {activeSection === 'hifz' && (
            <div>
              <h2>Hifz</h2>
              <p>Completed memorisation of the Quran under qualified scholars with rigorous review and recitation assessments.</p>
            </div>
          )}

          {activeSection === 'fiqh' && (
            <div>
              <h2>Fiqh</h2>
              <p>Studied Islamic Jurisprudence across all major schools with focus on legal reasoning, methodology, and modern applications.</p>
            </div>
          )}

          {activeSection === 'hadith' && (
            <div>
              <h2>Hadith</h2>
              <p>Covered texts on the sayings and practices of the Prophet (S.A.W.) and his companions, including contextual study and chain authentication.</p>
            </div>
          )}

          {activeSection === 'nahw' && (
            <div>
              <h2>Nahw & Sarf</h2>
              <p>Mastered foundational and intermediate Arabic grammar rules essential for Quranic interpretation and classical texts.</p>
            </div>
          )}

          {activeSection === 'balaghah' && (
            <div>
              <h2>Balaghah</h2>
              <p>Explored Arabic rhetoric, eloquence, and poetic constructs to appreciate linguistic miracles of the Quran.</p>
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
            <p className="disclaimer">* References and certifications available upon request.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
