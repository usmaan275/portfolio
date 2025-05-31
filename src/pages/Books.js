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
  const onomastics = importAll(require.context('../imageCarousel/books/onomastics', false, /\.(png)$/));
  const tanasuq = importAll(require.context('../imageCarousel/books/tanasuq', false, /\.(png)$/));
  const nahw = importAll(require.context('../imageCarousel/books/nahw', false, /\.(png)$/));
  const sarf = importAll(require.context('../imageCarousel/books/sarf', false, /\.(png)$/));
  const hidayatunnahw = importAll(require.context('../imageCarousel/books/hidayatunnahw', false, /\.(png)$/));
  const quduri = importAll(require.context('../imageCarousel/books/quduri', false, /\.(png)$/));
  const shashi = importAll(require.context('../imageCarousel/books/shashi', false, /\.(png)$/));
  const qasas = importAll(require.context('../imageCarousel/books/qasas', false, /\.(png)$/));

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
          <button onClick={() => {setActiveSection('quduri'); scrollToTop(); resetImageIndex();}} className={activeSection === 'quduri' ? 'active' : ''}>Glimpse of al-Qudūrī</button>
          <button onClick={() => {setActiveSection('shashi'); scrollToTop(); resetImageIndex();}} className={activeSection === 'shashi' ? 'active' : ''}>Glimpse of al-Shāshī</button>

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
              <h2>Onomastics in the Qurʾān</h2>
              <h3>Overview</h3>
              <p>
              The full title of this work is <em>Mukhtaṣar ʿIlm-il-Asmāʾ fil-Qurʾān-il-Ḥakīm</em> (An Overview of Onomastics in the Qurʾān). This book serves as a concise summary and reinterpretation of the pioneering work by the esteemed Islamic thinker Raouf Abou Seida. It explores the discipline of <strong>onomastics</strong>—the study of the history and origin of proper names—within the Qurʾānic framework. The book examines how names in the Qurʾān are not merely labels but convey deep linguistic, historical, and theological significance. 
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{onomastics.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={onomastics[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(onomastics)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(onomastics)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              I chose to write this summary after being captivated by the intricate manner in which names are used in the Qurʾān. Their placement, frequency, and linguistic context all point to a deeper layer of divine coherence and intent. What began as a personal exploration has grown into an academic project aimed at making this topic accessible to a wider audience. The manuscript is currently under development, In-shāʾ-Allāh, will be completed and reviewed for publication in due course.
              </p>
            </div>
          )}

        {activeSection === 'tanasuq' && (
            <div className='description'>
              <h2>Contextual Connections</h2>
              <h3>Overview</h3>
              <p>
              The full title of this work is <em>Mukhtaṣar-ut-Tanāsuq bayna Khawātīm-is-Suwar wa Fawātiḥi mā Talīhā</em> (A Concise Commentary on the Contextual Connections Between the Closing Statements of Sūrahs and Opening Statements of the Next). This book investigates the structural and thematic coherence of the Qurʾān by analysing how the ending of one Sūrah seamlessly transitions into the beginning of the next. It aims to highlight the divine linearity and interconnectedness embedded within the Qurʾānic structure—revealing not only its eloquence but also the unity of its message.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{tanasuq.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={tanasuq[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(tanasuq)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(tanasuq)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              This project was inspired by the works of Dr. Fāḍil Ṣāliḥ al-Sāmirāʾī, whose insights into Qurʾānic coherence and linguistic precision had a profound impact on my understanding. Motivated to make this depth of knowledge accessible to English-speaking audiences, I began drafting this commentary with clarity and reflection at its core. The goal is to help readers appreciate the structural beauty of the Qurʾān and extract meaningful, practical lessons from its flow. The work is currently in development and will, In-shāʾ-Allāh, be completed in due time.
              </p>
            </div>
          )}

          {activeSection === 'nahw' && (
            <div className='description'>
              <h2>Road to Naḥw Mastery</h2>
              <h3>Overview</h3>
              <p>
              This is a foundational book on <em>Naḥw</em> (Arabic grammar), designed specifically for beginners. It breaks down essential grammatical rules in a simple, easy-to-understand manner. The book includes colour-coded sections, clear tables, summary charts, and interactive exercises—making it both visually engaging and pedagogically effective. It serves as an accessible gateway for students of all levels to begin their journey into the Arabic language.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{nahw.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={nahw[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(nahw)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(nahw)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              I created this resource with the aim of beginning to teach Arabic grammar in a way that is simple, concise, and enjoyable. The idea was to design something that I myself would have found helpful as a student—straightforward, colourful, and packed with practical activities. It is currently still in development, and In-shāʾ-Allāh, will serve as a useful tool for learners and teachers alike.
              </p>
            </div>
          )}

          {activeSection === 'sarf' && (
            <div className='description'>
              <h2>Road to Ṣarf Mastery</h2>
              <h3>Overview</h3>
              <p>
              This book is an introductory guide to <em>Ṣarf</em> (Arabic morphology), aimed at helping beginners understand one of the more intricate areas of the Arabic language. While <em>Ṣarf</em> can often feel abstract and technical, this resource simplifies complex concepts using clear tables, colour-coded breakdowns, and structured exercises. Visual aids and step-by-step explanations are used throughout to ease learners into recognising patterns and understanding word structures.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{sarf.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={sarf[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(sarf)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(sarf)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              Given that <em>Ṣarf</em> is typically more challenging to grasp than <em>Naḥw</em>, creating a resource that remained accessible and enjoyable was a significant challenge, but one I was determined to meet. I designed this book to break down difficult topics in a digestible and engaging format, complete with interactive exercises and visual tools. It’s currently still in development, and In-shāʾ-Allāh, will become a helpful resource for both self-study and classroom use.
              </p>
            </div>
          )}

          {activeSection === 'hidayatunnahw' && (
            <div className='description'>
              <h2>Summary of Hidāyat-un-Naḥw</h2>
              <h3>Overview</h3>
              <p>
              This book is a simplified summary of the classical Arabic grammar text <em>Hidāyat-un-Naḥw</em>, tailored to make the subject more accessible for students and enthusiasts alike. It presents the original Arabic content alongside clear English explanations, offering illustrative examples throughout. The layout is designed for clarity, with logical sectioning, terminology breakdowns, and an easy-to-follow progression through key grammatical principles.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{hidayatunnahw.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={hidayatunnahw[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(hidayatunnahw)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(hidayatunnahw)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              While <em>Hidāyat-un-Naḥw</em> is traditionally dense and challenging for beginners, I aimed to preserve its depth while improving its clarity. Sections of this summary have already been shared with teachers and students and have received encouraging feedback for their clarity and practical value. The project is still in progress, and In-shāʾ-Allāh, will continue to evolve into a reliable resource for those studying Arabic grammar in a classical context.
              </p>
            </div>
          )}

          {activeSection === 'quduri' && (
            <div className='description'>
              <h2>Summary of Mukhtaṣar-ul-Qudūrī</h2>
              <h3>Overview</h3>
              <p>
              This is a summarised version of the classical Ḥanafī fiqh manual <em>Mukhtaṣar-ul-Qudūrī</em>, one of the foundational texts in Islamic jurisprudence. The summary presents the legal rulings in a clear, structured format using tables, key-point highlights, and visual aids. Colour coding and simplified language make complex legal discussions easier to navigate, while still maintaining the integrity of the original rulings.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{quduri.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={quduri[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(quduri)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(quduri)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              This project was developed to assist both students and teachers in engaging with one of the most influential works of Ḥanafī fiqh. Sections have already been shared with teachers and peers, receiving positive feedback for clarity, accessibility, and structure. The work is still ongoing, and In-shāʾ-Allāh, will soon be completed as a reliable, easy-to-use companion for those studying traditional Islamic law.
              </p>
            </div>
          )}

          {activeSection === 'shashi' && (
            <div className='description'>
              <h2>Summary of Uṣūl-ush-Shāshī</h2>
              <h3>Overview</h3>
              <p>
              This book is a structured and accessible summary of <em>Uṣūl-ush-Shāshī</em>, a key text in the study of Islamic legal theory (Uṣūl al-Fiqh) within the Ḥanafī school. Despite the content being famously recognised as difficult to grasp, it is presented in a clean, modern layout with well-organised tables, a clear font style, and simplified explanations to support comprehension. Key terminologies and concepts are highlighted to help readers easily navigate complex theoretical discussions.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{shashi.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={shashi[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(shashi)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(shashi)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              This was a partnered project developed with the aim of making traditional Uṣūl texts more readable for students of knowledge today. Many sections have already been shared with peers and scholars, receiving positive responses for its layout and clarity. The book is now in its final stages, and In-shāʾ-Allāh, will be released soon as a valuable resource for learners of Islamic legal theory.
              </p>
            </div>
          )}

          {activeSection === 'qasas' && (
            <div className='description'>
              <h2>Stories of the Prophets</h2>
              <h3>Overview</h3>
              <p>
              <em>Qaṣaṣ-ul-Anbiyāʾ</em> is a creative and narrative-driven work that presents the lives of the Prophets (peace be upon them all) in a historically authentic and spiritually enriching manner. The aim of this book is to capture the timeless wisdom, moral guidance, and divine purpose embedded in their stories, while also providing English and Arabic renditions of the text side-by-side. Written with clarity and depth, the book seeks to inspire readers by connecting them to the legacies of these noble figures as well as help them advance their Arabic language skills.
              </p>
              {/* Carousel */}
              <div className="carousel-container">
                <h4>Slide {imageIndex + 1}/{qasas.length}</h4>
                <>
                {loading && <div className="spinner">Loading...</div>}
                <img
                    src={qasas[imageIndex]}
                    alt={`Render ${imageIndex + 1}`}
                    className="carousel-image"
                    onLoad={() => setLoading(false)}
                    style={{ display: loading ? 'none' : 'block' }}
                />
                </>
                <button onClick={() => handlePrev(qasas)} className="carousel-btn prev-btn">‹</button>
                <button onClick={() => handleNext(qasas)} className="carousel-btn next-btn">›</button>
              </div>
              <h3>Developments</h3>
              <p>
              This work began as a personal endeavour to explore and share the incredible journeys of the Prophets in a format that is both accessible and engaging to an English and Arabic audience. Emphasis was placed on historical authenticity, narrative cohesion, and reflective insights. Sections of the book have already been openly shared with scholars and peers, and In-shāʾ-Allāh, full publication will follow soon. It stands as a sincere attempt to bridge storytelling with scholarship.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
