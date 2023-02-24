import React from 'react'
import { useStateProvider } from '../../context/state'

const Dashboard = () => {
  const [state, setState] = useStateProvider()
  return (
    <div>Current State: { JSON.stringify(state) }</div>
  )
}

export default Dashboard