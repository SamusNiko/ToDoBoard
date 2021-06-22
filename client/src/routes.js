import Boards from "./pages/Boards";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
import ProjectsDetails from "./pages/ProjectsDetails";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import { BOARDS_ROUTE, INFO_ROUTE, PROJECT_ROUTE, SETTINGS_ROUTE, TASKS_LIST_ROUTE, PROJECT_DETAILS_ROUTE, AUTH_ROUTE, REGISTRATION_ROUTE } from "./utils/const";

export const publicRoutes = [{
        path: TASKS_LIST_ROUTE,
        Component: Tasks
    },
    {
        path: BOARDS_ROUTE,
        Component: Boards
    },
    {
        path: INFO_ROUTE,
        Component: Info
    },
    {
        path: PROJECT_ROUTE,
        Component: Projects
    },
    {
        path: PROJECT_DETAILS_ROUTE,
        Component: ProjectsDetails
    },
    {
        path: SETTINGS_ROUTE,
        Component: Settings
    }
]

export const authRoutes = [{
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]