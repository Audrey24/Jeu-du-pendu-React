import React from 'react'
import './Keyboard.css';
import PropTypes from 'prop-types'


const Keyboard = ({ letter, onClick, feedback}) => (
  <div style={{backgroundColor: `${feedback}`}} className={"letter"} onClick={() => onClick(letter)}>
    <span>
    {letter}
    </span>
  </div>
)

export default Keyboard
