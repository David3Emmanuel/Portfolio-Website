import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Root";
import { HomePage, ErrorPage, BlogPage, BlogPost, ProjectsPage } from "./pages/pages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/blog", element: <BlogPage /> },
        { path: "/blog/:id", element: <BlogPost /> },
        { path: "/login", element: null },
        { path: "/forum", element: null },
        { path: "/:project", element: null }
      ]
    }
  ])

  return <RouterProvider router={router} />
}