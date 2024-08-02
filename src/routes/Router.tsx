import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/club/AboutPage";
import OrganizationPage from "../pages/club/OrganizationPage";
import RosterPage from "../pages/club/RosterPage";
import CoachesStaffPage from "../pages/club/CoachPage";
import SponsorPage from "../pages/club/SponsorPage";
import PracticeSchedulePage from "../pages/teamroom/PracticeSchedulePage";
import TeamBoardPage from "../pages/teamroom/TeamBoardPage";
import CoachBoardPage from "../pages/teamroom/CoachBoardPage";
import StaffBoardPage from "../pages/teamroom/StaffBoardPage";
import PlaybookPage from "../pages/teamroom/PlaybookPage";
import MembershipFeePage from "../pages/teamroom/MembershipFeePage";
import FanBoardPage from "../pages/community/FanBoardPage";
import MediaPage from "../pages/community/MediaPage";
import SupportPage from "../pages/community/SupportPage";
import SchedulePage from "../pages/news/SchedulePage";
import NewsPage from "../pages/news/NewsPage";
import Base from "../Base";
import MyPagePage from "~/pages/MyPagePage";
import SignUpPage from "~/pages/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="/" element={<MainPage />} />

          <Route path="/my_page" element={<MyPagePage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/club/about" element={<AboutPage />} />
          <Route path="/club/organization" element={<OrganizationPage />} />
          <Route path="/club/roster" element={<RosterPage />} />
          <Route path="/club/member" element={<CoachesStaffPage />} />
          <Route path="/club/sponsor" element={<SponsorPage />} />

          <Route path="/news/schedule" element={<SchedulePage />} />
          <Route path="/news/news" element={<NewsPage />} />

          <Route path="/teamroom/practice_schedule" element={<PracticeSchedulePage />} />
          <Route path="/teamroom/team_board" element={<TeamBoardPage />} />
          <Route path="/teamroom/coach_board" element={<CoachBoardPage />} />
          <Route path="/teamroom/staff_board" element={<StaffBoardPage />} />
          <Route path="/teamroom/playbook" element={<PlaybookPage />} />
          <Route path="/teamroom/membership_fee" element={<MembershipFeePage />} />

          <Route path="/community/fan_board" element={<FanBoardPage />} />
          <Route path="/community/media" element={<MediaPage />} />
          <Route path="/community/support" element={<SupportPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
