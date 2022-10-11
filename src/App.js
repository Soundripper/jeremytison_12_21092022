import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";

/**
 * 
 * @returns profile page from user Id
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<Profile />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
