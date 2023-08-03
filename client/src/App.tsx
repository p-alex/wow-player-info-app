import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Character from './pages/Character';
import Layout from './Layout';
import RefreshTokenOnLoad from './containers/RefreshTokenOnLoad';
import RedirectIfAuth from './containers/RedirectIfAuth';

function App() {
  return (
    <RefreshTokenOnLoad>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectIfAuth>
              <Login />
            </RedirectIfAuth>
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:realm_slug/:class/:char_name" element={<Character />} />
        </Route>
        <Route path="*" element={<p>Page does not exist</p>}></Route>
      </Routes>
    </RefreshTokenOnLoad>
  );
}

export default App;
