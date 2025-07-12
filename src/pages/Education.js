import React, { useState, useRef } from 'react';
import '../App.css'; // If you're using external styles
import { useNavigate, Link } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const mainContentRef = useRef(null);

  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  };

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
          <button onClick={() => {setActiveSection('gcse'); scrollToTop();}} className={activeSection === 'gcse' ? 'active' : ''}>GCSEs</button>
          <button onClick={() => {setActiveSection('alevels'); scrollToTop();}} className={activeSection === 'alevels' ? 'active' : ''}>A-Levels</button>
          <button onClick={() => {setActiveSection('uni'); scrollToTop();}} className={activeSection === 'uni' ? 'active' : ''}>University</button>

          <h3>Islamic Studies</h3>
          <button onClick={() => {setActiveSection('hifz'); scrollToTop();}} className={activeSection === 'hifz' ? 'active' : ''}>Ḥifẓ</button>
          <button onClick={() => {setActiveSection('alim'); scrollToTop();}} className={activeSection === 'alim' ? 'active' : ''}>ʿĀlimiyyah</button>
          <button onClick={() => {setActiveSection('qiraat'); scrollToTop();}} className={activeSection === 'qiraat' ? 'active' : ''}>Qirāʾah</button>

          <h3>Training Courses</h3>
          <button onClick={() => {setActiveSection('fire'); scrollToTop();}} className={activeSection === 'fire' ? 'active' : ''}>Fire Marshall</button>
          <button onClick={() => {setActiveSection('firstaid'); scrollToTop();}} className={activeSection === 'firstaid' ? 'active' : ''}>First Aid</button>
          <button onClick={() => {setActiveSection('safeguarding'); scrollToTop();}} className={activeSection === 'safeguarding' ? 'active' : ''}>Safeguarding</button>
        </div>

        {/* Main Content */}
        <div className="main-content" ref={mainContentRef}>
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
              <h2>Queen Mary's University of London</h2>
              <h3>Programme</h3>
              <p>BSc (Hons) Computer Science and Mathematics</p>
              <h3>Grade</h3>
              <p>First Class Honours</p>
              <h3>Summary</h3>
              <p>
              I attended Queen Mary's University of London, where I pursued a Bachelors degree with Honours in Computer Science and Mathematics, a joint honours degree. I've learnt a lot throughout this journey. From the wide range of modules I studied, I’ve gained skills in problem-solving, programming, data analysis, mathematical reasoning, algorithm design, software development and much more.
              </p>

              <h3>Year 1 Modules (Averaged 85%)</h3>
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

              <h3>Year 2 Modules (Averaged 78%)</h3>
              <ul>
                <li>Algorithms and Data Structures</li>
                <li>Graphical User Interfaces</li>
                <li>Linear Algebra I</li>
                <li>Linear Programming and Games</li>
                <li>Probability and Statistics</li>
                <li>Software Engineering</li>
                <li>Software Engineering Project</li>
              </ul>

              <h3>Year 3 Modules (Averaged 72%)</h3>
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
            <div className='description'>
              <h2>Ḥifẓ (Memorisation of the Qurʾān)</h2>
              <h3>Overview</h3>
              <p>
              I began memorising the Qurʾān at a young age. The Qurʾān is divided into 30 <em>Ajzāʾ</em> (portions), and I completed my first <em>Juzʾ</em> (portion) at the age of 8. At 9, I officially joined the Ḥifẓ class at Masjid Noor in Luton. By the age of 16, I had completed the memorisation of the entire Qurʾān — a milestone that reflected years of <strong>discipline</strong>, <strong>perseverance</strong>, and sincere <strong>dedication</strong>.
              </p>
              <h3>Childhood Routine</h3>
              <p>
              My daily routine during this period was intense and structured. I would wake up early to prepare my memorisation before school, attend school during the day, and then spend three hours each evening at the mosque receiving professional guidance and support.
              </p>
              <h3>Refinements</h3>
              <p>
              By the age of 18, I had reached a level of memorisation that allowed me to recite the entire Qurʾān in a single sitting. A year later, at 19, I took this further by completing a full recitation in a single standing — <strong>a continuous, seven-and-a-half-hour prayer with no breaks</strong>, purely focused on reading the Holy Book. This experience remains one of my greatest spiritual blessings. And by 20, I undertook a full and detailed study of the meaning of the Qurʾān, essentially memorising its English translation.
              </p>
              <h3>Application Inspiriation</h3>
              <p>
              By the age of 21, I developed an application designed to support individuals looking to strengthen their memorisation of the Qurʾān.<br /><Link to="/projects">Click here</Link> for more information about my projects.
              </p>
            </div>
          )}

          {activeSection === 'alim' && (
            <div className='description'>
              <h2>ʿĀlimiyyah Programme</h2>
              <h3>Overview</h3>
              <p>
              The ʿĀlimiyyah programme is a recognised six-year diploma covering a wide range of Islamic sciences. I am currently in my third year, having studied this programme alongside my university joint honours degree. Balancing both full-time academic studies and intensive Islamic learning has pushed me to develop strong <strong>discipline</strong>, structure, and <strong>time management skills</strong>. Juggling university, work, and ʿĀlimiyyah classes simultaneously has taught me how to <strong>prioritise tasks effectively</strong> and stay <strong>consistent under pressure</strong>. This experience has not only deepened my Islamic understanding but also shaped my approach to <strong>productivity</strong>, <strong>self-discipline</strong>, and lifelong learning.
              </p>
              <h3>Arabic Language & Literature</h3>
              <p>
              Arabic is the language of the Qurʾān, making it essential to study in depth. I have gained a strong understanding of <em>Naḥw</em> and <em>Ṣarf</em> (Arabic grammar) to the extent where I have been able to author books on these topics. I have also studied <em>Balāghah</em>, focusing on the Qurʾān’s linguistic beauty, eloquence, and rhetorical devices, and have even written a book on this as well.<br /><Link to="/books">Click here</Link> for more information about my books.
              </p>
              <h3>Ḥadīth</h3>
              <p>
              As part of our Ḥadīth studies, we have covered collections such as <em>Arbaʿūna Ḥadīthan</em> and <em>Riyāḍ-uṣ-Ṣāliḥīn</em>, which offer profound insight into the wisdom, character, lifestyle, and intelligence of the Prophet Muḥammad (ﷺ).
              </p>
              <h3>Fiqh (Islamic Jurisprudence)</h3>
              <p>
              I have studied key legal texts including <em>Ascent to Felicity</em> and <em>Mukhtaṣar-ul-Qudūrī</em>, which have provided me with foundational knowledge in Islamic rulings and law.
              </p>
              <h3>History</h3>
              <p>
              Our curriculum has included works like <em>Qaṣaṣ-un-Nabiyyīn</em> and <em>Uṣūl-ush-Shāshī</em>, offering deep insight into the lives of the Prophets, their companions, and the righteous scholars of the past. These studies have helped shape my values and understanding of not only Islamic legacy, but traversing life itself.
              </p>
            </div>
          )}

          {activeSection === 'qiraat' && (
            <div className='description'>
              <h2>Qirāʾah (Recitation of the Qurʾān)</h2>
              <h3>Makhārij</h3>
              <p>
              I completed a detailed study of the <em>Makhārij</em> (the precise articulation points) of each Arabic letter. This involved learning how to correctly position the tongue, lips, and teeth to ensure accurate pronunciation of every sound in the Qurʾān.
              </p>
              <h3>Tajwīd</h3>
              <p>
              I studied the rules of <em>Tajwīd</em>, which govern the proper pronunciation and recitation of the Qurʾān. This includes applying nasal sounds and vocal techniques to produce echoes and assimilations exactly as prescribed.
              </p>
              <h3>Ijāzah</h3>
              <p>
              An <em>Ijāzah</em> is granted when a student recites the Qurʾān to a qualified teacher who has recited to their teacher, forming an unbroken chain that traces back to the Prophet Muḥammad (ﷺ). I am actively attending sessions with a certified Qāriʾ (reciter with a verified chain) to refine my recitation and, In-shāʾ-Allāh, establish my own chain of transmission.
              </p>
            </div>
          )}

          {activeSection === 'fire' && (
            <div className='description'>
              <h2>Fire Marshall Training</h2>
              <p>Certified in fire safety, risk assessment, and emergency response procedures to maintain workplace safety standards.</p>
            </div>
          )}

          {activeSection === 'firstaid' && (
            <div className='description'>
              <h2>First Aid Training</h2>
              <p>Trained in first response techniques including CPR, wound management, and emergency care.</p>
            </div>
          )}

          {activeSection === 'safeguarding' && (
            <div className='description'>
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
