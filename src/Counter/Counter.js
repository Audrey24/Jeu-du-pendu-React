import React from 'react'
import './Counter.css';
import PropTypes from 'prop-types'

const Counter = ({counter, gameState}) => (
  <div className="count">Nombre de tentative : {counter}/10
      <div className="state">
        Partie {gameState}
        </div>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  gameState: PropTypes.oneOf([
    'en cours',
    'perdu',
    'gagné',
  ]).isRequired,
}

export default Counter
