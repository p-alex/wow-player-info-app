import { Routes, Route } from "react-router-dom";
import RedirectIfAuth from "./containers/RedirectIfAuth";
import RefreshTokenOnLoad from "./containers/RefreshTokenOnLoad";
import RequireAuth from "./containers/RequireAuth";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <RefreshTokenOnLoad>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <RedirectIfAuth>
              <Login />
            </RedirectIfAuth>
          }
        />
        <Route path="*" element={<p>Page does not exist</p>}></Route>
      </Routes>
    </RefreshTokenOnLoad>
  );
}

export default App;
