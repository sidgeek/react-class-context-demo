import React from 'react'
import HomePage from './HomePage'
import { UserProvider } from './UserContext'

function App() {
  const user = { name: 'Tania', loggedIn: true }

  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  )
}

export default App;
