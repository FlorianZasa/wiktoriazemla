import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCardComponent({ to, img, heading, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to} 
      style={{ 
        position: 'relative',
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'relative',
        transition: 'all 0.3s ease',
        filter: isHovered ? 'brightness(30%)' : 'brightness(100%)'
      }}>
        {img}
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: 'linear-gradient(to top, black, transparent)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'start',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        transition: 'opacity 0.3s ease',
        opacity: 1 
      }}>
         {isHovered ? (<p>> Click to get more information :)</p>) : (
          <>
            <h3>{heading}</h3>
            <p>{text}</p>
          </>
         )}
      </div>
    </Link>
  );
}

export default ProjectCardComponent;