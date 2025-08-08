import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import People from "./pages/People";
import ResearchPage from "./pages/ResearchPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<People />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
