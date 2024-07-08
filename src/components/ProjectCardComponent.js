import React, { useState } from 'react';

function ProjectCardComponent({ img, heading, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
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
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          transition: 'opacity 0.3s ease',
          opacity: isHovered ? 1 : 0
        }}>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectCardComponent;