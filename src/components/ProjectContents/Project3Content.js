import React, { useEffect, useState } from 'react'
import ImageModal from '../ImageModal';
import PageSubtitleComponent from '../PageSubtitleComponent';
import { colors } from '../../assets/colors';

import Solution from '../../assets/data/images/project3_solution.png'

function Project3Content() {
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
                        During my study in the minor "The Next Web," I had the privilege to work for Ottiya, a South Korean company dedicated to innovative educational solutions for children. Ottiya specializes in creating engaging educational content that combines storytelling and technology to foster learning. The project spanned several months and aimed to address a specific challenge presented by Ottiya: to develop a product that would serve as a stepping stone to ScratchJr, a popular coding application for young children.
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text, minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Problem overview" size="small" />
                        <p style={{ color: colors.text }}>
                        Ottiya's existing introductory course familiarizes students with different types of code blocks used in ScratchJr. However, the course faced low engagement levels among students. The primary challenge was to enhance student involvement and make the learning experience more engaging and effective. Given the young target audience, aged 5 to 7, we needed to design a solution that was visually appealing, easy to understand, and engaging enough to hold their attention. The goal was to create a prototype that could be used both in the classroom and at home, supporting independent use by children.
                        </p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="subcontainer">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text, minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Solution" size="small" />
                        <p style={{ color: colors.text }}>
                            The final product was a game inspired by ScratchJr, designed to be an engaging and educational tool for young children. The game featured storytelling and gamification elements to maintain interest and enhance learning. The game successfully bridged the gap between Ottiya's introductory course and ScratchJr, enhancing student engagement and learning. Designed for use on iPads, the game ensured accessibility both in the classroom and at home.
                            <br></br><br></br>
                            <b>Asset Creation: </b>I designed all the visual assets for the game, including background images and various in-game elements. These assets were crafted to be visually appealing and suitable for the young target audience, ensuring that they would find the game engaging and enjoyable.
                            <br></br><br></br>
                            <b>Interface Design: </b>I led the design of the game's interface, ensuring it closely resembled ScratchJr. This strategic choice made it easier for children to transition to our game from ScratchJr. By mirroring the look and feel of ScratchJr, we aimed to create an intuitive user experience where the children could naturally navigate and interact with the game without requiring extensive guidance.
                        </p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text, minWidth: '300px', flex: 1}}>
                        <div style={{width: '40rem', maxWidth: '100%'}}>
                            <img src={Solution} alt="Solution" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Solution, alt: "Solution"})} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project3Content