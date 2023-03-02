import React from 'react'
import { useStateProvider } from '../../context/AppContext'

const Dashboard = () => {
  const { state, dispatch } = useStateProvider()
  return (
    <div>Current State: {JSON.stringify(state)}</div>
  )
}

export default Dashboard