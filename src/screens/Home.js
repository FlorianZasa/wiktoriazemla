import React, { useEffect } from 'react';
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
import ScrollToTop from 'react-scroll-to-top';


function Home() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      <div className="hero-container">
        <div  className="hero-blue-container"style={{ backgroundColor: colors.primary }}>
          <div className="hero-heading">
            <h1 style={{ color: colors.background }}>Hi!👋 I’m Wiktoria,</h1>
            <h1 style={{ color: colors.background }}>a passionate UX/UI Designer</h1>
          </div>
        </div>
        <img className="hero-img" src={WikiImage} style={{border: `16px solid ${colors.secondary}`}} alt="My Profile"/>
      </div>

      <div className= 'container'>
        <div style={{width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', padding: '2rem 0 2rem 0'}}>
            <PageSubtitleComponent title="So what exactly do I do?" size='small' centered />

            <div style={styles.text}>
              As a UX/UI designer, I craft engaging and intuitive digital experiences by understanding user needs, creating visually appealing interfaces, and ensuring seamless interaction across all platforms. I blend creativity with user-centered design principles to transform complex problems into elegant, functional solutions.
              <br></br>
              <br></br>
              <div style={{display: 'flex', gap: '.5rem'}}>
                <span>Look below to see my work. </span>
                <img src={ArrowDownIcon} alt="arrow-down" height={30} style={{ position: 'relative', top: '.5rem' }} />
              </div>
            </div>
        </div>

        <div style={{width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', padding: '2rem 0 2rem 0'}}>
            <PageSubtitleComponent title="My Work" size='small' centered />
            <div className="project-grid-container">
                <ProjectCardComponent to="/proj/1" img={<img src={Project1} alt={"E-Learning For Kids (EFK)"} style={{width: '100%'}} />} heading={"E-Learning For Kids (EFK)"} text={"Serious Games, E-learning, Education"} />
                <ProjectCardComponent to="/proj/2" img={<img src={Project2} alt={"Project2"} style={{width: '100%'}} />} heading={"Quizzy - Improve Communication"} text={"Serious Games, Education, Stimulates Conversations"} />
                <ProjectCardComponent to="/proj/3" img={<img src={Project3} alt={"Project3"}  style={{width: '100%'}} />} heading={"Bring Otto Home"} text={"Serious Games, E-learning, Education"} />
                <ProjectCardComponent to="/proj/4" img={<img src={Project4} alt={"Project4"} style={{width: '100%'}} />} heading={"Mediajungle - Redesign"} text={"Redesign, Accessibility"} />
            </div>
        </div>
      </div>
      <ScrollToTop smooth color={colors.primary} style={{ borderRadius: '100%' }}/>
    </div>
  );
}

export default Home;