import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/homepage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import { Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <>
      <Box minH={"100vh"}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Create" element={<CreatePage />} />

        </Routes>
      </Box>
    </>
  )
}

export default App
