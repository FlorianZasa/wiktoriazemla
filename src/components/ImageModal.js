import React from 'react'
import 'react-medium-image-zoom/dist/styles.css'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

function ImageModal({ src, alt, onClose }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 0,
            padding: 0,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <button 
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                ×
            </button>
            <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                style={{
                    overflow: 'visible !important'
                }}
            
            >
                <TransformComponent>
                    <img 
                        src={src} 
                        alt={alt} 
                        style={{ 
                            width: '100%'
                        }} 
                    />
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default ImageModal