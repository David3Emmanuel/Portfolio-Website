import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Root";
import { HomePage, ErrorPage, BlogPage, BlogPost, ProjectsPage, NewBlogPost } from "./pages/pages";
import SignIn from "./SIgnIn/SignIn";

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
        { path: "/blog/create", element: <NewBlogPost /> },
        { path: "/blog/:id", element: <BlogPost /> },
        { path: "/login", element: <SignIn /> },
        { path: "/forum", element: null },
        { path: "/:project", element: null }
      ]
    }
  ])

  return <RouterProvider router={router} />
}