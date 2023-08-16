import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Projects from "./components/pages/Projects"
import Project from "./components/pages/Project"
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"

import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"

function App() {
  return (
    <Router>
      <NavBar />
        <Container customClass="min-height">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Company" element={<Company />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
      </Routes>
        </Container>
      <Footer />
    </Router>
  )
}

export default App
