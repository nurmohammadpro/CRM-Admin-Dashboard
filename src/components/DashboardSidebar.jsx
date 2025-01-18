import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AppsIcon from "@mui/icons-material/Apps";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import DescriptionIcon from "@mui/icons-material/Description";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import EmailIcon from "@mui/icons-material/Email";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import HttpsIcon from "@mui/icons-material/Https";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SellIcon from "@mui/icons-material/Sell";
import SendIcon from "@mui/icons-material/Send";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SubjectIcon from "@mui/icons-material/Subject";
import TourIcon from "@mui/icons-material/Tour";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

import SidebarMenuItem from "./SidebarMenuItem";

export const SidebarMenuItems = [
  {
    title: "Overview",
    children: [
      { title: "App", path: "/overview/app", icon: <AppsIcon /> },
      {
        title: "Ecommerce",
        path: "/overview/ecommerce",
        icon: <ShoppingBagIcon />,
      },
      {
        title: "Analytics",
        path: "/overview/analytics",
        icon: <AnalyticsIcon />,
      },
      {
        title: "Banking",
        path: "/overview/banking",
        icon: <AccountBalanceIcon />,
      },
      {
        title: "Booking",
        path: "/overview/booking",
        icon: <AttachMoneyIcon />,
      },
      { title: "File", path: "/overview/file", icon: <FilePresentIcon /> },
      { title: "Course", path: "/overview/course", icon: <AssignmentIcon /> },
    ],
  },
  {
    title: "Management",
    children: [
      { title: "User", path: "/management/user", icon: <PersonIcon /> },
      {
        title: "Product",
        path: "/management/product",
        icon: <Inventory2Icon />,
      },
      { title: "Order", path: "/management/order", icon: <SellIcon /> },
      {
        title: "Invoice",
        path: "/management/invoice",
        icon: <ReceiptLongIcon />,
      },
      { title: "Blog", path: "/management/blog", icon: <RssFeedIcon /> },
      { title: "Job", path: "/management/job", icon: <WorkHistoryIcon /> },
      { title: "Tour", path: "/management/tour", icon: <TourIcon /> },
      {
        title: "File Management",
        path: "/management/file-management",
        icon: <DescriptionIcon />,
      },
      { title: "Mail", path: "/management/mail", icon: <EmailIcon /> },
      { title: "Chat", path: "/management/chat", icon: <SendIcon /> },
      {
        title: "Calendar",
        path: "/management/calendar",
        icon: <CalendarMonthIcon />,
      },
      { title: "Kanban", path: "/management/kanban", icon: <ViewKanbanIcon /> },
    ],
  },
  {
    title: "Misc",
    children: [
      { title: "Permission", path: "/misc/permission", icon: <HttpsIcon /> },
      {
        title: "Label",
        children: [
          {
            title: "Label1a",
            path: "/misc/label/label1a",
            icon: <HorizontalSplitIcon />,
          },
          {
            title: "Label1b",
            path: "/misc/label/label1b",
            icon: <HorizontalSplitIcon />,
          },
        ],
      },
      {
        title: "Disabled",
        path: "/misc/disabled",
        icon: <DisabledByDefaultIcon />,
      },
      {
        title: "Label New",
        path: "/misc/label-new",
        icon: <LabelImportantIcon />,
      },
      { title: "Caption", path: "/misc/caption", icon: <ClosedCaptionIcon /> },
      { title: "Params", path: "/misc/params", icon: <SubjectIcon /> },
      {
        title: "Blank",
        path: "/misc/blank",
        icon: <CheckBoxOutlineBlankIcon />,
      },
    ],
  },
];
export default function Sidebar() {
  const renderMenuItems = (menuItems) =>
    menuItems.map((item, index) => {
      if (item.children) {
        // If the item has submenus, render them recursively
        return (
          <div key={index} className="">
            <p className="font-semibold text-gray-800">{item.title}</p>
            {renderMenuItems(item.children)}
          </div>
        );
      } else {
        // Render a single menu item
        return (
          <SidebarMenuItem
            key={index}
            title={item.title}
            icon={item.icon || null} // Optional icon
            variant="light"
            external={item.external} // Handle external links
            path={item.path}
          />
        );
      }
    });

  return (
    <div className="sidebar bg-gray-100 p-4 w-[250px]">
      {renderMenuItems(SidebarMenuItems)}
    </div>
  );
}
