import React from 'react';
import { colors } from '../assets/colors';
import WikiImage from '../assets/Wiki.png';
import ArrowDownIcon from '../assets/arrow-down-icon.png';
import ProjectCardComponent from '../components/ProjectCardComponent';

//Project images
import Project1 from '../assets/ProjectImages/project1.png';
import Project2 from '../assets/ProjectImages/project2.png';
import Project3 from '../assets/ProjectImages/project3.png';
import Project4 from '../assets/ProjectImages/project4.png';
import PageSubtitleComponent from '../components/PageSubtitleComponent';

import './Home.css'
import { styles } from '../assets/styles';
import CircleComponent from '../components/CircleComponent';


function Home() {
  return (
    <div>
      <div className="hero-container">
        <div  className="hero-blue-container"style={{ backgroundColor: colors.primary }}>
            <h1 style={{ color: colors.background }}>Hi!👋 I’m Wiktoria, a</h1>
            <h1 style={{ color: colors.background }}>passionate UX/UI Designer</h1>
        </div>
        <img className="hero-img" src={WikiImage} style={{border: `16px solid ${colors.secondary}`}}/>
      </div>

      <div style={{ position: 'relative' }}>
        <CircleComponent size={100} left={-40} top={-120} />
      </div>
      
      <div className= 'container'>
        <div style={{width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', padding: '2rem 0 2rem 0'}}>
            <PageSubtitleComponent title="So what exactly do I do?" />

            <div style={styles.text}>
            As a UX/UI designer, I craft engaging and intuitive digital experiences by understanding user needs, creating visually appealing interfaces, and ensuring seamless interaction across all platforms. I blend creativity with user-centered design principles to transform complex problems into elegant, functional solutions.
            <br></br>
            <br></br>
            Look below to see my work. <img src={ArrowDownIcon} alt="arrow-down" height={30} />
            </div>
        </div>

        <div style={{width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', padding: '2rem 0 2rem 0'}}>
            <PageSubtitleComponent title="My Work" />
            <div className="project-grid-container">
                <ProjectCardComponent img={<img src={Project1} alt={"Project1"} style={{width: '100%'}} />} heading={"badlf"} text={"hjaksdf"} />
                <ProjectCardComponent img={<img src={Project2} alt={"Project2"} style={{width: '100%'}} />} heading={"badlf"} text={"hjaksdf"} />
                <ProjectCardComponent img={<img src={Project3} alt={"Project3"}  style={{width: '100%'}} />} heading={"badlf"} text={"hjaksdf"} />
                <ProjectCardComponent img={<img src={Project4} alt={"Project4"} style={{width: '100%'}} />} heading={"badlf"} text={"hjaksdf"} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;