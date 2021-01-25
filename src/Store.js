/** @format */

import React, { useReducer, createContext } from 'react'
import Reducer from './reducer/playerReducer'

const initialState = {
  players: [],
  error: null,
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export const Context = createContext(initialState)

export default Store
