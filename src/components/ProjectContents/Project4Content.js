import React, { useEffect, useState } from 'react'
import ImageModal from '../ImageModal';
import { colors } from '../../assets/colors';
import ScrollToTop from 'react-scroll-to-top';
import PageSubtitleComponent from '../PageSubtitleComponent';

import Introduction from '../../assets/data/images/project4_introduction.png'
import Overview from '../../assets/data/images/project4_overview.png'

function Project4Content() {
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
                            During my internship at Klare Koek, a communication agency based in Leeuwarden specializing in serious games, I was tasked with redesigning their existing Mediajungle website. Mediajungle aims to facilitate dialogue between educators, adults, youths, and children about online media use and behavior. Originally designed for a single product, the Mediajungle board game, the website had become outdated and cluttered as new tools and services were added. My primary objective was to create a more accessible, intuitive, and visually appealing website that effectively communicates Mediajungle’s expanded offerings and mission.
                        </p>
                    </div>
                    <div style={{width: '35rem'}}>
                        <img src={Introduction} alt="ProcessOfCards" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Introduction, alt: "Introduction"})} />
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="subcontainer">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
                    <div style={{minWidth: '300px', flex: 1}}>
                        <PageSubtitleComponent title="Problem Overview" size="small" />
                        <p style={{ color: colors.text }}>
                        The main issues with the old Mediajungle website were its outdated design, disorganized content, and poor navigation. The website, initially created for the Mediajungle board game launched in 2017, struggled to accommodate the growing number of products and services offered. As a result, potential customers found it challenging to navigate the site, access relevant information, and understand the full range of Mediajungle's offerings. This confusion hindered the ability to attract and retain customers, ultimately affecting the business's growth and impact.
                        </p>
                    </div>
                    <div style={{width: '35rem', maxWidth: '100%'}}>
                        <img src={Overview} alt="Overview" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Overview, alt: "Overview"})} />
                    </div>
                </div>
            </div>
            <ScrollToTop smooth color={colors.primary} style={{ borderRadius: '100%' }}/>
        </div>
    )
}

export default Project4Content