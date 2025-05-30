import React, { useState, useRef } from 'react';
import '../App.css'; // If you're using external styles
import { useNavigate, Link } from 'react-router-dom';

function Experience() {
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
      <h1 className="education-title">Experience</h1>

      <div className="education-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Contracted Jobs</h3>
          <button onClick={() => {setActiveSection('quba'); scrollToTop();}} className={activeSection === 'quba' ? 'active' : ''}>App Development</button>
          <button onClick={() => {setActiveSection('web'); scrollToTop();}} className={activeSection === 'web' ? 'active' : ''}>Web Development</button>

          <h3>Employed Work</h3>
          <button onClick={() => {setActiveSection('tick'); scrollToTop();}} className={activeSection === 'tick' ? 'active' : ''}>School Teaching</button>
          <button onClick={() => {setActiveSection('tutor'); scrollToTop();}} className={activeSection === 'tutor' ? 'active' : ''}>Tutoring</button>
          <button onClick={() => {setActiveSection('priv'); scrollToTop();}} className={activeSection === 'priv' ? 'active' : ''}>Private Teaching</button>
          <button onClick={() => {setActiveSection('admin'); scrollToTop();}} className={activeSection === 'admin' ? 'active' : ''}>Administration</button>
        </div>

        {/* Main Content */}
        <div className="main-content" ref={mainContentRef}>
          {activeSection === '' && <p>Please select a category from the sidebar.</p>}

          {activeSection === 'quba' && (
            <div className='description'>
              <h2>App Development (Quba Academy)</h2>
              <h3>Overview</h3>
                <p>
                As part of a year-long university project sponsored by <strong>Quba Academy</strong>, I was contracted to design and develop a fully functional web application to support Qurʾān memorisation. This experience provided invaluable insight into building a product from initial concept to deployment, while actively engaging with real-world clients and stakeholders. This was just one of my many projects. <br /><Link to="/projects">Click here</Link> for more information about my projects.
                </p>
              <h3>Skills Acquired</h3>
                <p>
                This project significantly enhanced my frontend development skills, particularly in React, HTML, CSS, JavaScript, and modern component-based design. I also refined my ability to work with clients, manage commercial deadlines, and deliver clean, functional code suited to a live business environment.
                </p>
            </div>
          )}

          {activeSection === 'web' && (
            <div className='description'>
              <h2>Web Development (ValueHearing & FDM Ltd)</h2>
              <h3>Overview</h3>
                <p>
                Myself and a partner were contracted to design and develop an online storefront for <strong>ValueHearing</strong>, a company specialising in high-quality hearing aids. We were entrusted with the full site build — from layout planning and custom styling to deployment — to create a professional, responsive, and user-friendly experience for customers browsing products from brands like Phonak, Signia, Oticon, Resound, and Starkey. I also partook in a university group project to create an employee portal web app called StaffSync for <strong>FDM Ltd</strong>. Again, these are just a couple of my projects.<br /><Link to="/projects">Click here</Link> for more information about my projects.
                </p>
                <h3>Skills Acquired</h3>
                <p>
                Through this role, I developed key skills in client communication, iterative design, agile development, and end-to-end testing. It also strengthened my ability to manage timelines, incorporate feedback from domain experts, and build software with a strong focus on usability and accessibility. The StaffSync employee portal, only further strengthened my proficiency in frameworks like React and Next.js, and deepened my understanding of multi-user interfaces and backend integration.
                </p>
            </div>
          )}

          {activeSection === 'tick' && (
            <div className='description'>
              <h2>School Teaching (Tick Education)</h2>
              <h3>Overview</h3>
                <p>
                I have worked with <strong>Tick Education</strong>, a recruitment agency specialising in placing staff in both primary and secondary schools across Bedfordshire and beyond. Through this role, I have taught in a variety of educational settings, delivering lessons across multiple subjects and age groups while supporting both academic and behavioural development.
                </p>
              <h3>Skills Acquired</h3>
                <p>
                This experience allowed me to develop strong communication and leadership skills, as well as the ability to adapt rapidly to different environments and classroom dynamics. I also improved my time management and lesson planning under tight timeframes, while gaining practical experience in managing groups of students and maintaining a productive learning atmosphere. It was a role that demanded both patience and creativity — qualities I now carry into every aspect of my work.
                </p>
            </div>
          )}

          {activeSection === 'tutor' && (
            <div className='description'>
              <h2>Tutoring (MyTutor & MedicHut)</h2>
                <h3>Overview</h3>
                <p>
                I began tutoring with <strong>MyTutor</strong>, initially applying as a subject specialist and gradually building a reputation through positive student outcomes and consistent feedback. Over time, I became one of their highly rated tutors, working with a range of students from diverse academic backgrounds. Separately, I was offered a position at <strong>MedicHut</strong> without even applying — based purely on referrals and the strength of my teaching presence. I conducted sessions across various subjects such as Maths, Computer Science, Mechanics, and more.
                </p>

                <h3>Skills Acquired</h3>
                <p>
                These tutoring roles sharpened my ability to communicate complex ideas clearly and concisely, tailoring explanations to different learning styles. I developed a deeper understanding of educational pedagogy, student psychology, and effective revision strategies. Additionally, I became highly proficient in remote teaching tools, one-on-one lesson delivery, and performance tracking. The extensive feedback I received from both students and parents helped me refine my approach and stay engaged in an iterative cycle of teaching improvement.
                </p>
            </div>
          )}

          {activeSection === 'priv' && (
            <div className='description'>
              <h2>Private Teaching (Masjid Noor Luton)</h2>
                <h3>Overview</h3>
                <p>
                I have been teaching at <strong>Masjid Noor Luton</strong>, a private Islamic educational institute dedicated to providing foundational Islamic knowledge to students aged 6–16. My role includes teaching Qurʾān recitation, Islamic etiquettes, and basic theology in a structured and age-appropriate manner. This role has been a consistent part of my weekly schedule and required careful balancing alongside my other professional, academic, and personal commitments.
                </p>

                <h3>Skills Acquired</h3>
                <p>
                Through this role, I developed patience, emotional intelligence, and an ability to adapt educational material to suit very young learners. Managing this role alongside university studies and other employment helped strengthen my time management, planning, and multitasking skills. My employer has recognised my commitment and performance with multiple raises over time — a testament to my dedication, consistency, and positive rapport with both students and parents.
                </p>
            </div>
          )}

          {activeSection === 'admin' && (
            <div className='description'>
                <h2>Administration Assistant (Masjid Noor Luton)</h2>
                <h3>Overview</h3>
                <p>
                Alongside my teaching role, I also serve as an administrative assistant at <strong>Masjid Noor Luton</strong>. This position involves handling key organisational tasks such as managing student fee records, maintaining attendance sheets, generating reports, and supporting broader administrative functions within the institute. It is a role that supports the operational backbone of the mosque's day-to-day functioning.
                </p>

                <h3>Skills Acquired</h3>
                <p>
                This experience has helped me develop meticulous attention to detail, organisational efficiency, and proficiency in tools such as Excel and Google Sheets. I’ve also improved my ability to work with data, manage deadlines, and communicate effectively with staff and parents — all while supporting the smooth running of a community-focused institution.
                </p>
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

export default Experience;
