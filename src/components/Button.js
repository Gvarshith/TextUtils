import React from 'react'

export default function Button(props) {
    const changeColor = () => {
     document.body.style.backgroundColor = props.color
    }
  return (
    <div>
             <button
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: props.color,
        border: `1.5px solid ${props.mode=== 'light' ? 'black':'white'}`,
        cursor: 'pointer',
        marginRight: '8px'
      }}
      onClick={changeColor}
    >
    </button>
    </div>
  )
}
