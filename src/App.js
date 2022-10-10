import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Profile from "./pages/Profile";

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
