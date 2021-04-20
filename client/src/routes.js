import Boards from "./pages/Boards";
import Info from "./pages/Info";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import TasksList from "./pages/TasksList";
import { BOARDS_ROUTE, INFO_ROUTE, PROJECT_ROUTE, SETTINGS_ROUTE, TASKS_LIST_ROUTE } from "./utils/const";

export const publicRoutes = [{
        path: TASKS_LIST_ROUTE,
        Component: TasksList
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
        path: SETTINGS_ROUTE,
        Component: Settings
    }
]