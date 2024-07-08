import React from 'react'

function CircleComponent({ size , left=0, top=0}) {
  return (
    <div style={{
        width: size,
        height: size,
        border: '2px solid black',
        borderRadius: '50%',
        position: 'absolute',
        left: left,
        top: top
    }}></div>
  )
}

export default CircleComponent