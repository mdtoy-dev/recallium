import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Practice from "./pages/Practice"
import Articles from "./pages/Articles"
import Videos from "./pages/Videos"
import Progress from "./pages/Progress"

function App() {

  return (
    <Router>
      <div className="min-h-screen flex">
        <Navbar />
        <div className="content-part">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
