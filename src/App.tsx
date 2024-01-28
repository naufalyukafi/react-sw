import './App.css'
import { RouterProvider } from 'react-router-dom';
import routers from './config/routes/indes';

function App() {
  return (
    <RouterProvider
      router={routers}
      fallbackElement={<div>Loading...</div>}
    />
  )
}

export default App
