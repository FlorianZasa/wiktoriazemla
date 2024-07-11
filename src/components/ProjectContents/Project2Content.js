import React, { useEffect, useState } from 'react';
import PageSubtitleComponent from '../PageSubtitleComponent';
import { colors } from '../../assets/colors';

import ProcessOfCards from '../../assets/data/images/process2_card_process.png'
import Solution from '../../assets/data/images/project2_solution.png'

import 'react-medium-image-zoom/dist/styles.css'
import ImageModal from '../ImageModal';
import ScrollToTop from 'react-scroll-to-top';

function Project2Content() {
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text, minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Introduction" size="small" />
                        <p style={{ color: colors.text }}>
                            As a former student of the Internationale Schakelklas (ISK), I have experienced firsthand the challenges of integrating into a group when language barriers are present. ISK schools are designed for children aged 12-18 who do not yet speak Dutch, providing them with the necessary language skills to transition to regular Dutch education within two years. This personal insight inspired me to develop a tool to enhance cooperation and the use of the Dutch language within the classroom. To address this issue, I explored various group dynamics and analyzed current communication between students. This research aimed to create targeted team-building activities that encourage students to speak Dutch. The goal was to establish an interactive learning environment that reduces language barriers and motivates students to converse in Dutch with their peers.
                        <br></br><br></br>
                            This project is a final project that sums up my 4 years of study in the degree of communication and multimedia design at NHL Stenden University of Applied Sciences in Leeuwarden.
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text, minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Problem overview" size="small" />
                        <p style={{ color: colors.text }}>
                            The main problem I aimed to address is the unhealthy group dynamics in ISK classrooms, where language barriers often lead to exclusion and poor communication among students. Drawing from my own experiences and observations, I realized that many students struggle to integrate and form friendships because they tend to speak only their native languages. This issue is particularly significant in ISK settings where students come from diverse linguistic backgrounds. By focusing on team-building activities that require the use of Dutch, I sought to create a tool that encourages students to work together towards common goals, thereby improving their language skills and social cohesion.
                        </p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="subcontainer">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem' }}>
                    <PageSubtitleComponent title="Process of the cards" size="small" centered />
                    <img src={ProcessOfCards} alt="ProcessOfCards" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: ProcessOfCards, alt: "ProcessOfCards"})} />
                </div>
            </div>

            <hr></hr>

            <div className="subcontainer">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '4rem' }}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text, minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Solution" size="small" />
                        <p style={{ color: colors.text }}>
                        The solution I developed is called Quizzy, an interactive game designed to improve communication and group dynamics in ISK classrooms. Quizzy uses a combination of quizzes and game cards to foster teamwork and Dutch language use among students aged 12-18.
                        <br></br><br></br>
                        Quizzy is designed to promote better cooperation and communication through interactive quizzes and game cards. By engaging students in group discussions and collaborative problem-solving, Quizzy helps students improve their Dutch language skills in a fun, non-intimidating way. The game includes two sets of cards—support cards and action cards. Support cards (Search, Wisdom, and Joker) provide versatile tools that aid in team strategy and communication. Action cards (Block, Target, and Shield) focus on direct interactions between teams, influencing the competitive dynamics of the game. These cards are designed with clear visual distinctions to ensure ease of use and understanding.
                        <br></br><br></br>
                        The teacher, or Quizzymaster, plays a crucial role in guiding the game and maintaining a balanced dynamic. The Quizzymaster oversees the gameplay, ensures fair play, and provides hints when necessary.
                        </p>
                    </div>
                    <div style={{width: '35rem'}}>
                        <img src={Solution} alt="solution design" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Solution, alt: "Solution"})} />
                    </div>
                </div>
            </div>
            <ScrollToTop smooth color={colors.primary} style={{ borderRadius: '100%' }}/>
        </div>
    );
}

export default Project2Content;
