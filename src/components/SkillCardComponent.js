import { colors } from "../assets/colors";
import PageSubtitleComponent from "./PageSubtitleComponent";


import './SkillCardComponent.css'

function SkillCardComponent({imgSrc, title, text}) {
    return (
      <div style={{
        padding: '2rem',
        backgroundColor: colors.white,
        border: '.5px solid lightgray',
        borderRadius: '14px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 340,
        gap: '1rem'
      }}>
        <div style={{ 
          width: '100%', 
          height: '200px',
          overflow: 'hidden'
        }}>
          <img 
            src={imgSrc} 
            alt={title} 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center'
            }} 
          />
        </div>
        <PageSubtitleComponent title={title} size={'mini'} centered  />
        <p style={{fontSize: '16px'}}>{text}</p>
      </div>
    )
  }

export default SkillCardComponent;
  