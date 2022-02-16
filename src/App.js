import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Context
import { GithubProvider } from "./context/github/GithubContext";

// Components
import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <div className="container mx-auto flex h-screen flex-col px-6 md:px-2 lg:px-0">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GithubProvider>
  );
};

export default App;
