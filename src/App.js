import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ElectionPage from "./pages/ElectionPage";
import ElectionPageV2 from "./pages/ElectionPageV2";
import Layout from "./components/Layout";
import ElectionPageV3 from "./pages/ElectionPageV3";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="election">
          <Route index element={<ElectionPage />} />
          <Route path="info" element={<ElectionPageV2 />} />
          <Route path="vote" element={<ElectionPageV3 />} />
        </Route>


        <Route path="profile">
          <Route index element={<ProfilePage />} />
        </Route>

        <Route path="aboutUs" element={<AboutPage />} />
        <Route path="auth" element={<LoginPage />} >
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
