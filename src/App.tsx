import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import OrganizationPage from "./pages/OrganizationPage";
import RosterPage from "./pages/RosterPage";
import CoachesStaffPage from "./pages/CoachesStaffPage";
import SponsorPage from "./pages/SponsorPage";
import PracticeSchedulePage from "./pages/PracticeSchedulePage";
import TeamBoardPage from "./pages/TeamBoardPage";
import CoachBoardPage from "./pages/CoachBoardPage";
import StaffBoardPage from "./pages/StaffBoardPage";
import PlayBookPage from "./pages/PlayBookPage";
import MembershipFeePage from "./pages/MembershipFeePage";
import FanBoardPage from "./pages/FanBoardPage";
import MediaPage from "./pages/MediaPage";
import SupportPage from "./pages/SupportPage";
import SchedulePage from "./pages/SchedulePage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>

        <Route path="/club/about" element={<AboutPage />}></Route>
        <Route path="/club/organization" element={<OrganizationPage />}></Route>
        <Route path="/club/roster" element={<RosterPage />}></Route>
        <Route path="/club/member" element={<CoachesStaffPage />}></Route>
        <Route path="/club/sponsor" element={<SponsorPage />}></Route>

        <Route path="/news/schedule" element={<SchedulePage />}></Route>
        <Route path="/news/news" element={<NewsPage />}></Route>

        <Route path="/teamroom/practice_schedule" element={<PracticeSchedulePage />}></Route>
        <Route path="/teamroom/team_board" element={<TeamBoardPage />}></Route>
        <Route path="/teamroom/coach_board" element={<CoachBoardPage />}></Route>
        <Route path="/teamroom/staff_board" element={<StaffBoardPage />}></Route>
        <Route path="/teamroom/playbook" element={<PlayBookPage />}></Route>
        <Route path="/teamroom/membership_fee" element={<MembershipFeePage />}></Route>

        <Route path="/community/fan_board" element={<FanBoardPage />}></Route>
        <Route path="/community/media" element={<MediaPage />}></Route>
        <Route path="/community/support" element={<SupportPage />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
