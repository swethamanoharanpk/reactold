import React from 'react'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route, Routes} from'react-router-dom'
import Cart from './pages/Cart'
import First from './pages/First'
import Layout from './pages/Layout'
import Main from './pages/Main'
import Second from './pages/Second'

function App() {

  const display = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path = '/' element = {<Layout />}>
      <Route index element = {<Main />}/>
      <Route path= '/cart/:value' element = {<Cart/>} />
      </Route>
      <Route path = '/first' element = {<First/>}/>
      <Route path='/second/:id' element = {<Second/>}/>
      
      </>


      
    )
  )
  return (
    <RouterProvider router = {display}></RouterProvider>
  )
}

export default App