import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/UsersStore'
import UserList from './UserList'

function App() {
  
  return (
    <div>
      <Provider store={store}>
        <UserList/>
      </Provider>
    </div>
  )
}

export default App
