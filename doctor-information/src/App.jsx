import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Appointment from './components/Appointment';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/appointment",
      element:<Appointment/>,
    }
  ]);


  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
