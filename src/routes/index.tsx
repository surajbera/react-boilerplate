import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

// Layouts
import RootLayout from "@/layouts/RootLayout";

// Pages
const HomePage = lazy(() => import("@/pages/Home"));
const SamplePage = lazy(() => import("@/pages/Sample"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "sample",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SamplePage />
          </Suspense>
        ),
      }
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
