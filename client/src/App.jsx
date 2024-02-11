// css imports
import "./App.css";

// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component imports
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

// create a browser router instance for handling navigation
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
