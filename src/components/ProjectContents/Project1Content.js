import React, { useEffect, useState } from 'react';
import PageSubtitleComponent from '../PageSubtitleComponent';
import { colors } from '../../assets/colors';

import Overview from '../../assets/data/images/project1_overview.png';
import Responsibilities from '../../assets/data/images/project1_responsibilities.png'
import ImageModal from '../ImageModal';
import ScrollToTop from 'react-scroll-to-top';

function Project1Content() {
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    return (
        <div>
            {modalImage && (
                <ImageModal
                    src={modalImage.src} 
                    alt={modalImage.alt} 
                    onClose={() => setModalImage(null)} 
                />
            )}
            <div className="subcontainer">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
                    <div style={{minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Overview" size="small" />
                        <h4>If children have no access to education, how do they learn?</h4>
                        <p style={{ color: colors.text }}>
                            E-learning For Kids makes it possible for children without access to regular primary education to still receive an education. In a playful manner, anywhere in the world.
                            <br /><br />
                            The platform has existed since 2007 but keeps up with the times, which is why there’s been a lot of work on modernizing thousands of lessons. This is also one of our most extensive projects. 
                            By integrating game and learning elements, children can engage in an educational and effective learning journey.
                        </p>
                    </div>
                    <div style={{width: '35rem'}}>
                        <img src={Overview} alt="Overview" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Overview, alt: "Overview"})} />
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="subcontainer">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text, minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Responsibilities" size="small" />
                        <p style={{ color: colors.text }}>In my role on the E-Learning for Kids (EFK) modernization project, I focused on updating educational content to enhance learning experiences for children. EFK features 6 Grades along with a map with 8 levels, each containing around 6 courses on specific topics, designed to educate kids through interactive modules.</p>
                        <br></br><br></br>
                        <p><b>Creating Engaging Introductions:</b> I developed introductory segments for each course to present the topics in a clear and captivating manner. These introductions featured characters who explain the subject matter, setting the stage for the subsequent exercises.
                        <br></br><br></br>
                        <b>Content Development:</b> My work ensured that these introductions were informative and suitable for a young audience, containing all necessary content to prepare users for the exercises and to facilitate effective learning.
                        <br></br><br></br>
                        <b>Visual Enhancement:</b> Utilizing and enhancing old assets in Photoshop, I improved visual elements to align with modern standards. In cases where assets were missing, I created new illustrations from scratch.
                        <br></br><br></br>
                        <b>Exercise Design:</b> I occasionally designed exercises to reinforce learning, including True/False questions, multiple-choice questions, and drag-and-drop activities. These exercises were crafted to stimulate engagement and practice the skills being taught.</p>
                    </div>
                    <div style={{width: '35rem', maxWidth: '100%'}}>
                        <img src={Responsibilities} alt="Responsibilities" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Responsibilities, alt: "Responsibilities"})} />
                
                    </div>
                </div>
            </div>
            <ScrollToTop smooth color={colors.primary} style={{ borderRadius: '100%' }}/>
        </div>
    );
}

export default Project1Content;
