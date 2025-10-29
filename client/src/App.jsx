import React from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './RootLayout'
import Dashboard from "./pages/Dashboard"
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'
import Layout from './pages/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='app' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='builder/:resumeId' element={<ResumeBuilder/>}/>
      </Route>
      <Route path='view/:resumeId' element={<Preview/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App