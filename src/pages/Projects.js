import React, { useState, useRef, useEffect } from 'react';
import '../App.css'; // If you're using external styles
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const mainContentRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  };

  const importAll = (r) => r.keys().map(r);
  const computerGraphics = importAll(require.context('../imageCarousel/computerGraphics', false, /\.(png|mp4)$/));
  const imageProcessing = importAll(require.context('../imageCarousel/imageProcessing', false, /\.(png)$/));
  const quranquiz = importAll(require.context('../imageCarousel/quranquiz', false, /\.(png)$/));
  const staffsync = importAll(require.context('../imageCarousel/staffsync', false, /\.(png)$/));
  const hearing = importAll(require.context('../imageCarousel/hearing', false, /\.(png)$/));
  const jml = importAll(require.context('../imageCarousel/jml', false, /\.(png)$/));

  const [imageIndex, setImageIndex] = useState(0);
  const resetImageIndex = () => {
    setImageIndex(0);
  }
  const handleNext = (imagesArray) => {
    setImageIndex((prev) => (prev + 1) % imagesArray.length);
  };
  const handlePrev = (imagesArray) => {
    setImageIndex((prev) => (prev - 1 + imagesArray.length) % imagesArray.length);
  };

  useEffect(() => {
    setLoading(true); // Reset when imageIndex or activeSection changes
  }, [imageIndex, activeSection]);

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
          <button onClick={() => {setActiveSection('graphics'); scrollToTop(); resetImageIndex();}} className={activeSection === 'graphics' ? 'active' : ''}>3D Image Generator</button>
          <button onClick={() => {setActiveSection('image'); scrollToTop(); resetImageIndex();}} className={activeSection === 'image' ? 'active' : ''}>Image Processor</button>

          <h3>Client Projects</h3>
          <button onClick={() => {setActiveSection('quranquiz'); scrollToTop(); resetImageIndex();}} className={activeSection === 'quranquiz' ? 'active' : ''}>Quran Quiz</button>
          <button onClick={() => {setActiveSection('staffsync'); scrollToTop(); resetImageIndex();}} className={activeSection === 'staffsync' ? 'active' : ''}>StaffSync</button>
          <button onClick={() => {setActiveSection('hearing'); scrollToTop(); resetImageIndex();}} className={activeSection === 'hearing' ? 'active' : ''}>ValueHearing</button>
          <button onClick={() => {setActiveSection('jml'); scrollToTop(); resetImageIndex();}} className={activeSection === 'jml' ? 'active' : ''}>CSV Writer</button>
        </div>

        {/* Main Content */}
        <div className="main-content" ref={mainContentRef}>
          {activeSection === '' && <p>Please select a category from the sidebar.</p>}

          {activeSection === 'portfolio' && (
            <div className='description'>
              <h2>Portfolio Website</h2>
              <p>
                I developed my personal portfolio using React. This project serves as a central platform to showcase my work, skills, and accomplishments across both academic and personal projects. Through this and other ventures, I’ve accumulated substantial programming experience, applying what I’ve learned in university and beyond to real-world scenarios. Check out some of the key projects I’ve worked on.
              </p>
            </div>
          )}

          {activeSection === 'graphics' && (
            <div className='description'>
              <h2>WebGL 3D Image Generator</h2>
              <p></p>
              {/* Carousel */}
              <div className="carousel-container">
                {computerGraphics.map((file, idx) =>
                  idx === imageIndex ? (
                    file.endsWith('.mp4') ? (
                      <>
                      {loading && <div className="spinner">Loading...</div>}
                      <video
                        key={idx}
                        src={file}
                        className="carousel-image"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={() => setLoading(false)}
                        style={{ display: loading ? 'none' : 'block' }}
                      />
                      </>
                    ) : (
                      <>
                      {loading && <div className="spinner">Loading...</div>}
                      <img
                        key={idx}
                        src={file}
                        alt={`Slide ${idx+1}`}
                        className="carousel-image"
                        onLoad={() => setLoading(false)}
                        style={{ display: loading ? 'none' : 'block' }}
                      />
                      </>
                    )
                  ) : null
                )}
                <button onClick={() => handlePrev(computerGraphics)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(computerGraphics)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Overview</h3>
                <p>
                As part of the Computer Graphics module at university, I worked on a WebGL-based 3D image generator. This project was developed over a series of lab sessions focused on advanced 3D graphics concepts and real-time rendering techniques. It allowed me to explore both the theoretical and practical aspects of modern computer graphics, applying them in a hands-on environment.
                </p>
                <h3>
                Key features implemented in this project include:
                </h3>
                <ul>
                <li>GLSL used for vertex and fragment shaders, with the rest of the application built in JavaScript</li>
                <li>Vertex indexing and interleaved vertex attributes</li>
                <li>Projective transformations and matrix-based rotation techniques</li>
                <li>Phong shading and various lighting models</li>
                <li>Real-time lighting and shadowing techniques</li>
                <li>Bump mapping and advanced texture filtering</li>
                <li>RGB, alpha, and gamma corrections</li>
                <li>Vignetting and post-processing effects</li>
                <li>Interactive image that dynamically changes colour based on mouse position</li>
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
              <h2>Java Image Processing Toolkit</h2>
              <p></p>
              {/* Carousel */}
              <div className="carousel-container">
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={imageProcessing[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(imageProcessing)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(imageProcessing)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Overview</h3>
              <p>
              This project is a Java-based image processing toolkit that showcases a broad range of both fundamental and advanced image manipulation techniques. Built as part of a practical exploration into image analysis and enhancement, the application enables experimentation with pixel-level transformations, arithmetic and logical operations, and filtering methods commonly used in digital image processing.
              </p>

              <h3>Key features of this toolkit include:</h3>
              <ul>
                <li>Original image display and basic visualisation</li>
                <li>Negative transformation</li>
                <li>Image rescaling and shifting</li>
                <li>Combined shift and rescale operations</li>
                <li>Arithmetic operations:
                  <ul>
                    <li>Add</li>
                    <li>Subtract</li>
                    <li>Multiply</li>
                    <li>Divide</li>
                  </ul>
                </li>
                <li>Bitwise operations:
                  <ul>
                    <li>NOT</li>
                    <li>AND</li>
                    <li>OR</li>
                    <li>XOR</li>
                  </ul>
                </li>
                <li>Region of Interest (ROI) operations:
                  <ul>
                    <li>ROI AND</li>
                    <li>ROI Multiply</li>
                  </ul>
                </li>
                <li>Logarithmic and power-law (gamma) transformations</li>
                <li>Random Look-Up Table (LUT) generation</li>
                <li>Bit-plane slicing</li>
                <li>Histogram computation and analysis</li>
                <li>Convolution filtering</li>
                <li>Salt & pepper noise addition</li>
                <li>Filtering techniques:
                  <ul>
                    <li>Min filter</li>
                    <li>Max filter</li>
                    <li>Midpoint filter</li>
                    <li>Median filter</li>
                  </ul>
                </li>
                <li>Thresholding and auto-thresholding techniques</li>
              </ul>
              <h3>Outcomes</h3>
              <p>
              This project helped me strengthen my understanding of core image processing algorithms and provided practical experience in implementing them efficiently using Java. It was also a great opportunity to explore how theoretical methods from my coursework apply to real-world data. You can view the full source code and documentation on my GitHub: <a href="https://github.com/usmaan275/Image-Processing" target="_blank">github.com/usmaan275/Image-Processing</a>.
              </p>

            </div>
          )}

          {activeSection === 'quranquiz' && (
            <div className='description'>
              <h2>Quba Academy — Quran Quiz Application</h2>
              <p></p>
              {/* Carousel */}
              <div className="carousel-container">
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={quranquiz[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(quranquiz)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(quranquiz)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Overview</h3>
              <p>
              This project was my final year university project. I developed it myself whilst being sponsored by <a href="https://qubaacademy.co.uk/" target="_blank">Quba Academy</a>. It’s a gamified web application designed to assist with Quran memorisation (Hifdh) through interactive modes and user-friendly design. The app is now officially live at <a href="https://qubaquranquiz.vercel.app" target="_blank">qubaquranquiz.vercel.app</a> and is being integrated into the Quba Academy website.
              </p>

              <h3>Key Features</h3>
              <ul>
                <li><strong>Arabic Hifdh Mode:</strong> Randomised Ayah selection, phonetic search bar (e.g., typing "b" yields "ب"), dynamic passage lengths, speech recognition, and real-time input validation.</li>
                <li><strong>English Hifdh Mode:</strong> Full Ayah display with adjusted logic for translated text difficulty.</li>
                <li><strong>Multiple Choice Quiz:</strong> Designed for recall practice and memorisation accuracy.</li>
                <li><strong>Quranic Hangman:</strong> Includes all 114 Surahs, Arabic display with filtered particles, and a themed interface.</li>
              </ul>

              <h3>Technical Highlights</h3>
              <ul>
                <li>Frontend: React.js</li>
                <li>Search: Custom phonetic and diacritic-insensitive logic with local JSON (quran.json)</li>
                <li>Speech: Browser Web Speech API for voice recognition</li>
                <li>Shaders: Gameflow control with smooth transitions and performance tuning</li>
              </ul>

              <h3>Testing & Outcomes</h3>
              <p>
              Built with real-time feedback from Quran memorisers and Islamic educators, such as; Shaykh Haitham al-Haddad, Shaykh Abdul Majid, etc., the app blends modern web development with classical learning needs. It offers Arabic and English memorisation tools, a custom-themed Hangman game, and a multiple-choice quiz, all designed with performance, usability, and engagement in mind. The application went through iterative user testing to refine gameplay balance, interface clarity, and memorisation difficulty. Feedback from active memorizers helped shape final release features. This project solidified my ability to design accessible educational tools with real-world impact and collaboration. Of course, the app is now officially deployed and the source code is also available on <a href="https://github.com/usmaan275/Quran-Quiz" target="_blank">github.com/usmaan275/Quran-Quiz</a>.
              </p>

            </div>
          )}

          {activeSection === 'staffsync' && (
            <div className='description'>
              <h2>FDM Ltd — StaffSync Employee Portal</h2>
              <p></p>
              {/* Carousel */}
              <div className="carousel-container">
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={staffsync[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(staffsync)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(staffsync)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Overview</h3>
              <p>
              StaffSync is a full-stack employee portal web application built using Next.js as part of the ECS506U Software Engineering Group Project at university. Developed for FDM Group, the platform was designed to streamline internal communication, document handling, and support systems within a professional work environment. This was a collaborative team project (Group 14), and the final solution was tailored to meet the needs of enterprise-level HR and operations management.
              </p>

              <h3>My Role</h3>
              <p>
              I led the development of the user profile and settings sections, focusing on managing personal information securely and efficiently. This involved handling form validation, data storage, and seamless user experience with update feedback. I also contributed to the planning and integration of the authentication flow and overall UI consistency across the platform.
              </p>

              <h3>Key Features</h3>
              <ul>
                <li><strong>Announcements:</strong> Admins can create, edit, and publish internal announcements viewable on the home dashboard.</li>
                <li><strong>Leave Requests:</strong> Employees can request leave and track approval status through a structured request form and admin interface.</li>
                <li><strong>HR Document Management:</strong> Upload, categorise, and download internal documents such as policies, contracts, and onboarding materials.</li>
                <li><strong>Ticket System:</strong> Submit, assign, and track user tickets with priority and status filtering.</li>
                <li><strong>User Management:</strong> Admin panel for adding/removing users, assigning roles, and managing permissions.</li>
                <li><strong>Dashboard Notifications:</strong> Homepage displays recent activity, pending tasks, and announcement highlights.</li>
              </ul>

              <h3>Outcomes</h3>
              <p>
              Our team was awarded <strong>Best Design</strong> across all participating groups, recognising our clean interface, thoughtful user experience, and consistent branding throughout the application. View the full source code on <a href="https://github.com/usmaan275/staffsync" target="_blank">github.com/usmaan275/staffsync</a>.
              </p>

            </div>
          )}

          {activeSection === 'hearing' && (
            <div className='description'>
              <h2>ValueHearing — Online Hearing Aids Store</h2>
              <p></p>
              {/* Carousel */}
              <div className="carousel-container">
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={hearing[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(hearing)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(hearing)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Overview</h3>
              <p>
              This project was a contracted web development job for <strong>ValueHearing</strong>, a professional retailer of premium hearing aids. Working alongside a partner, we were tasked with designing and deploying a clean, accessible, and conversion-focused e-commerce platform to showcase and sell hearing aid devices online.
              </p>

              <h3>Features</h3>
              <p>
              The store features a curated selection of devices from leading brands including <strong>Phonak</strong>, <strong>Signia</strong>, <strong>Oticon</strong>, <strong>ReSound</strong>, and <strong>Starkey</strong>. Each product page was designed for clarity, with structured layouts, pricing visibility, and straightforward navigation. We applied custom styling and interface refinements to enhance the overall user experience.
              </p>

              <h3>Outcomes</h3>
              <p>
              This project strengthened my skills in frontend e-commerce development, client communication, and product-focused design under real-world business requirements. The site has not publicly been deployed as of yet, but above are some preview images.
              </p>
            </div>
          )}

          {activeSection === 'jml' && (
            <div className='description'>
              <h2>Private Employer – Monetised Justmylook CSV File Writer</h2>
              <p></p>
              {/* Carousel */}
              <div className="carousel-container">
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={jml[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(jml)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(jml)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Overview</h3>
              <p>
              This project involved developing a fully automated backend system for a dropshipping business, in collaboration with a colleague who now works as a Senior Sales Development Representative at Stack Overflow. The solution was designed to streamline the sourcing and listing of products across third-party marketplaces, with a focus on data accuracy, efficiency, and scalability.
              </p>

              <h3>Features</h3>
              <p>
              The pipeline began with intelligent web crawling, starting from "view all" catalog pages to identify and collect product URLs. From there, we implemented targeted web scraping to extract detailed product data including titles, descriptions, pricing, images, and stock levels. All data was cleaned and structured before being converted into properly formatted <strong>CSV files</strong> for bulk upload.
              </p>

              <h3>These CSVs served two main functions:</h3>
              <ul>
                <li><strong>Product Creation:</strong> Automating the listing process on eBay with accurate metadata and imagery.</li>
                <li><strong>Stock & Price Updates:</strong> Generating regularly updated CSVs to reflect real-time inventory and pricing changes for continued profitability.</li>
              </ul>

              <h3>Outcomes</h3>
              <p>
              This system enabled the business to operate with minimal manual input, significantly reducing overhead while rapidly scaling product listings. The solution proved to be monetisable, successfully generating revenue through automated product reselling. The project demonstrated my ability to build efficient data pipelines, implement robust custom web scrapers with close attention to site structure, and interface effectively with marketplace upload standards in a commercially-driven environment. The full source code is available on <a href="https://github.com/usmaan275/Justmylook-CSV-Writer" target="_blank">github.com/usmaan275/Justmylook-CSV-Writer</a>.
              </p>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
