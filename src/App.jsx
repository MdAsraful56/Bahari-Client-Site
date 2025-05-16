import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> }>
        <Route index element={ <Home/> } />
        <Route path='contact' element={ <Contact/> } />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
