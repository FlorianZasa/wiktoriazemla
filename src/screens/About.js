import React from 'react'
import PageSubtitleComponent from '../components/PageSubtitleComponent'
import { colors } from '../assets/colors'
import './About.css'

import WikiImage from '../assets/Wiki.png';
import ButtonComponent from '../components/ButtonComponent';
import { styles } from '../assets/styles';

function About() {
  return (
    <div className="container">
        <div className="subcontainer">
            <div className="content">
                <div className="description" style={styles.text}>
                    <PageSubtitleComponent title="Who am I exactly?" />
                    <span>I am a 22-year-old recent graduate with a degree in Communication and Multimedia Design from a Dutch university, specializing in UX and UI design. Originally from Poland, I moved to the Netherlands at 14, learning Dutch while adapting to a new culture and education system. This experience taught me resilience and adaptability, qualities that have shaped my approach to design.
                        <br></br>
                        <br></br>
                        With hands-on experience from real-world projects and my internship in web design, I’ve developed 
                        e-learning apps, redesigned websites, and built brand identities. Known for my creativity and dedication, I’m excited to start my professional journey in UX/UI design, continually refining my skills in a dynamic, collaborative environment
                    </span>
                </div>
                <img src={WikiImage} className="profile-image" alt="Profile" />
            </div>
            <ButtonComponent text="Download my CV" onClick={() => console.log("Clicked")} />
        </div>

        <div className="subcontainer">
            <PageSubtitleComponent title="My Skills" centered />
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', flex: '1 1 600px'}}>
                    <PageSubtitleComponent title="UX/UI Design" size='small' />
                    <ol style={{display: 'flex', flexDirection: 'column', gap: '2rem', color: colors.text}}>
                        <div>
                            <li style={{fontWeight: 900, fontSize: '1.2rem'}}>User Research & Usability Testing:</li>
                            <span>I conducted user research through interviews and surveys, and performed usability tests to gather insights and enhance user experience in projects like e-learning apps and website redesigns.</span>
                        </div>
                        <div>
                            <li style={{fontWeight: 900, fontSize: '1.2rem'}}>Wireframing & Prototyping:</li>
                            <span>I'm proficient in creating wireframes and interactive prototypes to visualize and refine design concepts. I developed prototypes for projects such as Mediajungle, Quizzy and Bring Otto Home, facilitating user testing and feedback.</span>
                        </div>
                        <div>
                            <li style={{fontWeight: 900, fontSize: '1.2rem'}}>UX Principles, Heuristics & Interaction Design:</li>
                            <span>I applied UX principles and heuristics to design intuitive interfaces, significantly improving engagement and usability in web and mobile app projects.</span>
                        </div>
                        <div>
                            <li style={{fontWeight: 900, fontSize: '1.2rem'}}>Visual Design: Color Theory, Typography & Layout:</li>
                            <span>I designed visually appealing interfaces by applying principles of color theory, typography, and layout. This approach enhanced aesthetics and readability across various design projects.</span>
                        </div>
                        <div>
                            <li style={{fontWeight: 900, fontSize: '1.2rem'}}>Design Systems & Responsive Design:</li>
                            <span>I’m experienced in developing design systems to ensure consistency across projects and creating responsive designs for various devices. I implement design system for websites and develop layouts that adapt seamlessly 
                            to both desktop and mobile platforms.</span>
                        </div>
                        <div>
                            <li style={{fontWeight: 900, fontSize: '1.2rem'}}>HTML & CSS:</li>
                            <span>I have basic proficiency in HTML and CSS, which facilitated effective communication with developers and 
                            allowed for the implementation of design concepts during my studies.</span>
                        </div>
                    </ol>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <PageSubtitleComponent title="Tools" size='small' />
                    <ul style={{listStyle: 'square', display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text}}>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>Affinity Designer</li>
                        <li>Microsoft Office</li>
                        <li>Kanban Boards</li>
                    </ul>

                    <PageSubtitleComponent title="Soft skills" size='small' />
                    <ul style={{listStyle: 'square', display: 'flex', flexDirection: 'column', gap: '1rem', color: colors.text}}>
                        <li>Scrum & Agile methodologies</li>
                        <li>Collaboration</li>
                        <li>Problem-solving</li>
                        <li>Resilience</li>
                        <li>Adaptability</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="subcontainer">
            <PageSubtitleComponent title={"Education"} centered />
            ...
        </div>

        <div className="subcontainer">
            <PageSubtitleComponent title={"Work Experience"} centered />
            ...
        </div>
    </div>
  )
}

export default About