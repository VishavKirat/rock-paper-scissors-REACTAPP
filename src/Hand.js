import React from 'react'

const Hand = ({option,color}) =>{
    const style = {
        background: `${color}`
    }
    return (
        <div className="hand" style={style}>
            {option}
        </div>
    )
}

export default Hand;
