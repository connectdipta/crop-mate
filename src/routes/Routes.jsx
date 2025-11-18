import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import Hire from "../pages/Hire";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component:Home
        },
        {
            path: "/coverage",
            Component: Coverage,
            loader: () => fetch('/serviceCenters.json').then(res => res.json())
        },
        {
            path: "/hire",
            Component: Hire
        }
    ]
  },
]);