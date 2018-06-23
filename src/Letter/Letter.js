import React from 'react'
import './Letter.css';
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '__'

const Letter = ({ letter, feedback}) => (
  <div className={`letter ${feedback}`} >
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
    </span>
  </div>
)

export default Letter
