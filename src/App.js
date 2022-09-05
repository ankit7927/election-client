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



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="election">
          <Route index element={<ElectionPage />} />
          <Route path="info/:eleID" element={<ElectionPageV2 />} />
          {/** this path should be authenticated */}
          <Route path="vote/:eleID" element={<ElectionPageV3 />} />
        </Route>

        <Route path="profile">
          {/** this path should be authenticated */}
          <Route index element={<ProfilePage />} />
        </Route>

        <Route path="aboutUs" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
