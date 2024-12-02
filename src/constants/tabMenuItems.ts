interface MenuItem {
  to: string;
  text: string;
  boardType?: string;
}

export interface TabMenuItems {
  club: MenuItem[];
  news: MenuItem[];
  teamroom: MenuItem[];
  community: MenuItem[];
}

const TAB_MENU_ITEMS: TabMenuItems = {
  club: [
    { to: "/club/about", text: "About" },
    { to: "/club/organization", text: "Organization" },
    { to: "/club/roster", text: "Roster" },
    { to: "/club/member", text: "Coaches & Staff" },
    { to: "/club/sponsor", text: "Sponsor" },
  ],
  news: [
    { to: "/news/schedule", text: "Schedule", boardType: "SCHEDULE" },
    { to: "/news/news", text: "News", boardType: "NEWS" },
  ],
  teamroom: [
    { to: "/teamroom/workout_schedules", text: "Workout Schedules", boardType: "WORKOUT_SCHEDULES" },
    { to: "/teamroom/team_board", text: "Team Board", boardType: "TEAM_BOARD" },
    { to: "/teamroom/coach_board", text: "Coach Board", boardType: "COACH_BOARD" },
    { to: "/teamroom/staff_board", text: "Staff Board", boardType: "STAFF_BOARD" },
    { to: "/teamroom/playbook", text: "Playbook", boardType: "PLAYBOOK" },
    { to: "/teamroom/membership_fee", text: "Membership Fee", boardType: "MEMBERSHIP_FEE" },
  ],
  community: [
    { to: "/community/guest_board", text: "Guest Board", boardType: "GUEST_BOARD" },
    { to: "/community/media", text: "Media", boardType: "MEDIA" },
    { to: "/community/support", text: "Support", boardType: "SUPPORT" },
  ],
};

export default TAB_MENU_ITEMS;
