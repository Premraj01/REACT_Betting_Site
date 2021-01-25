/** @format */

import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PlayerCard from '../components/PlayerCard'

const GameScreen = () => {
  return (
    <>
      <h2>Game Screen:</h2> <hr />
      <Container>
        <PlayerCard />
      </Container>
    </>
  )
}

export default GameScreen
