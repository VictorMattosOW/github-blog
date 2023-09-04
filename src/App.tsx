import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Router } from './Router'
import { PostsProvider } from './contexts/PostsContext'

function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Router />
      </PostsProvider>
    </BrowserRouter>
  )
}

export default App
