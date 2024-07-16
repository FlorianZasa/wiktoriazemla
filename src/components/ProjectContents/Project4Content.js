    import React, { useEffect, useState } from 'react'
    import ImageModal from '../ImageModal';
    import { colors } from '../../assets/colors';
    import ScrollToTop from 'react-scroll-to-top';
    import PageSubtitleComponent from '../PageSubtitleComponent';

    import Introduction from '../../assets/data/images/project4_introduction.png'
    import Overview from '../../assets/data/images/project4_overview.png'

    import Process1 from '../../assets/data/images/project4_process_1.png'
    import Process2 from '../../assets/data/images/project4_process_2.png'
    import Process3 from '../../assets/data/images/project4_process_3.png'
    import Result from '../../assets/data/images/project4_result.png'
import { styles } from '../../assets/styles';


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
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                <img src={Introduction} alt="Intro" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Introduction, alt: "Introduction"})} />
                                <span style={{...styles.text, fontSize: '14px'}}>*This image is showing the old look of the website</span>
                            </div>
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
            
                        </div>
                    </div>
                </div>

                <hr></hr>
                
                <div style={{
                    position: 'relative',
                    width: '100vw',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw',
                    backgroundColor: '#16314B',
                    padding: '1rem 0'
                }}>
                    <div className="subcontainer">
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
                            <div style={{minWidth: '300px', flex: 1}}>
                                <PageSubtitleComponent title="Process of the website" size="small" centered white />
                            </div>
                            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', alignItems: 'end'}}>
                                <div style={{width: '20rem', maxWidth: '100%'}}>
                                    <img src={Process1} alt="Process1" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Process1, alt: "Process1"})} />
                                </div>
                                <div style={{width: '20rem', maxWidth: '100%'}}>
                                    <img src={Process2} alt="Process1" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Process2, alt: "Process2"})} />
                                </div>
                                <div style={{width: '20rem', maxWidth: '100%'}}>
                                    <img src={Process3} alt="Process1" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Process3, alt: "Process3"})} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="subcontainer">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem' }}>
                        <div style={{minWidth: '300px', flex: 1}}>
                            <PageSubtitleComponent title="Result" size="small" />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ color: colors.text }}>To address these issues, I conducted thorough user research to understand the needs and behaviors of current and potential customers. This research informed the development of wireframes and prototypes to visualize a new layout and navigation structure. The redesign focused on creating a clean, modern interface that aligns with Mediajungle’s branding and appeals to a diverse audience. I collaborated with Mediajungle's co-creators responsible for the content to streamline and update the website’s information, ensuring that product and service details were clearly organized. This new structure allows users to navigate the site intuitively and find relevant information quickly. The redesigned website is now user-friendly, visually appealing, and effectively supports Klare Koek’s goal of making education and learning more enjoyable through serious games.</div>
                                <div style={{ color: colors.text }}>
                                    <b>User Research and Analysis: </b>Conducted extensive user research to identify pain points and user behavior, which informed the design process.
                                    <br></br><br></br>
                                    <b>Wireframing and Prototyping: </b>Developed detailed wireframes and interactive prototypes to visualize the new layout and test usability.
                                    <br></br><br></br>
                                    <b>Modern Interface Design: </b>Created a clean, modern interface that aligns with Mediajungle’s branding and enhances user experience.
                                    <br></br><br></br>
                                    <b>Improved Navigation: </b>Streamlined navigation to ensure users can easily find information and products, improving overall accessibility.
                                </div>
                            </div>
                        </div>
                        <div style={{width: '35rem', maxWidth: '100%'}}>
                            <img src={Result} alt="Result" style={{ width: '100%', objectFit: 'cover' }} onClick={() => setModalImage({src: Result, alt: "Result"})} />
                        </div>
                    </div>
                </div>



                <ScrollToTop smooth color={colors.primary} style={{ borderRadius: '100%' }}/>
            </div>
        )
    }

    export default Project4Content