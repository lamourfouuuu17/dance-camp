import {
  LOGIN_ROUTE,
  MASTERCLASS_ROUTE,
  REGISTRATION_ROUTE,
  MASTERCLASSDESC_ROUTE,
} from "./utils/consts";
import Masterclass from "./pages/Masterclass";
import MasterclassDesc from "./pages/MasterclassDesc";
import Auth from "./pages/Auth";

export const authRoutes = [
  // {
  //   path: MASTERCLASS_ROUTE,
  //   Component: MasterclassDesc,
  // },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: MASTERCLASS_ROUTE,
    Component: Masterclass,
  },
  {
    path: MASTERCLASSDESC_ROUTE,
    Component: MasterclassDesc,
  },
];
