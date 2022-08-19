import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ElectionPage from "./pages/ElectionPage";
import VotePage from "./pages/VotePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="election">
          <Route index element={<ElectionPage />} />
          <Route path=":id" element={<VotePage />} />
          {/** this path should be authenticated */}
        </Route>

        <Route path="aboutUs" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="profile">
          {/** this path should be authenticated */}
          <Route index element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
