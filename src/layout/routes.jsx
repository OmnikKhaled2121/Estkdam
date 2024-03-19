import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Root from './Root'



export default function Routers() {
    let routers = createBrowserRouter([
        {
          path: '', element: <Root/>, children: [
            {index:true , element:<Home/>}
          ]
        }
      ])
    
  return routers
}
