import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <PageNotFound/>
    }
  ])

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
