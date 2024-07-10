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
        maxWidth: 300
      }}>
        <img src={imgSrc} alt="Alternative" style={{ height: '200px', width: 'auto', objectFit: 'cover' }} />
        <PageSubtitleComponent title={title} size={'small'} centered />
        <p style={{fontSize: '16px'}}>{text}</p>
      </div>
    )
  }

export default SkillCardComponent;
  