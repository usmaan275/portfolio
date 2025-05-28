import React, { useState, useRef, useEffect } from 'react';
import '../App.css'; // If you're using external styles
import { useNavigate } from 'react-router-dom';

function Books() {
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
  const ijab = importAll(require.context('../imageCarousel/books/ijab', false, /\.(png)$/));
  const imageProcessing = importAll(require.context('../imageCarousel/projects/imageProcessing', false, /\.(png)$/));
  const quranquiz = importAll(require.context('../imageCarousel/projects/quranquiz', false, /\.(png)$/));
  const staffsync = importAll(require.context('../imageCarousel/projects/staffsync', false, /\.(png)$/));
  const hearing = importAll(require.context('../imageCarousel/projects/hearing', false, /\.(png)$/));
  const jml = importAll(require.context('../imageCarousel/projects/jml', false, /\.(png)$/));

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
      <h1 className="education-title">Books</h1>

      <div className="education-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>The Qurʾān and its Miracles</h3>
          <button onClick={() => {setActiveSection('ijab'); scrollToTop(); resetImageIndex();}} className={activeSection === 'ijab' ? 'active' : ''}>Verses of Admiration</button>
          <button onClick={() => {setActiveSection('onomastics'); scrollToTop(); resetImageIndex();}} className={activeSection === 'onomastics' ? 'active' : ''}>Onomastics in the Qurʾān</button>
          <button onClick={() => {setActiveSection('tanasuq'); scrollToTop(); resetImageIndex();}} className={activeSection === 'tanasuq' ? 'active' : ''}>Contextual Connections</button>

          <h3>Arabic Grammar</h3>
          <button onClick={() => {setActiveSection('nahw'); scrollToTop(); resetImageIndex();}} className={activeSection === 'nahw' ? 'active' : ''}>Rules</button>
          <button onClick={() => {setActiveSection('sarf'); scrollToTop(); resetImageIndex();}} className={activeSection === 'sarf' ? 'active' : ''}>Morphology</button>
          <button onClick={() => {setActiveSection('hidayatunnahw'); scrollToTop(); resetImageIndex();}} className={activeSection === 'hidayatunnahw' ? 'active' : ''}>Summary of Hidayat-un-Nahw</button>

          <h3>Islamic Jurisprudence</h3>
          <button onClick={() => {setActiveSection('quduri'); scrollToTop(); resetImageIndex();}} className={activeSection === 'quduri' ? 'active' : ''}>Summary of Quduri</button>
          <button onClick={() => {setActiveSection('shashi'); scrollToTop(); resetImageIndex();}} className={activeSection === 'shashi' ? 'active' : ''}>Summary of Shashi</button>

          <h3>History</h3>
          <button onClick={() => {setActiveSection('qasas'); scrollToTop(); resetImageIndex();}} className={activeSection === 'qasas' ? 'active' : ''}>Stories of the Prophets</button>
        </div>

        {/* Main Content */}
        <div className="main-content" ref={mainContentRef}>
          {activeSection === '' && <p>Please select a category from the sidebar.</p>}

          {activeSection === 'ijab' && (
            <div className='description'>
              <h2>Verses of Admiration</h2>
              <h3>Overview</h3>
              <p>
              The full title of this work is <em>Āyāt-ul-Iʿjāb fil-Qurʾān-il-Ḥakīm</em> (Verses that Bring Admiration for the Qurʾān that is Full of Wisdom). This book explores the miraculous linguistic features of the Qurʾān, aiming to make its eloquence and literary depth accessible to an English-speaking audience.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{ijab.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={ijab[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(ijab)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(ijab)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              The inspiration behind this book was my desire to help others appreciate the linguistic marvel that the Qurʾān represents. What began as a personal summary soon evolved into a full text written in a style that even readers without prior knowledge of Arabic could follow and benefit from. After sharing early drafts with family and friends, I compiled the content into a complete book and have since released an unofficial version. It is currently under review by several individuals, and In-shāʾ-Allāh, it will be formally published soon.
              </p>
            </div>
          )}

          {activeSection === 'onomastics' && (
            <div className='description'>
              <h2>WebGL 3D Image Generator</h2>
              <p></p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{imageProcessing.length}</h4>
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
                As part of the Computer Graphics module at university, I worked on a WebGL-based 3D image generator. This project was developed over a series of lab sessions focused on advanced 3D graphics concepts and real-time rendering techniques. It allowed me to explore both the theoretical and practical aspects of modern computer graphics, applying them in a hands-on environment.
                </p>

            </div>
          )}

        {activeSection === 'tanasuq' && (
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


            </div>
          )}

          {activeSection === 'nahw' && (
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

            </div>
          )}

          {activeSection === 'sarf' && (
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

            </div>
          )}

          {activeSection === 'hidayatunnahw' && (
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

            </div>
          )}

          {activeSection === 'quduri' && (
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

            </div>
          )}

          {activeSection === 'shashi' && (
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

            </div>
          )}

          {activeSection === 'qasas' && (
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

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
