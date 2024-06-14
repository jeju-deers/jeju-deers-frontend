import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/club/AboutPage";
import OrganizationPage from "./pages/club/OrganizationPage";
import RosterPage from "./pages/club/RosterPage";
import CoachesStaffPage from "./pages/club/CoachesStaffPage";
import SponsorPage from "./pages/club/SponsorPage";
import PracticeSchedulePage from "./pages/teamroom/PracticeSchedulePage";
import TeamBoardPage from "./pages/teamroom/TeamBoardPage";
import CoachBoardPage from "./pages/teamroom/CoachBoardPage";
import StaffBoardPage from "./pages/teamroom/StaffBoardPage";
import PlaybookPage from "./pages/teamroom/PlaybookPage";
import MembershipFeePage from "./pages/teamroom/MembershipFeePage";
import FanBoardPage from "./pages/community/FanBoardPage";
import MediaPage from "./pages/community/MediaPage";
import SupportPage from "./pages/community/SupportPage";
import SchedulePage from "./pages/news/SchedulePage";
import NewsPage from "./pages/news/NewsPage";
import Base from "./Base";
import BaseMain from "./BaseMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseMain />}>
          <Route path="/" element={<MainPage />}></Route>
        </Route>
        <Route path="/" element={<Base />}>
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
          <Route path="/teamroom/playbook" element={<PlaybookPage />}></Route>
          <Route path="/teamroom/membership_fee" element={<MembershipFeePage />}></Route>

          <Route path="/community/fan_board" element={<FanBoardPage />}></Route>
          <Route path="/community/media" element={<MediaPage />}></Route>
          <Route path="/community/support" element={<SupportPage />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
