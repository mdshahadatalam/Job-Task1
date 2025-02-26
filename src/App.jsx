import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import { Guide } from './components/Guide'
import { Navbar } from './components/Navbar'
import { RootLayout } from './RootLayout/RootLayout'
import { Payment } from './components/Payment'
function App() {

    const route = createBrowserRouter(createRoutesFromElements(
        <Route>
               <Route element={<RootLayout/>}>
               <Route path='/' element={<Guide/>}/>
               <Route path='/payment' element={<Payment/>}/>
               </Route>
        </Route>
    ))
   return (
    <>
       <RouterProvider router={route}/>
    </>
  )
}

export default App
