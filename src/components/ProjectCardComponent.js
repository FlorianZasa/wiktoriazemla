import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCardComponent({ to, img, heading }) {
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
          <h2>{heading}</h2>
          <p>Click for more information!</p>
        </div>
      )}
    </Link>
  );
}

export default ProjectCardComponent;