/** @format */

import React, { Fragment } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

const PlayerCard = () => {
  const players = JSON.parse(localStorage.getItem('lobby') || '[]')
  return (
    <Fragment>
      <Container>
        <Row>
          {players.map((player) => (
            <Col md={3} className='mt-5' key={player._id}>
              {player.select ? (
                <Card className='candidate-card'>
                  <Card.Body>
                    <Card.Title>
                      <strong className='p-2'>Name:&nbsp;{player.Name}</strong>
                    </Card.Title>
                    <Card.Text>
                      <strong className='p-2'>Price:</strong>
                      {player.Price}
                    </Card.Text>
                    <Card.Text>
                      <strong className='p-2'>Bet:</strong>
                      <strong> {player.Bet}</strong>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </Card>
              ) : (
                ''
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  )
}

export default PlayerCard
