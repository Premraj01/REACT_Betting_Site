/** @format */

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Context } from '../Store'
import Lobby from '../components/Lobby'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const [state, dispatch] = useContext(Context)
  const [lobby, setLobby] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/he-public-data/bets7747a43.json')

      dispatch({ type: 'GET_PLAYERS', payload: data })
    }
    fetchData()

    setLobby(
      state.players.map((player) => {
        return {
          select: false,
          Name: player.Name,
          Price: player.Price,
          Bet: player.Bet,
        }
      })
    )
  }, [dispatch])

  return (
    <>
      <div className='content'>
        <div className='sidebar'>
          <h2>Players</h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Bet</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {lobby.map((l) => {
                localStorage.setItem('lobby', JSON.stringify(lobby))
                if (l.select) {
                  return (
                    <>
                      <tr>
                        <td>{l.Name}</td>
                        <td>{l.Bet}</td>
                        <td>{l.Price}</td>
                      </tr>
                    </>
                  )
                }
              })}
            </tbody>
          </Table>
          <Link to='/game'>
            <Button className='btn-block' variant='primary'>
              Start
            </Button>
          </Link>
        </div>
        <div className='team-table'>
          <Table borderless hover variant='dark'>
            <thead>
              <tr>
                <th>Select</th>
                <th>Player Name</th>
                <th>Price</th>
                <th>Bet</th>
              </tr>
            </thead>
            {state.players.map((player) => (
              <tbody>
                <tr key={player.id}>
                  <td>
                    <input
                      onChange={(e) => {
                        let checked = e.target.checked
                        setLobby(
                          state.players.map((p) => {
                            if (player.Name === p.Name) {
                              p.select = checked
                            }
                            return p
                          })
                        )
                      }}
                      type='checkbox'
                      checked={player.select}></input>
                  </td>
                  <td>{player.Name}</td>
                  <td>{player.Price}</td>
                  <td>{player.Bet}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
