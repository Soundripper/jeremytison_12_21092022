import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Home from './pages/Home/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

/**
 * 
 * @returns profile page from user Id
 */
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/user/:id" element={<Profile />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
