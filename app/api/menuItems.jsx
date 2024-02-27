import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineDollar, AiOutlineShop } from 'react-icons/ai';
import { GiSwipeCard } from 'react-icons/gi';
import { PiBookOpenLight } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { LuSettings } from 'react-icons/lu';

export const menuItems = [
  {
    title: "Insights",
    path: "/dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: <AiOutlineDollar />,
    sublist: [
      {
        title: "Overview",
        path: "/dashboard/transactions/overview",
      },
      {
        title: "Needs Review",
        path: "/dashboard/transactions/needs-review",
      },
      {
        title: "Out of Policy",
        path: "/dashboard/transactions/out-of-policy",
      },
      {
        title: "Declined",
        path: "/dashboard/transactions/declined",
      },
    ]
  },
  {
    title: "Card",
    path: "/dashboard/card",
    icon: <GiSwipeCard />,
  },
  {
    title: "Vendors",
    path: "/dashboard/vendors",
    icon: <AiOutlineShop />,
  },
  {
    title: "Accounting",
    path: "/dashboard/accounting",
    icon: <PiBookOpenLight />,
  },
  {
    title: "People",
    path: "/dashboard/people",
    icon: <GoPeople />,
  },
  {
    title: "Reimburse",
    path: "/dashboard/reimburse",
    icon: <RiExchangeDollarLine />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <LuSettings />,
  },
];