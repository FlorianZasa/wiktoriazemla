import React, { useState } from 'react'
import PageSubtitleComponent from '../components/PageSubtitleComponent'
import { colors } from '../assets/colors'
import './About.css'

import WikiImage from '../assets/Wiki.png';

import URImage from '../assets/SkillImages/URImage.png';
import UXImage from '../assets/SkillImages/UXImage.png';
import UIImage from '../assets/SkillImages/UIImage.png';
import ToolsImage from '../assets/SkillImages/ToolsImage.png';
import SoftImage from '../assets/SkillImages/SoftImage.png';


import ButtonComponent from '../components/ButtonComponent';
import { styles } from '../assets/styles';
import SkillCardComponent from '../components/SkillCardComponent';
import CircleComponent from '../components/CircleComponent';
import ModalComponent from '../components/ModalComponent';

function About() {
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false)
    const [code, setCode] = useState(null)
    const [error, setError] = useState(null)

    function handleDownload() {
        setIsCodeModalOpen(true)
    }

    function handleCodeSubmit(e) {
        e.preventDefault();
        if (code === process.env.REACT_APP_SECRET_CODE) {
            window.open("https://raw.githubusercontent.com/FlorianZasa/wiktoriazemla/master/files/test.txt", '_blank');
            setIsCodeModalOpen(false);
        } else {
            console.log(code + " is not " + process.env.REACT_APP_SECRET_CODE);
            setError('Incorrect Password!')
        }
    }

    return (
        <div className="container">
        
            <ModalComponent isOpen={isCodeModalOpen} onClose={() => setIsCodeModalOpen(false)}>
                <h2>Download Code for file:</h2>
                <div style={{width: '100%'}}>
                    <form onSubmit={handleCodeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <input
                            type="password"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder='Enter the code...'
                            style={{
                                padding: '.5rem',
                                fontSize: '20px',
                                border: '1px solid #ccc',
                                borderRadius: '4px'
                              }}
                        />
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                            <button type="submit" style={styles.button}>Submit</button>
                        </div>
                    </form>
                </div>
            {error && <p>{error}</p>}
            </ModalComponent>
         
            <div className="subcontainer">
                <div className="content">
                    <div className="description" style={styles.text}>
                        <PageSubtitleComponent title="Who am I exactly?" />
                        <span style={styles.text}>I am a 22-year-old recent graduate with a degree in Communication and Multimedia Design from a Dutch university, specializing in UX and UI design. Originally from Poland, I moved to the Netherlands at 14, learning Dutch while adapting to a new culture and education system. This experience taught me resilience and adaptability, qualities that have shaped my approach to design.
                            <br></br>
                            <br></br>
                            With hands-on experience from real-world projects and my internship in web design, I’ve developed 
                            e-learning apps, redesigned websites, and built brand identities. Known for my creativity and dedication, I’m excited to start my professional journey in UX/UI design, continually refining my skills in a dynamic, collaborative environment
                        </span>
                    </div>
                    <img src={WikiImage} className="profile-image" alt="Profile" />
                </div>
                <div style={{display: 'flex', gap: '2rem'}}>
                    <ButtonComponent text="Download my CV" onClick={() => handleDownload()} />
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                <CircleComponent className="deko-circle" size={'6rem'} left={-120} top={-30} />
            </div>

            <div className="subcontainer">
                <PageSubtitleComponent title="My Skills" centered />
                <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '2rem'}}>
                    <p style={{ ...styles.text, width: '70%' }}>I specialize in UX/UI design, conducting user research, creating wireframes and prototypes, and applying visual design principles. My work enhances user engagement and consistency across responsive web and mobile interfaces.</p>
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
                <PageSubtitleComponent title={"Education"} centered />
                <table style={{borderSpacing: '0 2rem'}}>
                    <tr>
                        <td>
                            <div>
                                <p style={{fontSize: '20px', fontWeight: 800}}>Higher Education</p>
                                <span style={{fontSize: '19px'}}>CSG Bogerman, Balk/Sneek</span>
                            </div>
                        </td>
                        <td style={{fontSize: '20px', fontWeight: 800}}>2016 - 2020</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p style={{fontSize: '20px', fontWeight: 800}}>Bachelor of Science - Communication & Multimedia Design</p>
                                <span style={{fontSize: '19px'}}>NHL Stenden University of Applied Sciences, Leeuwarden</span>
                                <ul>
                                    <li style={{fontSize: '16px'}}><b>Minor 1: The Next Web </b>- Focused on UX/UI Design</li>
                                    <li style={{fontSize: '16px'}}><b>Minor 2: The Next Web </b>- Focused on UX/UI Design</li>
                                    <li style={{fontSize: '16px'}}><b>Minor 3: Game Development & 3D </b>- Focused on UX/UI Design</li>
                                    <li style={{fontSize: '16px'}}><b>Minor 4: The Next Web </b>- Focused on UX/UI Design & Front-End</li>
                                </ul>
                            </div>
                        </td>
                        <td style={{fontSize: '20px', fontWeight: 800}}>2016 - 2020</td>
                    </tr>
                </table>
            </div>

            <div className="subcontainer">
                <PageSubtitleComponent title={"Work Experience"} centered />
                <table style={{borderSpacing: '0 2rem'}}>
                    <tr>
                        <td>
                            <div>
                                <p style={{fontSize: '20px', fontWeight: 800}}>Internship</p>
                                <span style={{fontSize: '19px'}}>Web-design, Klare Koek, Leeuwarden</span>
                            </div>
                        </td>
                        <td style={{fontSize: '20px', fontWeight: 800}}>2023 - 2023</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p style={{fontSize: '20px', fontWeight: 800}}>Content Designer</p>
                                <span style={{fontSize: '19px'}}>E-learning Platform For Kids (EFK), Klare Koek, Leeuwarden</span>
                                <ul>
                                    <li style={{fontSize: '16px'}}><b>Minor 1: The Next Web </b>- Focused on UX/UI Design</li>
                                    <li style={{fontSize: '16px'}}><b>Minor 2: The Next Web </b>- Focused on UX/UI Design</li>
                                    <li style={{fontSize: '16px'}}><b>Minor 3: Game Development & 3D </b>- Focused on UX/UI Design</li>
                                    <li style={{fontSize: '16px'}}><b>Minor 4: The Next Web </b>- Focused on UX/UI Design & Front-End</li>
                                </ul>
                            </div>
                        </td>
                        <td style={{fontSize: '20px', fontWeight: 800}}>2022 -  Present</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default About