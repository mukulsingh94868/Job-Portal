import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/app-layout";
import LandingPage from "./pages/landing";
import OnBoarding from "./pages/onBoarding";
import JobListing from "./pages/jobListing";
import PostJob from "./pages/post-job";
import MyJobs from "./pages/my-jobs";
import Savedjobs from "./pages/saved-jobs";
import JobPage from "./pages/job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/saved-jobs",
        element: <Savedjobs />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
