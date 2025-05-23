import React, { useState, useRef } from 'react';
import '../App.css'; // If you're using external styles
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const mainContentRef = useRef(null);

  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  };

  const graphicImages = [
    '/poo.png',
    '/logo192.png',
    '/logo512.png',
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % graphicImages.length);
  };
  const handlePrev = () => {
    setImageIndex((prev) => (prev - 1 + graphicImages.length) % graphicImages.length);
  };  

  return (
    <div className="education-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/home')}>Back</button>

      {/* Title */}
      <h1 className="education-title">Projects</h1>

      <div className="education-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Personal Projects</h3>
          <button onClick={() => {setActiveSection('portfolio'); scrollToTop();}} className={activeSection === 'portfolio' ? 'active' : ''}>This Portfolio</button>
          <button onClick={() => {setActiveSection('graphics'); scrollToTop();}} className={activeSection === 'graphics' ? 'active' : ''}>3D Image Generator</button>
          <button onClick={() => {setActiveSection('image'); scrollToTop();}} className={activeSection === 'image' ? 'active' : ''}>Image Processor</button>

          <h3>Client Projects</h3>
          <button onClick={() => {setActiveSection('quranquiz'); scrollToTop();}} className={activeSection === 'quranquiz' ? 'active' : ''}>Quran Quiz</button>
          <button onClick={() => {setActiveSection('staffsync'); scrollToTop();}} className={activeSection === 'staffsync' ? 'active' : ''}>StaffSync</button>
          <button onClick={() => {setActiveSection('hearing'); scrollToTop();}} className={activeSection === 'hearing' ? 'active' : ''}>ValueHearing</button>
          <button onClick={() => {setActiveSection('jml'); scrollToTop();}} className={activeSection === 'jml' ? 'active' : ''}>CSV Writer</button>
        </div>

        {/* Main Content */}
        <div className="main-content" ref={mainContentRef}>
          {activeSection === '' && <p>Please select a category from the sidebar.</p>}

          {activeSection === 'portfolio' && (
            <div className='description'>
              <h2>Portfolio Website</h2>
              <p>
                I developed my personal portfolio using React. This project serves as a central platform to showcase my work, skills, and accomplishments across both academic and personal projects. Through this and other ventures, I’ve accumulated substantial programming experience, applying what I’ve learned in university and beyond to real-world scenarios. Here are some of the key projects I’ve worked on.
              </p>
            </div>
          )}

          {activeSection === 'graphics' && (
            <div className='description'>
              <h2>WebGL 3D Image Generator</h2>
              <h3>Overview</h3>
                <p>
                As part of the Computer Graphics module at university, I worked on a WebGL-based 3D image generator. This project was developed over a series of lab sessions focused on advanced 3D graphics concepts and real-time rendering techniques. It allowed me to explore both the theoretical and practical aspects of modern computer graphics, applying them in a hands-on environment.
                </p>
                <h3>
                Key features implemented in this project include:
                </h3>
                <ul>
                <li>Vertex indexing and interleaved vertex attributes</li>
                <li>Projective transformations and matrix-based rotation techniques</li>
                <li>Phong shading and various lighting models</li>
                <li>Real-time lighting and shadowing techniques</li>
                <li>Bump mapping and advanced texture filtering</li>
                <li>RGB, alpha, and gamma corrections</li>
                <li>Vignetting and post-processing effects</li>
                <li>Integration of real-world images with generated 3D content</li>
                </ul>
                <h3>Outcomes</h3>
                <p>
                This project deepened my understanding of both the low-level mechanics and creative possibilities of 3D rendering pipelines. You can view the full source code and documentation on my GitHub: <a href="https://github.com/usmaan275/Computer-Graphics" target="_blank">github.com/usmaan275/Computer-Graphics</a>.
                </p>
            </div>
          )}

        {activeSection === 'image' && (
            <div className='description'>
              <h2>Java Image Processor</h2>
              {/* Carousel */}
              <p></p>
              <div className="carousel-container">
                <img
                    src={graphicImages[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                />
                <button onClick={handlePrev} className="carousel-btn prev-btn">‹</button>
                <button onClick={handleNext} className="carousel-btn next-btn">›</button>
              </div>
            </div>
          )}

          {activeSection === 'quranquiz' && (
            <div className='description'>
              <h2>Quba Academy - Quran Quiz Application</h2>
              <h3>Overview</h3>
              <p>
              I began memorising the Qurʾān at a young age. The Qurʾān is divided into 30 <em>Ajzāʾ</em> (portions), and I completed my first <em>Juzʾ</em> (portion) at the age of 8. At 9, I officially joined the Ḥifẓ class at Masjid Noor in Luton. By the age of 16, I had completed the memorisation of the entire Qurʾān — a milestone that reflected years of discipline, perseverance, and sincere dedication.
              </p>
              <h3>Childhood Routine</h3>
              <p>
              My daily routine during this period was intense and structured. I would wake up early to prepare my memorisation before school, attend school during the day, and then spend three hours each evening at the mosque receiving professional guidance and support.
              </p>
              <h3>Refinements</h3>
              <p>
              By the age of 18, I had reached a level of memorisation that allowed me to recite the entire Qurʾān in a single sitting. A year later, at 19, I took this further by completing a full recitation in a single standing — a continuous, seven-and-a-half-hour prayer with no breaks, purely focused on reading the Holy Book. This experience remains one of my greatest spiritual blessings. And by 20, I undertook a full and detailed study of the meaning of the Qurʾān, essentially memorising its English translation.
              </p>
              <h3>Application Inspiriation</h3>
              <p>
              By the age of 21, I developed an application designed to support individuals looking to strengthen their memorisation of the Qurʾān.<br></br><a href="#">Click here</a> for more information about my projects.
              </p>
            </div>
          )}

          {activeSection === 'staffsync' && (
            <div className='description'>
              <h2>FDM Ltd - StaffSync Employee Portal</h2>
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

          {activeSection === 'hearing' && (
            <div className='description'>
              <h2>ValueHearing - Online Hearing Aids Store</h2>
              <h3>Overview</h3>
              <p>
              The ʿĀlimiyyah programme is a recognised six-year diploma covering a wide range of Islamic sciences. I am currently in my third year, having studied this programme alongside my university joint honours degree. Balancing both full-time academic studies and intensive Islamic learning has pushed me to develop strong discipline, structure, and time management skills. Juggling university, work, and ʿĀlimiyyah classes simultaneously has taught me how to prioritise tasks effectively and stay consistent under pressure. This experience has not only deepened my Islamic understanding but also shaped my approach to productivity, self-discipline, and lifelong learning.
              </p>
              <h3>Arabic Language & Literature</h3>
              <p>
              Arabic is the language of the Qurʾān, making it essential to study in depth. I have gained a strong understanding of <em>Naḥw</em> and <em>Ṣarf</em> (Arabic grammar) to the extent where I have been able to author books on these topics. I have also studied <em>Balāghah</em>, focusing on the Qurʾān’s linguistic beauty, eloquence, and rhetorical devices, and have even written a book on this as well.<br></br><a href="#">Click here</a> for more information about my books.
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

          {activeSection === 'jml' && (
            <div>
              <h2>Partnered Project - Justmylook CSV Writer</h2>
              <p>Certified in fire safety, risk assessment, and emergency response procedures to maintain workplace safety standards.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
