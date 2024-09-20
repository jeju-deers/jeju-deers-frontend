import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import AboutPage from "../pages/club/AboutPage";
import OrganizationPage from "../pages/club/OrganizationPage";
import PlayerPage from "~/pages/club/PlayerPage";
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
import NewsWritePage from "~/pages/common/NewsWritePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<MainPage />} />

          <Route path="my_page" element={<MyPagePage />} />
          <Route path="signup" element={<SignUpPage />} />

          <Route path="club">
            <Route path="about" element={<AboutPage />} />
            <Route path="organization" element={<OrganizationPage />} />
            <Route path="roster" element={<PlayerPage />} />
            <Route path="member" element={<CoachesStaffPage />} />
            <Route path="sponsor" element={<SponsorPage />} />
          </Route>

          <Route path="news">
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path=":section/write" element={<NewsWritePage />} />
          </Route>

          <Route path="teamroom">
            <Route path="practice_schedule" element={<PracticeSchedulePage />} />
            <Route path="team_board" element={<TeamBoardPage />} />
            <Route path="coach_board" element={<CoachBoardPage />} />
            <Route path="staff_board" element={<StaffBoardPage />} />
            <Route path="playbook" element={<PlaybookPage />} />
            <Route path="membership_fee" element={<MembershipFeePage />} />
            <Route path=":section/write" element={<NewsWritePage />} />
          </Route>

          <Route path="community">
            <Route path="fan_board" element={<FanBoardPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path=":section/write" element={<NewsWritePage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
