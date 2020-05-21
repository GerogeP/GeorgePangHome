
// @material-ui/icons
import HomeIcon from '@material-ui/icons/Home';
// import Subscriptions from "@material-ui/icons/Subscriptions";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import List from "@material-ui/icons/List";
// import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import Contacts from '@material-ui/icons/Contacts';
// import SettingsIcon from '@material-ui/icons/Settings';
// core components/views for Admin layout
import HomePage from "views/HomePage/HomePage.js";
import Demos from "views/Demos/Demos";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import Lists from "views/Lists/Lists.js";
import Contact from "views/Contact/Contact.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const homeRoutes = [
  {
    path: "/homepage",
    name: "Home Page",
    rtlName: "لوحة القيادة",
    icon: HomeIcon,
    component: HomePage,
    layout: "/home"
  },
  {
    path: "/demos",
    name: "Demos",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: Demos,
    layout: "/home"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/home"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/lists",
    name: "Lists",
    rtlName: "التطور للاحترافية",
    icon: List,
    component: Lists,
    layout: "/home"
  },
  {
    path: "/contact",
    name: "Contact",
    rtlName: "التطور للاحترافية",
    icon: Contacts,
    component: Contact,
    layout: "/home"
  }
];

export default homeRoutes;
