import React from 'react'

import './userCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
    
    <p id='user-title'>{props.name}</p>
    <img src={props.img} alt={props.name} id='user-img'></img>
    <p id='user-desc'>My Description :</p>
    <h3 id='user-desc'> {props.desc}</h3>
    </div>
  )
}

export default UserCard
