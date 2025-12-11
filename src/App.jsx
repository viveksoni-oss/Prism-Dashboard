import { ThemeProvider } from "./components/Theme-Provider";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LogIn";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar></NavBar>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="dashboard">
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
      <Toaster></Toaster>
    </ThemeProvider>
  );
}

export default App;
