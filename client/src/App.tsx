import { Routes, Route } from "react-router-dom";
import RedirectIfAuth from "./containers/RedirectIfAuth";
import RefreshTokenOnLoad from "./containers/RefreshTokenOnLoad";
import RequireAuth from "./containers/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Character from "./pages/Character";
import Layout from "./layout/Layout";
function App() {
  return (
    <RefreshTokenOnLoad>
      <Routes>
        <Route
          path="login"
          element={
            <RedirectIfAuth>
              <Login />
            </RedirectIfAuth>
          }
        />
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="characters/:realm_slug/:char_name"
            element={
              <RequireAuth>
                <Character />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<p>Page does not exist</p>}></Route>
      </Routes>
    </RefreshTokenOnLoad>
  );
}

export default App;
