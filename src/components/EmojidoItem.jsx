import React from 'react'

const buttonStyle = {
  fontSize: '2em',
  border: 'none',
  background: 'none'
}

export default function EmojidoItem({
    completed,
    description,
    onToggleComplete,
    onChangeDescription
}) {
    return (
        <div>
            <button 
            style={buttonStyle}
            onChange={ onToggleComplete }>
                 { complete ? '😻' : '🐱'}
            </button>
            <input
                type='text'
                value={ description }
                onChange={ onChangeDescription }
            />
        </div>
    )
}