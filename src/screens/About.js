import React, { useEffect, useState } from 'react'
import PageSubtitleComponent from '../components/PageSubtitleComponent'
import './About.css'

import Wiki2Image from '../assets/Wiki2.png';

import URImage from '../assets/SkillImages/URImage.png';
import UXImage from '../assets/SkillImages/UXImage.png';
import UIImage from '../assets/SkillImages/UIImage.png';
import ToolsImage from '../assets/SkillImages/ToolsImage.png';
import SoftImage from '../assets/SkillImages/SoftImage.png';


import ButtonComponent from '../components/ButtonComponent';
import { styles } from '../assets/styles';
import SkillCardComponent from '../components/SkillCardComponent';
import ModalComponent from '../components/ModalComponent';
import ScrollToTop from 'react-scroll-to-top';
import { colors } from '../assets/colors';

function About() {
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false)
    const [code, setCode] = useState(null)
    const [error, setError] = useState(null)

    function handleDownload() {
        setIsCodeModalOpen(true)
    }

    function onChangedCode(e) {
        setCode(e.target.value);
        setError(null);
    }

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    function handleCodeSubmit(e) {
        e.preventDefault();
        if (code === process.env.REACT_APP_SECRET_CODE) {
            fetch("https://raw.githubusercontent.com/FlorianZasa/wiktoriazemla/master/files/test.txt")
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = 'test.txt';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    setIsCodeModalOpen(false);
                })
                .catch(() => setError('Download failed. Please try again.'));
        } else {
            setError('Incorrect Password!')
            setCode('')
        }
    }

    useEffect(() => {
        setCode(null)
        setError(null)
    }, [isCodeModalOpen])
    
    return (
        <div className="container">
        
            <ModalComponent isOpen={isCodeModalOpen} onClose={() => setIsCodeModalOpen(false)}>
                <PageSubtitleComponent title="One moment yet..." size="small" />
                <div style={{width: '100%'}}>
                    <form onSubmit={handleCodeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label>Please enter here the code to be able to access this file.</label>
                        
                        <input
                            type="password"
                            value={code}
                            onChange={onChangedCode}
                            placeholder='Enter the code...'
                            style={{
                                padding: '.5rem',
                                fontSize: '20px',
                                border: error ? '2px solid red' : '1px solid #ccc',
                                borderRadius: '4px'
                            }}
                        />
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                            <button type="submit" style={styles.button} disabled={error !== null}>Submit</button>
                        </div>
                    </form>
                </div>
            {error && <p style={{color: "red"}}>{error}</p>}
            </ModalComponent>
         
            <div className="subcontainer">
                
                <div className="content" style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="description" style={{...styles.text, display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                        <PageSubtitleComponent title="Who am I exactly?" size="small" />
                        <span style={styles.text}>I am a 22-year-old recent graduate with a degree in Communication and Multimedia Design from a Dutch university, specializing in UX and UI design. Originally from Poland, I moved to the Netherlands at 14, learning Dutch while adapting to a new culture and education system. This experience taught me resilience and adaptability, qualities that have shaped my approach to design.
                            <br></br>
                            <br></br>
                            With hands-on experience from real-world projects and my internship in web design, I’ve developed 
                            e-learning apps, redesigned websites, and built brand identities. Known for my creativity and dedication, I’m excited to start my professional journey in UX/UI design, continually refining my skills in a dynamic, collaborative environment
                        </span>
                        <br></br>
                        <ButtonComponent text="Download my CV" onClick={() => handleDownload()} />
                    </div>
                    <img src={Wiki2Image} className="profile-image" alt="Profile" style={{width: '20rem'}} />
                </div>
            </div>

            <div className="subcontainer">
                <PageSubtitleComponent title="My Skills" size='small' centered />
                <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '2rem'}}>
                    <p className="skill-text">I specialize in UX/UI design, conducting user research, creating wireframes and prototypes, and applying visual design principles. My work enhances user engagement and consistency across responsive web and mobile interfaces.</p>
                </div>
                
                <div style={{display: 'flex', gap:'2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <SkillCardComponent imgSrc={URImage} title={"User Research"} text="I conduct thorough user research through interviews and surveys, and perform usability tests to gather insights and enhance user experience. My research has driven the design of e-learning apps and website redesigns, ensuring solutions that meet user needs." />
                    <SkillCardComponent imgSrc={UXImage} title={"UX Design"} text="I create wireframes and interactive prototypes to visualize and iterate on design concepts. By applying UX principles and heuristics, I design intuitive interfaces that improve engagement and usability. My work on projects like Mediajungle, Quizzy, and Bring Otto Home has facilitated user testing and feedback." />
                    <SkillCardComponent imgSrc={UIImage} title={"UI Design"} text="I design visually appealing interfaces using principles of color theory, typography, and layout. I develop design systems for consistency and responsive designs for adaptability across devices. My proficiency in HTML and CSS supports effective communication with developers and the implementation of cohesive design concepts." />
                    <SkillCardComponent imgSrc={ToolsImage} title={"Tools"} text="I proficiently use Figma, Adobe XD, and Affinity Designer for wireframing, prototyping, and creating high-fidelity designs. My skills in Adobe Illustrator and Photoshop support detailed graphics and visual assets, while Microsoft Office aids in project documentation and presentations." />
                    <SkillCardComponent imgSrc={SoftImage} title={"Soft Skills"} text="I thrive in collaboration and problem-solving within Scrum and Agile methodologies, ensuring effective teamwork and adaptability. My resilience helps me navigate challenges and feedback, consistently delivering quality design solutions in dynamic project environments." />
                </div>
            
            </div>

            <div className="subcontainer">
                <PageSubtitleComponent title={"Work Experience"} size="small" centered />
                <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                    <div className="timeContainer">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{fontSize: '20px', fontWeight: 800}}>Higher Education</p>
                            <span style={{fontSize: '19px'}}>CSG Bogerman, Balk/Sneek</span>
                        </div>
                        <p style={{fontSize: '20px', fontWeight: 800, justifySelf: 'right'}}>2016 - 2020</p>
                    </div>

                    <div className="timeContainer">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{fontSize: '20px', fontWeight: 800}}>Bachelor of Science - Communication & Multimedia Design</p>
                            <span style={{fontSize: '19px'}}>NHL Stenden University of Applied Sciences, Leeuwarden</span>
                            <ul>
                                <li style={{fontSize: '16px'}}><b>Minor 1: The Next Web </b>- Focused on UX/UI Design</li>
                                <li style={{fontSize: '16px'}}><b>Minor 2: The Next Web </b>- Focused on UX/UI Design</li>
                                <li style={{fontSize: '16px'}}><b>Minor 3: Game Development & 3D </b>- Focused on UX/UI Design</li>
                                <li style={{fontSize: '16px'}}><b>Minor 4: The Next Web </b>- Focused on UX/UI Design & Front-End</li>
                            </ul>
                        </div>
                        <p style={{fontSize: '20px', fontWeight: 800}}>2023 - 2023</p>
                    </div>
                </div>
            </div>

            <div className="subcontainer">
                <PageSubtitleComponent title={"Work Experience"} size="small" centered />
                <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                    <div className="timeContainer">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{fontSize: '20px', fontWeight: 800}}>Internship</p>
                            <span style={{fontSize: '19px'}}>Web-design, Klare Koek, Leeuwarden</span>
                        </div>
                        <p style={{fontSize: '20px', fontWeight: 800}}>2023 - 2023</p>
                    </div>

                    <div className="timeContainer">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{fontSize: '20px', fontWeight: 800}}>Content Designer</p>
                            <span style={{fontSize: '19px'}}>E-learning Platform For Kids (EFK), Klare Koek, Leeuwarden</span>
                            <ul>
                                <li style={{fontSize: '16px'}}><b>Minor 1: The Next Web </b>- Focused on UX/UI Design</li>
                                <li style={{fontSize: '16px'}}><b>Minor 2: The Next Web </b>- Focused on UX/UI Design</li>
                                <li style={{fontSize: '16px'}}><b>Minor 3: Game Development & 3D </b>- Focused on UX/UI Design</li>
                                <li style={{fontSize: '16px'}}><b>Minor 4: The Next Web </b>- Focused on UX/UI Design & Front-End</li>
                            </ul>
                        </div>
                        <p style={{fontSize: '20px', fontWeight: 800}}>2022 -  Present</p>
                    </div>
                </div>
            </div>


            
            <ScrollToTop smooth color={colors.primary} style={{ borderRadius: '100%' }}/>
        </div>
    )
}

export default About