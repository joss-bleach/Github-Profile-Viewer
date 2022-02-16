import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Context
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

// Components
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="container mx-auto flex h-screen flex-col px-6 md:px-2 lg:px-0">
            <Navbar />
            <main>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
};

export default App;
