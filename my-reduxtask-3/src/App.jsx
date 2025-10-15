import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookContainer from './BookContainer'
import store from './redux/BookStore'
import { Provider } from 'react-redux'
function App() {
 

  return (
    <Provider store={store}>
    <BookContainer/>
    </Provider>
  )
}

export default App
